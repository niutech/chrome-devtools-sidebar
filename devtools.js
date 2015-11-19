
chrome.devtools.panels.create("Bookmarks", "images/bookmarks.png", "bookmarks.html", function(panel) {
  var win, tree;
  var port = chrome.runtime.connect({
      name: 'bookmarks'
  });
  port.onMessage.addListener(function(message) {
    tree = message;
    if(win && tree) {
      win.update(tree);
      tree = null;
    }
  });
  port.postMessage({
      name: 'getBookmarks'
  });
  panel.onShown.addListener(function(panelWin) {
    win = panelWin;
    if(tree) {
      win.update(tree);
      tree = null;
    }
  });
});

chrome.devtools.panels.create("History",  "images/history.png", "history.html", function(panel) {
  var win, tree;
  var port = chrome.runtime.connect({
      name: 'history'
  });
  port.onMessage.addListener(function(message) {
    tree = message;
    if(win && tree) {
      win.update(tree);
      tree = null;
    }
  });
  port.postMessage({
      name: 'getHistory'
  });
  panel.onShown.addListener(function(panelWin) {
    win = panelWin;
    if(tree) {
      win.update(tree);
      tree = null;
    }
  });
});

chrome.devtools.panels.create("Website",  "images/website.png", "website.html", function(panel) {
});
