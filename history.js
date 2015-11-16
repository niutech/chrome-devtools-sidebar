function update(tree) {
  var ul = document.getElementById('history');
  ul.innerHTML = render(tree);
}

function render(tree) {
  var html = '';
  tree.forEach(function(i) {
    html += '<li><a href="' + i.url + '" target="_top">' + (i.title ? i.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;') : i.url) + '</a></li>';
  });
  return html;
}