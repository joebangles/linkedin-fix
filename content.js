// Content script — runs on LinkedIn pages

function setDisabledState(disabled) {
  if (disabled) {
    document.documentElement.setAttribute("data-linkedin-fix-disabled", "");
  } else {
    document.documentElement.removeAttribute("data-linkedin-fix-disabled");
  }
}

chrome.storage.local.get("enabled", (data) => {
  setDisabledState(data.enabled === false);
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.enabled) {
    setDisabledState(changes.enabled.newValue === false);
  }
});
