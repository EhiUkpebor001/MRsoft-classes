// JAVASCRIPT PROTOTYPE
/*
         The Javascript prototype property allows us to add new properties to object constructors.
         SYNTAX:
            constructorObjectName.prototype.newPropertyName = value;

            E.g;        Tesla.prototype.owner = "Ukpebor";
                            console.log(tesla1.owner);
*/

function Tesla(bName, bcolor, bmodel, byear) {
    this.name = bName;
    this.color = bcolor;
    this.model = bmodel;
    this.year = byear;
    this.drive = function() {
        console.log(`I am driving my ${this.name} Tesla now.`);
    };
    this.spec = () => {
        console.log(`Tesla name ${this.name}, ${this.color} color, model ${this.model}, was made in ${this.year}`);
    };

    // Default property
    this.isNew = true;
    this.engine = "V8-Fuel Engine";
};

let tesla1 = new Tesla("Explorer", "red", "racing", 2022);
let tesla2 = new Tesla("Cyber Truck", "blue", "luxury", 2023);

console.log(tesla1);
console.log(tesla2);

Tesla.prototype.owner = "Ehiremhen";        // Creating a new property for the object constructor function.
let tesla3 = new Tesla("Cyber Truck", "blue", "luxury", 2023);

console.log("\n", tesla3.owner);

// Creating a property that has a method value for the object constructor function.
Tesla.prototype.charge = function () {
    console.log(`Your ${this.name} tesla is currently charging.`);
};

tesla1.charge();


// JAVASCRIPT OBJECT METHODS
/*
        1)  Object.assign(target, source) -- Copies properties from a source object to a target object.
        2)  Object.create(object) -- Creates an object from an existing object.
        3)  Object.entries(object) -- Returns an array of the key/value pairs of an object. It converts an object into an array.
        4)  Object.fromEntries() -- Creates an object from a list of keys/values. It converts an array into an object.
        5)  Object.keys(object) -- Returns an array of the keys of an object.
        6)  Object.values(object) -- Returns an array of the property values of an object.
*/

/*  
    Example for Object.assign(target, source)
        If you want to change the value of a property in the Target Object during the Object.assign process, 
        then the propertyName has to be the same in the Target Object and the Source Object.
*/

// Target Object is student1
const student1 = {
    firstName: "Ehiremhen",
    lastName: "Ukpebor",
    age: 30,
    course: "CIS",
    greet: function () {
        console.log(`Hello, my first name is ${this.firstName}.`);
    }, 
    welcome() {
        console.log(`Hello ${this.firstName}, welcome to my program.`);
    }
}

// Source Object is student2
const student2 = {
    firstName: "Princess",
    lastName: "Obiwulu",
    age: 27
}

console.log("\n", student1);

Object.assign(student1, student2);
console.log("\n A few moments later...");

console.log(student1, "\n");


/*
    Example for Object.create(object)
*/

const student3 = Object.create(student1);
student3.firstName = "Pamilerin";
student3.greet();
student3.welcome();
console.log("\n", student3);
console.log("\n", student3.lastName);


/*
    Example for Object.entries(object)
*/

let studentInfo = Object.entries(student2);
console.log("\n", studentInfo);
console.table(studentInfo);


/*
    Example for Object.fromEntries()
*/

const phones = [["Infinix", 16], ["Tecno", 25], ["Redmi", 37]];
const phonesObject = Object.fromEntries(phones);
console.log("\n", phonesObject);

const studentInfoObject = Object.fromEntries(studentInfo);
console.log("\n", studentInfoObject);


/*
    Example for Object.keys(object)
*/

console.log("\n", Object.keys(phonesObject));


/*
    Example for Object.values(object)
*/

console.log("\n", Object.values(student1));


// ------------------------------------------------------------------------------------------
// USING the 'square bracket notation' and the 'dot notation' to create properties and values for an empty object.

const fruits = {};

fruits["fruitName"] = "Orange";
fruits.price = "$44";

console.log(fruits);