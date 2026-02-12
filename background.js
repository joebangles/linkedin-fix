function updateIcon(enabled) {
  const icon = enabled ? "icons/app-enabled.png" : "icons/app-disabled.png";
  chrome.action.setIcon({ path: icon });
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ enabled: true });
  updateIcon(true);
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.enabled) {
    updateIcon(changes.enabled.newValue !== false);
  }
});
