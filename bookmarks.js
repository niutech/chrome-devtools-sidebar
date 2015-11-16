function update(tree) {
  var ul = document.getElementById('bookmarks');
  ul.innerHTML = render(tree[0].children);
}

function render(tree) {
  var html = '';
  tree.forEach(function(i) {
    html += '<li' + (i.children && i.children.length ? ' class="folder">' : '>') +
      (i.url ? '<a href="' + i.url + '" target="_top">' + i.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;') + '</a>' :
      i.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')) +
      (i.children && i.children.length ? '<ul>' + render(i.children) + '</ul>' : '') + '</li>';
  });
  return html;
}