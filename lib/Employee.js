//parent class for all three subclasses
var idCount = 0;
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        console.log(`Employee instance made! Named ${this.name}`);
        idCount += 1;
    }

    getName() {
        return this.name;
        console.log(`Employee name is: ${this.name}`);
    }

    getId() {
        return this.id;
        console.log(`Employee name is: ${this.id}`);
    }

    getEmail() {
        return this.email;
        console.log(`Employee name is: ${this.email}`);
    }

    getRole() {
        return "Employee";
        console.log(`Role is generalEmployee`);
    }
}
module.exports = Employee;
