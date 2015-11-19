document.getElementById('website').addEventListener('submit', function() {
  var q = document.getElementById('q').value;
  if(q.indexOf('http') === 0) {
    this.action = q;
  }
  return true;
});
document.getElementById('back').addEventListener('click', function() {
  history.back();
});
document.getElementById('forward').addEventListener('click', function() {
  history.forward();
});
