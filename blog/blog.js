const progress = document.getElementById("readingProgress");
let scheduled = false;

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const fraction = scrollable > 0 ? window.scrollY / scrollable : 0;
  progress.style.width = Math.max(0, Math.min(1, fraction)) * 100 + "%";
  scheduled = false;
}

window.addEventListener("scroll", () => {
  if (scheduled) return;
  scheduled = true;
  window.requestAnimationFrame(updateProgress);
}, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();

const map = document.getElementById("threadMap");
const traceButton = document.getElementById("traceButton");
traceButton.addEventListener("click", () => {
  const active = map.classList.toggle("traced");
  traceButton.setAttribute("aria-pressed", String(active));
  document.getElementById("traceLabel").textContent = active ? "Thread traced" : "Trace the thread";
});
