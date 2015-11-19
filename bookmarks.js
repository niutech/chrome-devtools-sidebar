function update(tree) {
  var ul = document.getElementById('bookmarks');
  ul.innerHTML = render(tree[0].children);
  ul.addEventListener('click', function(e) {
    if(e.target.classList.contains('folder')) {
      e.target.classList.toggle('open');
      return false;
    }
  });
}

function render(tree) {
  var html = '';
  tree.forEach(function(i) {
    html += '<li><a href="' +
      (i.url ? i.url + '" target="_top"><img src="http://www.google.com/s2/favicons?domain=' + (i.url.match(/:\/\/(.[^/]+)/)||[,'example.com'])[1] + '">' : '#" class="folder">') +
      i.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;') + '</a>' +
      (i.children && i.children.length ? '<ul>' + render(i.children) + '</ul>' : '') + '</li>';
  });
  return html;
}
