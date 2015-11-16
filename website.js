document.getElementById('website').addEventListener('submit', function() {
  var q = document.getElementById('q').value;
  if(q.indexOf('http') === 0)
    this.action = q;
  return true;
});