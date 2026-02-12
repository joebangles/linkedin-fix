const toggle = document.getElementById("toggle");
const status = document.getElementById("status");

chrome.storage.local.get("enabled", (data) => {
  const enabled = data.enabled !== false;
  updateUI(enabled);
});

toggle.addEventListener("click", () => {
  chrome.storage.local.get("enabled", (data) => {
    const newState = data.enabled === false;
    chrome.storage.local.set({ enabled: newState });
    updateUI(newState);
  });
});

function updateUI(enabled) {
  status.textContent = enabled ? "Extension is active." : "Extension is disabled.";
  toggle.textContent = enabled ? "Disable" : "Enable";
}
