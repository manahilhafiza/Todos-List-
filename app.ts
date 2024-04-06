#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos: string [] = []

let candition =  true;
console.log(chalk.magenta.bold("\n \t wellcome to code-with-manahil in todos list \n"));
/*while(candition) 
{  
let todoQuestions = await inquirer.prompt(
[
     {
        name: "firstq",
        type: "input",
        message:chalk.green ("would you like to add your todos")
      },

    {
       name: "secondq",
       type: "confirm",
       message: "would you like to add in more todos ? ",
       defult: "true"
     }
]
 );

 todos.push (todoQuestions.firstq);
 console.log (todos);
 candition = todoQuestions .secondq
}
*/
 let main = async () =>{
  while(candition){
    let option = await inquirer.prompt([
  {
    name: "choices",
    type: "list",
    message: "select an option you want to do :",
    choices: ["add task","delete task","update task","view todo list","Exit task"],
  }      
    ]);
 if (option.choices === "add task"){
    await addtask()
 }
 else if (option.choices ===  "view todo list") {
    await viewtask()
 }
 else if (option.choices === "Exit task"){
    candition = false;
 }
 }
 }
 //function to add new task in list
 let addtask = async () =>{
    let addtask = await inquirer.prompt([
        {
            name: "Task",
            type: "Input",
            message: "Enter your task: ",

        }
    ]);
    todos.push(addtask.Task);
    console.log(`\n ${addtask.Task}  Task added successfully in  todo-list `);
 }
 // function to view all todo list
 let viewtask = async () => {
    {
       console.log('\n your todo-list \n');
       todos.forEach((task,index)=>
        {
          console.log(`${index}: ${task}`)
        })    
    }
    let deletedtask = async () =>{
        await viewtask()
        let taskIndex = await inquirer.prompt([
        {
          name: "index",
          type: "number",
          message: "Enter your 'index no' of task you want to delet :"
        }

        ]);
        
    }
}

 main();
