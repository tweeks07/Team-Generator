// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employeeArray = [];

// Write code to use inquirer to gather information about the development team members,

function employeeRole () {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What kind of employee are you?',
            choices: ["Manager", "Engineer", "Intern", "No More Employees"],
        },
    ]) .then(function (answers) {
        if (answers.role === "Manager") {
          managerQuestions()  
        } else if (answers.role === "Engineer") {
            engineerQuestions()
        }else if (answers.role === "Intern") {
            internQuestions()
        }else if (answers.role === "No More Employees"){
            writeHTML()
        }
    })
}

function managerQuestions () {
   // .then(function (answers) {
        //if (answers.role === "Manager") {
            inquirer.prompt([
                {
                    type: "input",
                    name: "managerName",
                    message: "What is your name?",
                },
                {
                    type: "input",
                    name: "managerID",
                    message: "What is your ID number?",
                },
                {
                    type: "input",
                    name: "managerEmail",
                    message: "What is your email address?",
                },
                {
                    type: "input",
                    name: "officeNumber",
                    message: "What is your office number?",
                },
            ]).then(function (answers){
                const newManager = new Manager (answers.managerName, answers.managerID, answers.managerEmail, answers.officeNumber);
                employeeArray.push(newManager)
                employeeRole()
  
            })

}

function engineerQuestions () {
    inquirer.prompt([
        {
            type:  "input",
            name: "engineerName",
            message: "What is your name?",
        },
        {
            type: "input",
            name: "engineerID",
            message: "What is your ID number?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is your email address?",
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is your Github Username?",
        },

    ]).then(function (answers){
        const newEngineer = new Engineer (answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
        employeeArray.push(newEngineer)
        employeeRole()
    })

        } 
function internQuestions() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is your name?",
        },
        {
            type: "input",
            name: "internID",
            message: "What is you ID number?",
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is your email address?",
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the name of the school you attend?",
        }
    ]).then(function (answers){
        const newIntern = new Intern (answers.internName, answers.internID, answers.internEmail, answers.internSchool);
        employeeArray.push(newIntern)
        employeeRole()
    })
}    
        //else if (answers.role === "Intern") {
    
      

function writeHTML (){
    console.log(employeeArray)
    const renderdEmployees = render(employeeArray)
    console.log(renderdEmployees)
    fs.mkdirSync(OUTPUT_DIR)
    fs.writeFile(outputPath, renderdEmployees, err => {
        if (err)console.log ("Error!")
        else console.log ("File Written!")
    } )
}  
                
employeeRole();
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
