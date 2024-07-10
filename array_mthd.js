let s_name = ['sahil','sahdev','vishal','parth']

// to convert into string 
let string = s_name.toString()
console.log(string);

// to find array element 

let pos = s_name.at(3);
let pos1 = s_name[2];
console.log(pos1);
console.log(pos);


// array all sign

let sign = s_name.join('*')
console.log(sign);  // like sahil * sahdev * vishal

let remove = s_name.pop()
console.log(remove);
console.log(s_name);
let add = s_name.push('vidhi','raj')
console.log(s_name);

