const UPSTREAM = 'https://dashboard.polymerlabs.org/api/analytics?environment=mainnet';

export const onRequestGet = async () => {
  let totalValue = null;
  let totalChains = null;
  let totalProofs = null;

  try {
    const r = await fetch(UPSTREAM, {
      cf: { cacheTtl: 300, cacheEverything: true },
    });
    if (r.ok) {
      const j = await r.json();
      totalValue = j?.analytics?.totalValue ?? null;
      totalChains = j?.stats?.totalSupportedChains ?? null;
      totalProofs = j?.stats?.totalProofJobs ?? null;
    }
  } catch {}

  return new Response(
    JSON.stringify({ totalValue, totalChains, totalProofs }),
    {
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, max-age=300, s-maxage=300',
      },
    },
  );
};
