#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let condition = true;
console.log(chalk.green.bold("\n\t Welcome to Smart_Todo_List App\n"));
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: chalk.yellow("Select an option you want to do:"),
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo_List ", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View Todo_List ") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            condition = false;
            console.log(chalk.red.bold("\n\t Thank You for using Smart_Todo_List App\n"));
        }
    }
};
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.yellow("Enter your new task"),
        }
    ]);
    todoList.push(newTask.task);
    console.log(chalk.green(`\n ${newTask.task} Task added successfully in Todo -List`));
};
let viewTask = () => {
    console.log(chalk.blue("\n your Todo_List \n "));
    todoList.forEach((task) => {
        console.log(chalk.blue(`${task}`));
    });
};
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.yellow("Enter the 'index no' of the task you want to delete"),
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index, 1);
    console.log(chalk.red(`\n ${deletedTask} Task deleted successfully from Todo_List`));
};
let updateTask = async () => {
    let update = await inquirer.prompt({
        name: "updateitems",
        type: "list",
        message: chalk.yellow("Select items to update"),
        choices: todoList
    });
    let update2 = await inquirer.prompt({
        name: "updateitems2",
        type: "input",
        message: chalk.yellow("Update item"),
    });
    let newtodos = todoList.filter(val => val != update.updateitems);
    todoList = [...newtodos, update2.updateitems2];
};
main();
