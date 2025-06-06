window.generateJWT = function () {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const payload = btoa(
    JSON.stringify({ user: 'demo', iat: Math.floor(Date.now() / 1000) })
  );
  const signature = btoa('secret');
  return `${header}.${payload}.${signature}`;
};

document.addEventListener('DOMContentLoaded', () => {
  const tokenEl = document.getElementById('token');
  if (tokenEl) {
    tokenEl.textContent = document.body.token || '';
  }

  document.getElementById('change')?.addEventListener('click', () => {
    document.getElementById('title')!.textContent = 'Button Clicked';
  });
});
