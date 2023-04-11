'use strict'

//decleration
let form = document.getElementById('newemployee');
form.addEventListener('submit', addNewEmployee);

//Employee Constructor
function Employee(employeeId, fullName, department, level, imageUrl, salary) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = `../photos/${this.fullName}.jpg`
    this.salary = salary;
}

//Render
Employee.prototype.render = function () {
    const second = document.getElementById('second');
    const third = document.getElementById('third');
    const fourth = document.getElementById('fourth');
    const fifth = document.getElementById('fifth')

    //style sections
    second.style.display = "flex";
    third.style.display = "flex";
    fourth.style.display = "flex";
    fifth.style.display = "flex";

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
    if (this.department == 'Marketing') {

        second.appendChild(divE1);
    }
    else if (this.department == 'Finance') {
        third.appendChild(divE1);
    }
    else if (this.department == 'Adminstration') {
        fourth.appendChild(divE1);
    }
    else {
        fifth.appendChild(divE1)
    }

    //create elements
    const img1 = document.createElement('img');
    divE1.appendChild(img1);
    img1.src = this.imageUrl;
    img1.style.width = "200px";
    img1.style.height = "200px"


    const hE1 = document.createElement('h1');
    hE1.textContent = `Name: ${this.fullName} -ID : ${this.employeeId}`;
    divE1.appendChild(hE1);

    const hE2 = document.createElement('h1');
    hE2.textContent = `Department : ${this.department} -Level: ${this.level}`;
    divE1.appendChild(hE2);

    const hE3 = document.createElement('h1');
    hE3.textContent = `Salary= ${this.salary}`;
    divE1.appendChild(hE3);



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


    newEmployee.csalary()
    newEmployee.render();

}

