function logger(a, b) {
    console.log(`Value of number: ${a}, Value of msg: ${b}`);
}
var a = 12, b = "Hello Class";
logger(b, a);
// generics
function loggerV2(a, b) {
    console.log(`Value of number: ${a}, Value of msg: ${b}`);
}
var a = 12, b = "Hello Class";
loggerV2(a, b);
function loggerV3(p, a) {
    console.log(`Person: ${p.name}, Street: ${a.street}`);
}
const person = { name: "Kurt Wonnegut" };
const address = { street: "Lyngbyvej 23" };
loggerV3(person, address);
// class
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Address {
    constructor(street) {
        this.street = street;
    }
}
loggerV3(new Person("kurt"), new Address("blablavej"));
function loggerV4(p, a) {
    console.log(`${typeof (p)}: ${p}, ${typeof (a)}: ${a}`);
}
loggerV4(person, address);
loggerV4(1, address);
loggerV4(true, address);
class GenericLogger {
    constructor() {
        this.log = (a, b) => console.log("Generic Val 1: " + a, "Generic Val 2: " + b);
    }
}
const personLogger = new GenericLogger();
const numberStringLogger = new GenericLogger();
personLogger.log(person, address);
numberStringLogger.log(1, 'hello');
var numbers = [1, 2, 3];
//# sourceMappingURL=logger.js.map