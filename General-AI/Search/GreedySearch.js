var fs = require("fs");

var data = fs.readFileSync('pattern1').toString();

console.log(data)
lines = data.split("\n")
rows = lines.length
columns = lines[0].length
matrix = lines.map(element => element.split(""))

for(let i=0;i<rows;i++){
    for(let j=0;j<columns;j++){
        if(matrix[i][j] !== "#"){
            matrix[i][j] = `${Math.abs(i-0)+Math.abs(j-5)}`
        }
    }
}

console.log(matrix)