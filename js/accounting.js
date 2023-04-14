'use strict'
//lab 09
let jsonArray = localStorage.getItem('allEmployees')
let employees = JSON.parse(jsonArray);

if(employees==null){
    employees=[];
}


employees.forEach(element => {
    console.log(element)
});

for (let index = 0; index < employees.length; index++) {
    document.write(employees[index].fullName)


}


let sec1 = document.getElementById('sec1');
sec1.setAttribute('style', 'background-color: #94AF9F')
sec1.style.display = "flex";
sec1.style.justifyContent = "center";
sec1.style.alignItems = "center";
sec1.style.color = "white";
sec1.style.margin = "auto";
sec1.style.padding = "20px"



let tableEl = document.createElement('table')
sec1.appendChild(tableEl);
tableEl.style.border = "1px";
tableEl.style.textAlign = "center";
tableEl.style.fontSize = "20px";
tableEl.setAttribute('style', 'background-color:white');
tableEl.style.color = "#94AF9F"
tableEl.style.border=" 1px solid black"

//table head
let thEl = document.createElement('th');
thEl.textContent = "Department Name"
thEl.style.padding = "10px";
thEl.style.border = " 1px solid black"
tableEl.appendChild(thEl);

let thE2 = document.createElement('th');
thE2.style.padding = "10px";
thE2.style.border = " 1px solid black"
thE2.textContent = "Number of employees"
tableEl.appendChild(thE2);

let thE3 = document.createElement('th');
thE3.style.padding = "10px";
thE3.style.border = " 1px solid black"
thE3.textContent = "Total Salary"
tableEl.appendChild(thE3);

let thE4 = document.createElement('th');
thE4.style.padding = "10px";
thE4.style.border = " 1px solid black"
thE4.textContent = "Average"
tableEl.appendChild(thE4);

//table administration row
let trE1 = document.createElement('tr');
trE1.style.fontSize = "20px"
trE1.style.border = " 1px solid black"
tableEl.appendChild(trE1)

let tr1d1 = document.createElement('td');
tr1d1.textContent = "Administration";
tr1d1.style.padding = "10px"
tr1d1.style.border = " 1px solid black"
trE1.appendChild(tr1d1);

let numAd=0;
for(let i=0;i<employees.length;i++){
    if(employees[i].department =="Adminstration"){
        numAd++;
    }
    
}
let tr1d2 = document.createElement('td');
tr1d2.textContent = numAd;
tr1d2.style.padding = "10px"
tr1d2.style.border = " 1px solid black"
trE1.appendChild(tr1d2);

let totalAdSalary=0;
for (let i = 0; i < employees.length; i++) {
    if(employees[i].department=="Adminstration"){
        totalAdSalary+=employees[i].salary;
    }
    
}
let tr1d3 = document.createElement('td');
tr1d3.textContent = totalAdSalary;
tr1d3.style.padding = "10px"
tr1d3.style.border = " 1px solid black"
trE1.appendChild(tr1d3);

let adAvgSalary=0;
for (let i = 0; i < employees.length; i++) {
    if(employees[i].department=="Adminstration"){
        adAvgSalary+=employees[i].salary/numAd;
    }
    
}
let tr1d4 = document.createElement('td');
tr1d4.textContent = adAvgSalary;
tr1d4.style.padding = "10px"
tr1d4.style.border = " 1px solid black"
trE1.appendChild(tr1d4);


//table Marketing row
let trE2 = document.createElement('tr');
trE2.style.fontSize = "20px"
trE2.style.border = " 1px solid black"
tableEl.appendChild(trE2)

let tr2d1 = document.createElement('td');
tr2d1.textContent = "Marketing";
tr2d1.style.padding = "10px"
tr2d1.style.border = " 1px solid black"
trE2.appendChild(tr2d1);
let numMa=0;
for(let i=0;i<employees.length;i++){
    if(employees[i].department =="Marketing"){
        numMa++;
    }
    
}
let tr2d2 = document.createElement('td');
tr2d2.textContent = numMa;
tr2d2.style.padding = "10px"
tr2d2.style.border = " 1px solid black"
trE2.appendChild(tr2d2);

let totalMaSalary=0;
for (let i = 0; i < employees.length; i++) {
    if(employees[i].department=="Marketing"){
        totalMaSalary+=employees[i].salary;
    }
    
}
let tr2d3 = document.createElement('td');
tr2d3.textContent = totalMaSalary;
tr2d3.style.padding = "10px"
tr2d3.style.border = " 1px solid black"
trE2.appendChild(tr2d3);

let maAvgSalary=0;
for (let i = 0; i < employees.length; i++) {
    if(employees[i].department=="Marketing"){
        maAvgSalary+=employees[i].salary/numMa;
    }
    
}
let tr2d4 = document.createElement('td');
tr2d4.textContent = maAvgSalary;
tr2d4.style.padding = "10px"
tr2d4.style.border = " 1px solid black"
trE2.appendChild(tr2d4);


//table development row
let trE3 = document.createElement('tr');
trE3.style.fontSize = "20px"
trE3.style.border = " 1px solid black"
tableEl.appendChild(trE3)

let tr3d1 = document.createElement('td');
tr3d1.textContent = "Development";
tr3d1.style.padding = "10px"
tr3d1.style.border = " 1px solid black"
trE3.appendChild(tr3d1);

let numDe=0;
for(let i=0;i<employees.length;i++){
    if(employees[i].department =="Development"){
        numDe++;
    }
    
}
let tr3d2 = document.createElement('td');
tr3d2.textContent = numDe;
tr3d2.style.padding = "10px"
tr3d2.style.border = " 1px solid black"
trE3.appendChild(tr3d2);

let totalDevSalary=0;
for (let i = 0; i < employees.length; i++) {
    if(employees[i].department=="Development"){
        totalDevSalary+=employees[i].salary;
    }
    
}
let tr3d3 = document.createElement('td');
tr3d3.textContent = totalDevSalary;
tr3d3.style.padding = "10px"
tr3d3.style.border = " 1px solid black"
trE3.appendChild(tr3d3);

let devAvgSalary=0;
for (let i = 0; i < employees.length; i++) {
    if(employees[i].department=="Development"){
        devAvgSalary+=employees[i].salary/numDe;
    }
    
}
let tr3d4 = document.createElement('td');
tr3d4.textContent = devAvgSalary;
tr3d4.style.padding = "10px"
tr3d4.style.border = " 1px solid black"
trE3.appendChild(tr3d4);


//table finance row
let trE4 = document.createElement('tr');
trE4.style.fontSize = "20px"
trE4.style.border = " 1px solid black"
tableEl.appendChild(trE4)

let tr4d1 = document.createElement('td');
tr4d1.textContent = "Finance";
tr4d1.style.padding = "10px"
tr4d1.style.border = " 1px solid black"
trE4.appendChild(tr4d1);

let numFi=0;
for(let i=0;i<employees.length;i++){
    if(employees[i].department =="Finance"){
        numFi++;
    }
    
}
let tr4d2 = document.createElement('td');
tr4d2.textContent = numFi;
tr4d2.style.padding = "10px"
tr4d2.style.border = " 1px solid black"
trE4.appendChild(tr4d2);

let totalFiSalary=0;
for (let i = 0; i < employees.length; i++) {
    if(employees[i].department=="Finance"){
        totalFiSalary+=employees[i].salary;
    }
    
}
let tr4d3 = document.createElement('td');
tr4d3.textContent = totalFiSalary;
tr4d3.style.padding = "10px"
tr4d3.style.border = " 1px solid black"
trE4.appendChild(tr4d3);

let FiAvgSalary=0;
for (let i = 0; i < employees.length; i++) {
    if(employees[i].department=="Finance"){
        FiAvgSalary+=employees[i].salary/numFi;
    }
    
}
let tr4d4 = document.createElement('td');
tr4d4.textContent = FiAvgSalary;
tr4d4.style.padding = "10px"
tr4d4.style.border = " 1px solid black"
trE4.appendChild(tr4d4);


//table footer
let trE5 = document.createElement('tr');
trE5.style.fontSize = "20px"
trE5.style.border = " 1px solid black"
tableEl.appendChild(trE5)

let tr5d1 = document.createElement('td');
tr5d1.textContent = "Total";
tr5d1.style.padding = "10px"
tr5d1.style.border = " 1px solid black"
trE5.appendChild(tr5d1);

let tr5d2 = document.createElement('td');
let total =tr5d2.textContent = numAd+numDe+numFi+numMa;
tr5d2.style.padding = "10px"
tr5d2.style.border = " 1px solid black"
trE5.appendChild(tr5d2);

let tr5d3 = document.createElement('td');
tr5d3.textContent = totalAdSalary+totalDevSalary+totalFiSalary+totalMaSalary;
tr5d3.style.padding = "10px"
tr5d3.style.border = " 1px solid black"
trE5.appendChild(tr5d3);

let tr5d4 = document.createElement('td');
tr5d4.textContent = (totalAdSalary+totalDevSalary+totalFiSalary+totalMaSalary)/total;
tr5d4.style.padding = "10px"
tr5d4.style.border = " 1px solid black"
trE5.appendChild(tr5d4);

//lab 08
/*
//decleration
let form = document.getElementById('newemployee');
form.addEventListener('submit', addNewEmployee);

Employee Constructor
function Employee(employeeId, fullName, department, level, imageUrl, salary) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = `./photos/${this.fullName}.jpg`
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
 */

