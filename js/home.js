'use strict';
//lab 09

//decleration

let form = document.getElementById('newemployee');
form.addEventListener('submit', addNewEmployee);
let allEmployee = [];

//Employee Constructor
function Employee(employeeId, fullName, department, level, imageUrl, salary) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = `./photos/${this.fullName}.jpg`
    this.salary = salary;
    allEmployee.push(this);
}


//Render
function render() {
    const second = document.getElementById('second');
    const third = document.getElementById('third');
    const fourth = document.getElementById('fourth');
    const fifth = document.getElementById('fifth')

    //style sections
    second.style.display = "flex";
    third.style.display = "flex";
    fourth.style.display = "flex";
    fifth.style.display = "flex";

    if (allEmployee == null){
        allEmployee=[];
    }

    for (let i = 0; i < allEmployee.length; i++) {
        const divE1 = document.createElement('div');
        second.appendChild(divE1)

        //style div
        divE1.setAttribute('style', 'background-color: #94AF9F')
        divE1.style.textAlign = "center";
        divE1.style.color = "white";
        divE1.style.width = "35%";
        divE1.style.margin = "25px";
        divE1.style.padding = "20px" 

        //if ststment to determint the department
        if (allEmployee[i].department == 'Marketing') {

            second.appendChild(divE1);
        }
        else if (allEmployee[i].department == 'Finance') {
            third.appendChild(divE1);
        }
        else if (allEmployee[i].department == 'Adminstration') {
            fourth.appendChild(divE1);
        }
        else {
            fifth.appendChild(divE1)
        }

        //create elements
        const img1 = document.createElement('img');
        divE1.appendChild(img1);
        img1.src = allEmployee[i].imageUrl;
        img1.style.width = "200px";
        img1.style.height = "200px"


        const hE1 = document.createElement('h1');
        hE1.textContent = `Name: ${allEmployee[i].fullName} -ID : ${allEmployee[i].employeeId}`;
        divE1.appendChild(hE1);

        const hE2 = document.createElement('h1');
        hE2.textContent = `Department : ${allEmployee[i].department} -Level: ${allEmployee[i].level}`;
        divE1.appendChild(hE2);

        const hE3 = document.createElement('h1');
        hE3.textContent = `Salary= ${allEmployee[i].salary}`;
        divE1.appendChild(hE3);


    }

}


//Calculate Salary
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

//Generate random Id
function id() {
    return Math.floor((Math.random() * (9000 - 1000) + 1000));
}





//EventListener
function addNewEmployee(event) {

    event.preventDefault();
    let name = event.target.fname.value;
    let department = event.target.dep.value;
    let level = event.target.level.value;
    let image = event.target.imgurl.value;

    let newEmployee = new Employee(id(), name, department, level, image, this.salary);



    newEmployee.csalary();
   

    console.log('allemployees Arr', allEmployee)
    let jsonArr = JSON.stringify(allEmployee);
    console.log('JSON Array', jsonArr)
    localStorage.setItem('allEmployees', jsonArr)



}


function getemployees() {


    let jsonArr = localStorage.getItem('allEmployees');
    let data = JSON.parse(jsonArr);
    console.log(data);
    allEmployee = data;
}
console.log(allEmployee);



getemployees();
render();


















//lab 07
/* //employee constructor
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

 */


/* document.write(`<h1 style="color: #00425A;">*Names of employees and their salaries:</h1>`)


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

 */