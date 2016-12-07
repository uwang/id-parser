var parser = require('../index.js');

var list = [
  '45222319950814004X',
  '330722197609192116',
  '430421197710177894'
];

for (var i = 0; i < list.length; i++ ) {
  console.log(parser.get(list[i]));
}
