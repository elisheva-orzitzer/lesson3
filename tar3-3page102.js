import { Employee } from "./tar3-3page102Employee.js";
import { readFileSync, appendFileSync } from "node:fs";
import { appendFile as appendFileCallback } from "node:fs";
import { appendFile as appendFilePromise } from "node:fs/promises";

let emp1 = new Employee("david", 20, "choen");
let emp2 = new Employee("sari", 28, "levi");
let emp3 = new Employee("moshe", 17, "aviv");

const fileEmp1 = "./employees-data/david.txt";
const fileEmp2 = "./employees-data/sari.txt";
const fileEmp3 = "./employees-data/moshe.txt";

//employee 1
const addEmp1 = (emp1) => {
  try {
    appendFileSync(
      fileEmp1,
      `the name is ${emp1.name} \n the last name is ${emp1.familyName} \n the age is ${emp1.age} `,
    );
    console.log("employee 1 added");
  } catch (e) {
    console.log(e.message);
  }
};

addEmp1(emp1);

//employee 2
const addEmp2 = (emp2) => {
  appendFileCallback(
    fileEmp2,
    `the name is ${emp2.name} \n the last name is ${emp2.familyName} \n the age is ${emp2.age} `,
    (err) => {
      if (!err) console.log("employee 2 added");
      else console.log("EROR");
    },
  );
};

addEmp2(emp2);

//employee 3
const addEmp3 = (emp3) => {
  appendFilePromise(
    fileEmp3,
    `the name is ${emp3.name} \n the last name is ${emp3.familyName} \n the age is ${emp3.age} `,
  )
    .then(() => console.log("employee 3 added"))
    .catch("EROR");
};

addEmp3(emp3)