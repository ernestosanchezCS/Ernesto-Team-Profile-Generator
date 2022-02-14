const Employee = require("./Employee");

// TODO: Create a `Boat` class that extends the `Vehicle` class

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
        console.log(`Engineer instance made! Named ${this.name}`);
    }

    getGithub() {
        console.log(`Engineer GitHub is: ${this.github}`);
        return this.github;
    }

    getRole() {
        console.log(`Role is Engineer`);
        return "Engineer";
    }
}

module.exports = Engineer;
