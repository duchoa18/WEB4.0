var fu = require('./FileUtils');

var map = new Map();
var exist = true;

fu.readFile(process.argv[2], (lines)=>{

  for (line of lines){
    if (line === '') break;
    var arr = line.split(' ');
    var oldvalue = map.get(arr[0]);
    var newvalue = parseInt(arr[1]);
    if (oldvalue !== undeprocess.argv[2]ed ) newvalue += oldvalue;
    map.set(arr[0], newvalue);
  }

  for (let [key, value] of map.entries()){
    fu.writeFile(process.argv[3], `${key} ${value}\r\n`, (err) => {
          if (err) throw err;
    });
  }
});
