#! /usr/bin/env node

import { select, input } from "@inquirer/prompts";

console.log("\n\tWelcome!\n");

class Student {
    name: string;
    constructor(name: string){
       this.name = name;
    };
};

class Person {
    students: Student[] = [];

    addStudent(obj: Student){
        this.students.push(obj);
    };
};

let person = new Person();

let programStart = async (persons: Person) => {
    do{
        let ask = await select({
            message: "Whom would you like to interact with?",
            choices: [
                {name: "Staff", value: "Staff"},
                {name: "Student", value: "Student"},
                {name: "Exit", value: "Exit"}
            ]
        });
        
        if(ask === "Staff"){
            console.log("You Approach the Staff room. Please feel free to ask any question.\n");
        }
        else if(ask === "Student"){
            let stdName = await input({message: "Enter the Student's name you wish to engage with:" });
            
            const student = persons.students.find((val) => val.name === stdName);

            if(!student){
                const name = new Student(stdName);
                persons.addStudent(name);
                console.log(`Hello i am ${name.name}, Nice to meet you!`);
                console.log("New student added");
                console.log("Current student list: ");
                console.log(persons.students);
            }
            else {
                console.log(`Hello i am ${stdName}, Nice to see you again`);
                console.log("Existing Student List: ");
                console.log(persons.students);
            };
        }
        else {
            console.log("Exiting the program...");
            process.exit();
        };
    }
    
    while(true);
};

programStart(person);

