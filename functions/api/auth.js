// GitHub OAuth proxy for Sveltia CMS (the same protocol Decap CMS uses).
//
// Setup:
//   1. Create a GitHub OAuth App: https://github.com/settings/developers
//        - Homepage URL:   https://polymerlabs.org
//        - Callback URL:   https://polymerlabs.org/api/callback
//   2. Add these env vars to the Cloudflare Pages project:
//        OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET
//   3. Visit /admin to log in.
//
// Flow: /api/auth?provider=github  →  redirect to GitHub  →  /api/callback
//        →  postMessage(token) back to the CMS popup.

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const provider = url.searchParams.get('provider') || 'github';
  if (provider !== 'github') {
    return new Response('Unsupported provider', { status: 400 });
  }

  const clientId = env.OAUTH_CLIENT_ID;
  if (!clientId) {
    return new Response('Server missing OAUTH_CLIENT_ID', { status: 500 });
  }

  const redirectUri = `${url.origin}/api/callback`;
  const scope = encodeURIComponent('repo,user');
  const state = crypto.randomUUID();

  const authorizeUrl =
    `https://github.com/login/oauth/authorize` +
    `?client_id=${encodeURIComponent(clientId)}` +
    `&scope=${scope}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&state=${state}`;

  return Response.redirect(authorizeUrl, 302);
}
