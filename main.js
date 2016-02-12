module.exports = {
  leapYear: function(year) {
    if(year % 4 === 0 && year % 100 === 0 && year % 400 !== 0) return false;
    if(year % 4 === 0) return true;
    else return false
  }
}

console.log(module.exports.leapYear(1600));
console.log(module.exports.leapYear(2000));
console.log(module.exports.leapYear(1700));
console.log(module.exports.leapYear(1800));
console.log(module.exports.leapYear(1900));
