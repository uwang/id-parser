var moment = require('moment');
var gb2260 = require('gb2260');
// var revisions = gb2260.revisions();
// console.log(revisions.length);

// register revision data
gb2260.register('201410', require('gb2260/lib/201410'));
var gb = new gb2260.GB2260();

function get(id) {
  if(typeof id !== 'string' || id.length !== 18) {
    return;
  }
  var localCode = id.substring(0,6);
  var division = gb.get(localCode);
  var homeTown = division!==null ? division.toString() : '无对应数据';
  var date = moment(id.substring(6,14),'YYYYMMDD');
  return {
    homeTown,
    birthday: date.isValid() ? date : moment(),
    sex: id.substring(16,17)%2 === 0 ? '女' : '男'
  }
};

// console.log(get('45222319950814004X'));
// console.log(get('330722197609192116'));
// console.log(get('430421197710177894'));

exports.get = get;
