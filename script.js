// A little easter egg for anyone who opens devtools — CS students check.
console.log(
  "%cHey, fellow dev 👋 — view-source is basically encouraged here.",
  "font-family: monospace; color: #8B7FD6; font-size: 13px;"
);

document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
