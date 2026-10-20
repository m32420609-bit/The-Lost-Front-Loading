// Demo progress for browser preview / GitHub Pages. Replace with real server hooks if your loading framework supports them.
(() => {
  const fill = document.getElementById('progressFill');
  const percent = document.getElementById('percent');
  let value = 0;
  const timer = window.setInterval(() => {
    value = Math.min(100, value + Math.max(1, Math.random() * 4));
    fill.style.width = `${value}%`;
    percent.textContent = `${Math.floor(value)}%`;
    if (value >= 100) window.clearInterval(timer);
  }, 350);
})();
