console.log("This is tutorial 44")

let a="sanket kothiya";
a=undefined;
if(a!=undefined){
    throw new Error("this is not undefind");
}
else{
    console.log("this is undefined")
}

try{
    console.log("we are inside try block");
    functionHarry();

}catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}finally{
    console.log("finally this is working...");
}