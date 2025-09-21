chrome.storage.sync.get("enabled", data => {
  if (data.enabled === undefined) {
    chrome.storage.sync.set({ enabled: true });
  }
});

document.getElementById("toggle").addEventListener("click", () => {
  chrome.storage.sync.get("enabled", data => {
    chrome.storage.sync.set({ enabled: !data.enabled });
    alert("Filter " + (!data.enabled ? "Enabled" : "Disabled"));
  });
});