(() => {
  const inputs = [...document.querySelectorAll("[data-search]")];
  if (!inputs.length) return;

  const focusSearch = () => {
    const hero = document.getElementById("hero-search");
    const target = hero || inputs[0];
    target.focus();
    target.select?.();
  };

  document.addEventListener("keydown", (event) => {
    if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) {
      return;
    }

    const tag = event.target?.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || event.target?.isContentEditable) {
      return;
    }

    event.preventDefault();
    focusSearch();
  });
})();
