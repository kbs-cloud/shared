function getAuthServerUrl() {
  const authProto = typeof window !== 'undefined' && window.location.protocol === 'https:' ? 'https:' : 'http:';
  if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
    const port = window.location.port;
    if (port.startsWith('19') || port.startsWith('20')) return 'http://localhost:19001';
    return 'http://localhost:28001';
  }
  return `${authProto}//auth.kbs-cloud.com`;
}
function getBackendPort(clientId) {
  switch (clientId) {
    case 'alchemist': case 'alchemists-crucible': return 29004;
    case 'starswarm': return 29002; case 'tickerclash': return 29003; case 'gridlock-neon': return 29005;
    case 'retrosweeper': return 20006; case 'sudoku-neon': case 'sudoku': return 20007;
    case 'baseball': case 'baseball-stats': return 19008; case 'wyrdmarch': return 20009; case 'craft-realm': return 19010;
    default: return 29000;
  }
}
function redirectToSSO(clientId, state) {
  if (typeof window === 'undefined') return;
  const packaged = window.location.protocol === 'file:' || window.location.hostname === '' || navigator.userAgent.toLowerCase().includes('electron');
  const localBackend = packaged ? `http://localhost:${getBackendPort(clientId)}` : window.location.origin;
  let target = `${getAuthServerUrl()}/api/auth/authorize?client_id=${encodeURIComponent(clientId)}&redirect_uri=${encodeURIComponent(`${localBackend}/api/auth/callback`)}`;
  if (packaged && state) { target += `&state=${encodeURIComponent(state)}`; window.open(target, '_blank'); } else window.location.href = target;
}
module.exports = { getAuthServerUrl, getBackendPort, redirectToSSO };
