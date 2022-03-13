function onOpenButtonClick() {
  openModal();
}

function onCloseButtonClick() {
  closeModal();
}

function onEscapePress({ key }) {
  if (key === "Escape") closeModal();
}

function trapFocus({ target }) {
  const modal = document.querySelectorAll(".modal")[0];
  if (modal.contains(target)) return;
  const firstFocusableElement = document.querySelectorAll(
    ".firstFocusableElement"
  )[0];
  firstFocusableElement.focus();
}

function closeModal() {
  document.removeEventListener("focus", trapFocus, true);

  const overlay = document.querySelectorAll(".overlay")[0];
  overlay.classList.add("hidden");

  control.focus();
}

function enableClosingModal() {
  const closeButton = document.querySelectorAll(".closeModal")[0];

  closeButton.addEventListener("click", onCloseButtonClick);
  document.addEventListener("keyup", onEscapePress);
}

function openModal() {
  const overlay = document.querySelectorAll(".overlay")[0];
  overlay.classList.remove("hidden");

  const firstFocusableElement = document.querySelectorAll(
    ".firstFocusableElement"
  )[0];
  firstFocusableElement.focus();

  enableClosingModal();
}

const control = document.querySelectorAll(".auth")[0];

control.addEventListener("click", onOpenButtonClick);

document.addEventListener("focus", trapFocus, true);
