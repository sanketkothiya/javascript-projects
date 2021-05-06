console.log("This is tut 27");

let car={
    name:"maruti_800",
    topspeed:89,
    run:function(){
        console.log("car is running");
    }
};

// car.run()

function s1(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function() {
      console.log(`${this.name} Is Running`);
    };
    this.analyze = function() {
      console.log(
        `This car is slower by ${200 - this.topSpeed} Km/H than Mercedes`
      );
    };
  }

car1= new s1("Hundai",120)
car2= new s1("Honda",150)
car3= new s1("Mercedes",200)
car4= new s1("Nissan",190)
console.log(car1,car2,car3);