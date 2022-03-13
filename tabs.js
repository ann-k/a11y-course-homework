function clickEventListener(event) {
  const tab = event.target;
  activateTab(tab, false);
}

function keydownEventListener(event) {
  var key = event.keyCode;

  switch (key) {
    case keys.end:
      event.preventDefault();
      focusLastTab();
      break;
    case keys.home:
      event.preventDefault();
      focusFirstTab();
      break;
  }
}

function keyupEventListener(event) {
  var key = event.keyCode;

  switch (key) {
    case keys.left:
    case keys.right:
      switchTabOnArrowPress(event);
      break;
    case keys.enter:
    case keys.space:
      activateTab(event.target);
      break;
  }
}

function switchTabOnArrowPress(event) {
  const pressed = event.keyCode;

  if (direction[pressed]) {
    const target = event.target;

    if (target.index !== undefined) {
      if (tabs[target.index + direction[pressed]]) {
        tabs[target.index + direction[pressed]].focus();
      } else if (pressed === keys.left) {
        focusLastTab();
      } else if (pressed === keys.right) {
        focusFirstTab();
      }
    }
  }
}

function activateTab(tab, setFocus) {
  setFocus = setFocus || true;
  deactivateTabs();

  tab.classList.add("active");
  tab.removeAttribute("tabindex");
  tab.setAttribute("aria-selected", "true");

  const controls = tab.getAttribute("aria-controls");

  document.getElementById(controls).classList.remove("hidden");

  if (setFocus) tab.focus();
}

function deactivateTabs() {
  Array.from(tabs).forEach(function (element) {
    element.classList.remove("active");
    element.setAttribute("tabindex", "-1");
    element.setAttribute("aria-selected", "false");
  });

  Array.from(panels).forEach(function (element) {
    element.classList.add("hidden");
  });
}

function focusFirstTab() {
  tabs[0].focus();
}

function focusLastTab() {
  tabs[tabs.length - 1].focus();
}

const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

Array.from(tabs).forEach(function (element, index) {
  element.addEventListener("click", clickEventListener);
  element.addEventListener("keyup", keyupEventListener);
  element.addEventListener("keydown", keydownEventListener);

  element.index = index;
});
