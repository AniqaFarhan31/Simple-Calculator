import inquirer from "inquirer";
import { animationFrameScheduler } from "rxjs";

// Asking questions from Users through Inquirer

let answers = await inquirer.prompt([
    {message: "Enter your First Number", type: "number", name: "firstNumber"},
    {message: "Enter your Second Number", type: "number", name: "secondNumber"},
    {
        message:"Select one Operator to perform Operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    }
]);

// Condtional statements If-Else

if(answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)
}
else if (answers.operator === "Subtractions"){
    console.log(answers.firstNumber - answers.secondNumber)
}
else if(answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if (answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
}
else(
    console.log("Invalid Input")
)