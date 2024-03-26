#! /usr/bin/env  node    
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { massage: "Enter your First Number", type: "number", name: "FirstNumber" },
    { massage: "Enter  your Second Number", type: "number", name: "SecondNumber" },
    {
        massage: "Enter any one operator from list",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Divison"],
    },
]);
// Condation perfome
if (answer.operator === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.operator === "Divison") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    console.log("Select any Opreator");
}
console.log("The End!");
