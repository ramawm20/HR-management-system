'use strict';


//employee constructor
function Employee(employeeId, fullName, department, level, salary) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = `./photos/${this.fullName}.png`
    this.salary = salary;
}

//prototype to calculate salary
Employee.prototype.csalary = function () {
    if (this.level == 'Senior') {
        let s = Math.floor((Math.random() * (2000 - 1500) + 1500));
        this.salary = (Math.floor(s - (s * (7.5 / 100))));
    }
    else if (this.level == 'Mid-Senior') {
        let s = Math.floor((Math.random() * (1500 - 1000) + 1000));
        this.salary = (Math.floor(s - (s * (7.5 / 100))));
    }
    else {
        let s = Math.floor((Math.random() * (1000 - 500) + 500));
        this.salary = (Math.floor(s - (s * (7.5 / 100))));
    }
}

//render information
Employee.prototype.render = function () {
    document.write(`<h3 style="color: #00425A ">-Name : ${this.fullName}---- salary= ${this.salary} .</h3>`)
}
document.write(`<h1 style="color: #00425A;">*Names of employees and their salaries:</h1>`)


//creating instances from Employee constructor
const employee1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior");
employee1.csalary();
employee1.render();

const employee2 = new Employee(1001, "Lana Ali", "Finance", "Senior");
employee2.csalary();
employee2.render();

const employee3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
employee3.csalary();
employee3.render();

const employee4 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
employee4.csalary();
employee4.render();

const employee5 = new Employee(1004, "	Omar Zaid", "Development", "Senior");
employee5.csalary();
employee5.render();

const employee6 = new Employee(1005, "Rana Saleh", "Development", "Junior");
employee6.csalary();
employee6.render();

const employee7 = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");
employee7.csalary();
employee7.render();

