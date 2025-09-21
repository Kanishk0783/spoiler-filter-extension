const blockedWords = ["spoiler", "hate", "kill yourself", "racist", "nsfw"];

function filterText(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    blockedWords.forEach(word => {
      if (node.textContent.toLowerCase().includes(word)) {
        node.parentNode.style.filter = "blur(5px)";
        node.parentNode.title = "Content hidden by filter";
      }
    });
  }
}

function scanPage() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    filterText(node);
  }
}

scanPage();
new MutationObserver(scanPage).observe(document.body, { childList: true, subtree: true });