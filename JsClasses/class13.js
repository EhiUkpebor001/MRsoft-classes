// OBJECTS IN JAVASCRIPT

/*
    An Object can store arrays, another object, etc.
    Javascript is an object-based language, hence objects are the most important data types and they form the building blocks for modern javascript.
    Objects are variables with many values, these values are written as;
        name: value pairs.
    
    
    NOTE!!!
        It's common practice to declare objects with the const keyword.
*/

const empObject = {}; // This is an empty object

//  TYPES OF OBJECTS
/*
        1) Built-in Objects: These are objects provided by Javascript, such as Array, Number, Date, Math, String, etc.
        2) Custom / User-defined Objects: These are objects created by the programmer to suit their specific needs.

    //  String is an object that is why, methods (like; split(), replace(), etc) can be used on them.
*/

/*  
        WAYS OF CREATING AN OBJECT
            1) Creating an object with the object literal notation:
                Here, a colon (:) is used to seperate the objectPropertyName and the value, then a comma (,) seperates all the properties
                SYNTAX:
                    const objectName = {
                        propertyName: value,
                        propertyName: value,
                        propertyName: function () {
                            // code
                        },
                        propertyName: value
                    };

            2) Creating an object using an instance of the global object:
                Here, an equal to (=) is used to seperate the objectPropertyName and the value, then a semi-colon (;) seperates all the properties
                SYNTAX:
                    const objectName = new Object;
                
                    objectName.propertyName = value;
                    objectName.propertyName = value;
                    objectName.propertyName = function () {
                        // code
                    };

            3) Creating an object using the Constructor function:
                Here, an equal to (=) is used to seperate the propertyName and the parameterName, then a semi-colon (;) seperates all the properties
                SYNTAX:
                    function customObjectName (parameter1, parameter2, parameter3) {
                        this.propertyName = parameterName;
                        this.propertyName = parameterName;
                        this.propertyName = parameterName;
                        this.propertyName = function () {
                            // code
                        };
                        this.propertyName = () => {
                            // code
                        };
                    };

                    let objectInstanceName1 = new customObjectName ("argument1", "argument2", "argument3");
                    let objectInstanceName2 = new customObjectName ("argument1", "argument2", "argument3");

                    console.log(objectName1);
                    console.log(objectName1.propertyName() );        // To access the code in the method property.
*/

//  1) Creating an object with the object literal notation.
const student = {
    firstName: "John",
    lastName: "Wick",
    age: 30,
    country: "USA",
    
    // A method is a function inside an object
    greet: function () {
        // 'this' is a keyword used to refer to the current object. 
        // It won't work outside the 'student' object.
        console.log("Hi there, my name is", this.firstName, this.lastName);
    },

    isRegistered: true

};


// ACCESSING OBJECT PROPERTIES
/*
        We can access object properties using the following notations;
            1) dot notation : objectName.propertyName;
            2) square bracket notation : objectName["propertyName"];
*/
console.log(student.firstName, student.lastName);
console.log(student["country"]);
student.greet();            // How to call the method/function of an object.


// UPDATING OBJECT PROPERTIES
student.lastName = "The Beloved";
console.log("\nA few moments later...");
console.log(student.firstName, student.lastName);
student.greet();


//  DELETING PROPERTIES OF AN OBJECT
delete student.isRegistered;
console.log("\n", student);


//      2) Creating an object using an instance of the global object.
const car = new Object;

// We are creating properties for the CAR object and their values.
car.name = "Mercedes";
car.color = "Red";
car.year = 2010;
car.isRegistered = false;
car.drive = function () {
    console.log(`The ${car.name} car is driving!!!`);
};

console.log(student.isRegistered);  // The output is 'undefined' because we've deleted the 'isRegistered' property for the STUDENT object in line 108.
console.log("\n", car);
console.log("\n", car.name);
console.log("\n", car["color"]);
car.drive();


//      3) Creating an object using the Constructor function
function Bike(bName, bcolor, bmodel, byear) {
    this.name = bName;
    this.color = bcolor;
    this.model = bmodel;
    this.year = byear;
    this.drive = function() {
        console.log(`I am driving my ${this.name} bike now.`);
    };
    this.spec = () => {
        console.log(`Bike name ${this.name}, ${this.color} color, model ${this.model}, was made in ${this.year}`);
    };

    // Default property
    this.isNew = true;
    this.engine = "V8-Fuel Engine";
};


// bike1, bike2, bike3, bike4 are instances of the constructor function object (Bike).
let bike1 = new Bike("Yamaha", "red", "racing", 2010);
let bike2 = new Bike("Ducati", "white", "luxury", 2020);
let bike3 = new Bike("BMW", "black", "shopping");
let bike4 = new Bike("Ferarri", "pink", "homeland", 2010, 590);

console.log("\n", bike1);
console.log(bike2);
bike3.engine = "v6-Diesel Engine";      // I am changing the value of the engine property for bike3 instance.
bike3.driver = "Emeka";     // This is creating a new property, however, this property IS NOT EFFECTIVE ON THE CONSTRUCTOR FUNCTION OBJECT (Bike), because the way it is created, it is only effective for the bike3 instance.
console.log(bike3);
console.log(bike4, "\n");
bike1.drive();
bike2.spec();
bike3.spec();



/*
    CLASS EXERCISE 
        Create a 'dog' object, using the constructor function, it should have; name, specie, age, country. 
        With a method bark() which says "The dog is barking".
*/

function Dog (dname, specie, age, country) {
    this.name = dname;
    this.specie = specie;
    this.age = age;
    this.country = country;
    this.bark = function () {
        console.log(`The dog ${this.name} is barking.`);
    };
};

let dog1 = new Dog ("Fluffy", "Chihuahua", 13, "Albenia");
let dog2 = new Dog ("Lexxy", "German Shepherd", 5, "Germany");

console.log ("\n", dog1);
dog2.bark();