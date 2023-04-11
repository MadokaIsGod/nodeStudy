let table = document.querySelector('table');
table.onclick = function (e) {
  if (e.target.nodeName === 'TD') {
    e.target.style.background = '#222'
  }
}