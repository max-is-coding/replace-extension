chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['assets/js/script.js'],
    })
  }
})
