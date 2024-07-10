const a = require('fs');

const b=a.readFileSync('file.txt');
console.log(b);
console.log(b.toString())
a.writeFile('file2.txt',"this is data",()=>{
    console.log("written to the file")
})
a.writeFileSync('file3.txt','hello this is lalith')
const c=a.readFileSync('file3.txt');
console.log(c.toString())

console.log("Finished sucessfully")

 