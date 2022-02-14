const Employee = require("./Employee");

// TODO: Create a `Boat` class that extends the `Vehicle` class

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
        console.log(`Intern instance made! Named ${this.name}`);
    }

    getSchool() {
        console.log(`Interns school is: ${this.school}`);
        return this.school;
    }

    getRole() {
        console.log(`Role is Intern`);
        return "Intern";
    }
}

module.exports = Intern;
