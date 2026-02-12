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
  status.textContent = enabled ? "Extension is active. Nobody else has an internship either, I promise." : "Extension is disabled. Use at your own risk.";
  toggle.textContent = enabled ? "Disable" : "Enable";
}
