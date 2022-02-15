//Main Program starts here
//Things for the future include increased modularization,
//particularly with the html document, accesed from src.
//
//
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const validateEmail = (email) => {
    var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

var objects = [];
var employees = 0;
var finished = false;

const start = [
    {
        type: "input",
        name: "name",
        message: "Please provide the team manager's name: ",
        default: "John Doe",
    },
    {
        type: "input",
        name: "id",
        message: "Please provide your employee ID: ",
        default: "1234",
    },
    {
        type: "input",
        name: "email",
        message: "Please type your email",
        default: "johndoe@gmail.com",
        validate: validateEmail,
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please provide your office number: ",
        default: "88",
    },
];

const phase2 = [
    {
        type: "list",
        name: "type",
        message:
            "Please choose the next type of employee to add to team or click finished. ",
        choices: ["Engineer", "Intern", "Finished"],
    },
];

const engineerQ = [
    {
        type: "input",
        name: "name",
        message: "Please provide the engineer's name: ",
        default: "Jane Doe",
    },
    {
        type: "input",
        name: "id",
        message: "Please provide your employee ID: ",
        default: "12345",
    },
    {
        type: "input",
        name: "email",
        message: "Please type your email",
        default: "janedoe@gmail.com",
        validate: validateEmail,
    },
    {
        type: "input",
        name: "github",
        message: "Please provide Github url: https://",
        default: "github.com/janedoeCS",
    },
];

const internQ = [
    {
        type: "input",
        name: "name",
        message: "Please provide the engineer's name: ",
        default: "Jerry Doe",
    },
    {
        type: "input",
        name: "id",
        message: "Please provide your employee ID: ",
        default: "123456",
    },
    {
        type: "input",
        name: "email",
        message: "Please type your email",
        default: "jerrydoe@gmail.com",
        validate: validateEmail,
    },
    {
        type: "input",
        name: "school",
        message: "Please provide your school name: ",
        default: "University of Toronto",
    },
];

function makeManager(answers) {
    manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
    );
    objects[objects.length] = manager;
    console.log(manager);
    employees += 1;
    return manager;
}

async function makeEngineer() {
    await inquirer.prompt(engineerQ).then((answers) => {
        //we have manager info in answers right now
        engineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.github
        );
        objects[objects.length] = engineer;
        console.log(engineer);
        employees += 1;
        console.log(employees);
        console.log(objects);
    });
    cycle();
}

async function makeIntern() {
    await inquirer.prompt(internQ).then((answers) => {
        //we have manager info in answers right now
        intern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.school
        );
        objects[objects.length] = intern;
        console.log(intern);
        employees += 1;
        console.log(employees);
        console.log(objects);
    });
    cycle();
}

function finishedTeam() {
    console.log("HTML made. Goodbye.");
    console.log(objects);
    console.log(employees);
    //here we got every employee in objects list
    //contains pointers too all created employee objects
    //either manager engineer or interns can only be one manager tho
    //good to create the html
    createHTML(objects);
}

function createHTML(objects) {
    //
    console.log(objects.length);

    cardGroup = ` <div
    class="card border-secondary m-3 rounded border-dark"
    id="day0"
    style="width: auto"
>
    <h4 class="card-header">${objects[0].name}</h4>
    <h4 class="card-header">☕ Manager</h4>
    <div class="card-body">
        <p id="currentTemp">ID: ${objects[0].id}</p>
        <hr />
        <p id="currentWind">
            Email:
            <a
                href="mailto:${objects[0].email}"
                target="_blank"
                >${objects[0].email}</a
            >
        </p>
        <hr />
        <p id="currentHumidity">Office Number: ${objects[0].officeNumber}</p>
    </div>
</div>`;

    for (i = 1; i < objects.length; i++) {
        //here we will cycle through number of employees adding cards to html
        if (objects[i].constructor.name == "Engineer") {
            cardGroup += `<div
            class="card border-secondary m-3 rounded border-dark"
            id="day0"
            style="width: auto"
        >
            <h4 class="card-header">${objects[i].name}</h4>
            <h4 class="card-header">👓 Engineer</h4>
            <div class="card-body">
                <p id="currentTemp">ID: ${objects[i].id}</p>
                <hr />
                <p id="currentWind">
                    Email:
                    <a
                        href="mailto:${objects[i].email}"
                        target="_blank"
                        >${objects[i].email}</a
                    >
                </p>
                <hr />
                <p id="currentHumidity">
                    Github:
                    <a
                        href="https://${objects[i].github}"
                        target="_blank"
                        class="project-link"
                        >${objects[i].github}</a
                    >
                </p>
            </div>
        </div>`;
        } else if (objects[i].constructor.name == "Intern") {
            cardGroup += `<div
            class="card border-secondary m-3 rounded border-dark"
            id="day0"
            style="width: auto"
        >
            <h4 class="card-header">${objects[i].name}</h4>
            <h4 class="card-header">🧑‍🎓 Intern</h4>
            <div class="card-body">
                <p id="currentTemp">ID: ${objects[i].id}</p>
                <hr />
                <p id="currentWind">
                    Email:
                    <a
                        href="mailto:${objects[i].email}"
                        target="_blank"
                        >${objects[i].email}</a
                    >
                </p>
                <hr />
                <p id="currentHumidity">
                    School: ${objects[i].school}
                </p>
            </div>
        </div>`;
        }
    }
    fs.writeFile(
        "dist/index.html",
        `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <meta name="Description" content="Enter your description here" />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
                integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
                crossorigin="anonymous"
            />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
            />
    
            <link
                rel="stylesheet"
                href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"
            />
    
            <link
                href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap"
                rel="stylesheet"
            />
            <link rel="stylesheet" href="./style.css" />
            <title>My Team</title>
        </head>
    
        <body>
            <header>
                <div class="jumbotron jumbotron-fluid m-0 mb-3 text-left">
                    <div>
                        <h1 class="text-center mt-5">My Team</h1>
                    </div>
                </div>
            </header>
    
            <div class="container-fluid col-sm-9" id="infoColumn">
                <!-- here we got the first row with current weather data  -->
                <h3 class="m-3">Roster:</h3>
                <div id="cards" class="card-group border rounded flex-shrink">
                  ${cardGroup}
                </div>
            </div>
    
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"></script>
            <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"></script>
            <script src="./assets/js/script.js"></script>
        </body>
    </html>
    `,
        (err) => (err ? console.error(err) : console.log("Commit logged!"))
    );
    fs.writeFile(
        "dist/style.css",
        `:root {
            --primary: #3c7450;
            --secondary: #9caea9;
            --dark: #000000;
            --light: #ffffff;
            --blue: #5c79af;
            --border-radius: 0.3rem;
        }
        
        .jumbotron {
            flex: auto, auto;
            padding: 2%;
            height: 190px;
            background-image: linear-gradient(var(--primary), var(--secondary));
        }
        
        .card {
            min-width: 200px;
            width: auto;
            color: var(--light);
            background-color: var(--blue);
            box-shadow: 0 3px 10px rgb(0 0 0 / 1.9);
        }
        
        .card-body {
            color: var(--dark);
            background-color: var(--light);
        }
        `,
        (err) => (err ? console.error(err) : console.log("Commit logged!"))
    );
}

async function cycle() {
    inquirer
        .prompt({
            type: "list",
            name: "type",
            message:
                "Please choose the next type of employee to add to team or click finished. ",
            choices: ["Engineer", "Intern", "Finished"],
        })
        .then((answers) => {
            if (answers.type === "Engineer") {
                makeEngineer();
            } else if (answers.type === "Intern") {
                makeIntern();
            } else {
                finished = true;
                finishedTeam();
            }
        });
}

async function init() {
    inquirer.prompt(start).then((answers) => {
        //we have manager info in answers right now
        manager = makeManager(answers);
        //here we have created a new Manager class
        console.log(employees);

        cycle();
    });
}

init();
