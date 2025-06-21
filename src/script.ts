window.generateJWT = function () {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const payload = btoa(JSON.stringify({ user: 'demo', iat: Math.floor(Date.now() / 1000) }));
  const signature = btoa('secret');
  return `${header}.${payload}.${signature}`;
};

document.addEventListener('DOMContentLoaded', () => {
  const tokenEl = document.getElementById('token');
  if (tokenEl) {
    const bodyToken = (document.body as HTMLBodyElement).token;
    const winToken = window.token;
    const token = bodyToken || winToken || '';
    tokenEl.textContent = token;
  }

  document.getElementById('change')?.addEventListener('click', () => {
    const titleEl = document.getElementById('title');
    if (titleEl) {
      titleEl.textContent = 'Button Clicked';
    }
  });
});
