console.log("This is tutorial 28");

let obj={
    name:"sanket",
    branch:"computer",
    address:"MotaVarachha"
}

function s1(givenName){
    this.name= givenName

}

s1.prototype.getName=function(){
    return this.name;
}

s1.prototype.setName=function(newName){
    this.name=newName;
}

let s3=new s1("sanket_kothiya")
console.log(s3);
