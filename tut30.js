console.log("This is tutorial 30");

const proto={
    slogan: function(){
        return `This company is th e best`;
    },
    changeName: function(newName){
        this.name= newName
    }
}

// This creates harry object
let s1=Object.create(proto);
s1.name="sanket";
s1.role="programmer";
s1.changeName("sanket")
console.log(s1)

// method two for making object
const s2=Object.create(proto,{
    name:{value:"rohan",writable:true},
    roel:{value:"programmer"},
});

s2.changeName("rohan_das")
console.log(s2)


function Employee(name,salary,experience)
{
    this.name=name;
    this.salary=salary;
    this.experience=experience;
}

Employee.prototype.slogan=function(){
    return `this company is the best regards ${this.name}`
}

let s3=new Employee("preet",60000,35);
console.log(s3)

function programmer(name,salary,experience,language){
    Employee.call(this,name,salary,experience);
    this.language=language;

}

programmer.prototype=Object.create(Employee.prototype);

programmer.prototype.constructor = programmer;

let jay=new programmer("mayur",2,0,"php");
console.log(jay)
