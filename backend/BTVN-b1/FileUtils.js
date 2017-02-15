var fs = require('fs');

module.exports = {
  readFile,
  writeFile
}

readFile: (file , callback) => {
  if (!(fs.existsSync(file))){
    console.log("File not found");
    return ;
  }

  var lines = [];
    lines = fs.readFileSync(file).toString().split("\n\r");
    callback(lines);
    return lines;
}

writeFile: (file,data,callback) => fs.appendFile(file,data,callback);
