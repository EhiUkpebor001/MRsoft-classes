// Create a laptop object using the constructor function, it should have 4 properties, 2 default properties and 2 methods.
// Create 3 instances of laptop object.

function Laptop(lSize, lColor, lPrice, lCore) {
    this.size = lSize;
    this.color = lColor;
    this.price = `$${lPrice}`;
    this.core = lCore;
    this.manufacturer = "Hewlett Packett";
    this.country = "USA";
    this.info = () => {
        console.log(`Laptop manufacturer is '${this.manufacturer}' and it is made in '${this.country}'`);
    };
    this.productInfo = () => {
        console.log(`The size of this Hp laptop is '${this.size}' with core '${this.core}' of color '${this.color}' and its price is '$${this.price}'`);
    };
};

let laptop1 = new Laptop ("260x280", "grey", 670000, "corei7");
let laptop2 = new Laptop ("1600x900", "pink", 900000, "corei9");
let laptop3 = new Laptop ("1900x280", "black", 500000, "corei4");

console.log(laptop1);
console.log("\n");
laptop1.info();
laptop1.productInfo();
console.log("\n");

console.log(laptop2);
console.log("\n");
laptop2.info();
laptop2.productInfo();
console.log("\n");

console.log(laptop3);
console.log("\n");
laptop3.info();
laptop3.productInfo();