var ports = [];

chrome.runtime.onConnect.addListener(function(port) {
    if (port.name !== "bookmarks" && port.name !== "history")
      return;
    ports.push(port);
    var extensionListener = function(message, sender, sendResponse) {
      if (message.name === "getBookmarks") {
        chrome.bookmarks.getTree(function(tree) {
          ports.forEach(function(port) {
            if(port.name === "bookmarks")
              port.postMessage(tree);
          });
        });
      } else if (message.name === "getHistory") {
        chrome.history.search({text: '', /*startTime: (new Date()).getTime() - 604800000, maxResults: 1000*/}, function(tree) {
          ports.forEach(function(port) {
            if(port.name === "history")
              port.postMessage(tree);
          });
        });
      }
   };
    port.onMessage.addListener(extensionListener);
    port.onDisconnect.addListener(function(port) {
        var i = ports.indexOf(port);
        if(i !== -1)
          ports.splice(i, 1);
        port.onMessage.removeListener(extensionListener);
    });
});
