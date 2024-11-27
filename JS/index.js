var patternCont = document.getElementById('pattern');

var rowsNum = 5;

var pattern = '';

for (var x = 1; x <= rowsNum; x++) {
  pattern += '*'.repeat(x) + '\n';
}

patternCont.innerText = pattern;