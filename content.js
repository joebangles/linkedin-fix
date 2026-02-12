// Content script — runs on LinkedIn pages
chrome.storage.local.get("enabled", (data) => {
  if (data.enabled === false) return;

  console.log("LinkedIn Fix content script loaded.");
});
