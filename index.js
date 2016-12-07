var moment = require('moment');
var gb2260 = require('gb2260');
// var revisions = gb2260.revisions();
// console.log(revisions.length);

// register revision data
gb2260.register('201410', require('gb2260/lib/201410'));
var gb = new gb2260.GB2260();

function get(id) {
  var id = String(id);
  if(id.length !== 18) {
    return;
  }
  var division = gb.get(id.substring(0,6));
  var hometown = division!==null ? division.toString() : '无对应数据';
  var date = moment(id.substring(6,14),'YYYYMMDD');
  return {
    hometown,
    birthday: date.isValid() ? date : moment(),
    sex: id.substring(16,17)%2 === 0 ? '女' : '男'
  }
};

exports.get = get;
