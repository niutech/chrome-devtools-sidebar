
chrome.devtools.panels.create("Bookmarks", "images/bookmarks.svg", "bookmarks.html", function(panel) {
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

chrome.devtools.panels.create("History",  "images/history.svg", "history.html", function(panel) {
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

chrome.devtools.panels.create("Website",  "images/website.svg", "website.html", function(panel) {
});
