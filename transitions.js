document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a').forEach(link => {
    if (link.hostname !== window.location.hostname) return;
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.href;
      document.body.style.transition = 'transform 0.45s cubic-bezier(0.77,0,0.18,1), opacity 0.45s ease';
      document.body.style.transform = 'translateX(-60px)';
      document.body.style.opacity = '0';
      setTimeout(() => window.location = href, 450);
    });
  });
});
