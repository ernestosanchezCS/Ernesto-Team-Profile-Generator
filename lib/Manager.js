const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
        console.log(`Manager instance made! Named ${this.name}`);
    }

    getRole() {
        console.log("Role is Manager");
        return "Manager";
    }
}

module.exports = Manager;
