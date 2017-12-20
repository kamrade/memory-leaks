console.log('--- initial ---');

// FIRST memory leak

var x = [];
function grow() {
  for (var i = 0; i < 10000; i++) {
    document.body.appendChild(document.createElement('div'));
  }
  x.push(new Array(1000000).join('x'));
}

document.getElementById('grow').addEventListener('click', grow);

// SECOND memory leak

var row = document.getElementById('row');
var ul  = document.getElementById('ul');

// ul.parentNode.remove(ul);

setTimeout(function() {
  console.dir(ul);
  console.dir(row);
}, 1000);