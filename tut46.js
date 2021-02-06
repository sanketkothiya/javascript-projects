console.log("This is regression form!!");
let reg=/harrytyt/;
reg=/harry/g;


console.log(reg);
console.log(reg.source);

let s = "This is great code with harry and also harry bhai";

let result=reg.exec(s);
console.log(result);

if (result) {
        console.log(result);
        console.log(result.input);
        console.log(result.index);
    }

// let result2=reg.test(s);
// console.log(result2);

// let result3=s.match(reg);
// console.log(result3);

let rs4=s.search(reg);
console.log(rs4);


let rs5=s.replace(reg,"SANKET");
console.log(rs5);



