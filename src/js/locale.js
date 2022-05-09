let locale = "ru";
if (!localStorage.getItem("locale")) {
  locale = "ru";
  localStorage.setItem("locale", locale);
}
locale = localStorage.getItem("locale");

const l_ = () => {
  return locale;
};

const toggleLocale = () => {
  if (locale == "ru") locale = "en";
  else locale = "ru";
  localStorage.setItem("locale", locale);
  document
    .querySelectorAll(`.text-one .locale:not(.${locale})`)
    .forEach((x) => {
      x.style.display = "none";
    });
  document.querySelectorAll(`.text-one .locale.${locale}`).forEach((x) => {
    x.style.display = "unset";
  });
};
window.toggleLocale = toggleLocale;

export { l_ };
