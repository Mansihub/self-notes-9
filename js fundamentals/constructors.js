//CREATING OBJECT USING CONSTRUCTOR
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";//added later
  }

  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
  console.log(myFather)
  console.log(myMother)

//The JavaScript prototype property allows us to add new properties and methods to object constructors:

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  Person.prototype.nationality = "Indian";

  Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
  };
console.log(myFather.name())
console.log(myFather.nationality);
  
  