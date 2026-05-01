// OAuth callback — exchanges the code for an access token and pushes the
// result back to the CMS popup via postMessage. Used by Sveltia & Decap.

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const code = url.searchParams.get('code');

  if (!code) {
    return new Response('Missing code', { status: 400 });
  }

  const clientId = env.OAUTH_CLIENT_ID;
  const clientSecret = env.OAUTH_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    return new Response('Server missing OAUTH_* env vars', { status: 500 });
  }

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: `${url.origin}/api/callback`,
    }),
  });

  const data = await tokenRes.json();

  const payload = data.access_token
    ? { token: data.access_token, provider: 'github' }
    : { error: data.error || 'unknown_error' };

  const message = data.access_token
    ? `authorization:github:success:${JSON.stringify(payload)}`
    : `authorization:github:error:${JSON.stringify(payload)}`;

  // The CMS popup listens for postMessage events on its window opener.
  const html = `<!doctype html><html><body><script>
    (function() {
      function send(e) {
        window.opener && window.opener.postMessage(${JSON.stringify(message)}, e.origin || '*');
      }
      window.addEventListener('message', send, false);
      window.opener && window.opener.postMessage('authorizing:github', '*');
      // Some clients expect a re-emit after a tick
      setTimeout(function() {
        window.opener && window.opener.postMessage(${JSON.stringify(message)}, '*');
        window.close();
      }, 200);
    })();
  </script><p>You can close this window.</p></body></html>`;

  return new Response(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
