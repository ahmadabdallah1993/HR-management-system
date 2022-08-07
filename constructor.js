'use strict';

const employeeArray = [];

function Employee(fullName, department, level, imageURL) {
    //this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    //this.salary = salary;

    employeeArray.push(this);
}

let i = 1000;
Employee.prototype.employeeID = function() {
    
    this.employeeID = i;
        i ++;
        
}

Employee.prototype.salary = function() {
    let j = 0;
    if(this.level == "Junior"){
        j = Math.floor(Math.random() * (1000 - 500)) + 500;
        this.salary = j - (j * (0.075));
    } else if(this.level == "Mid-Senior") {
        j = Math.floor(Math.random() * (1500 - 1000)) + 1000;
        this.salary = j - (j * (0.075));
    } else if(this.level == "Senior") {
        j = Math.floor(Math.random() * (2000 - 1500)) + 1500;
        this.salary = j - (j * (0.075));
}
}


const body = document.getElementsByTagName('body');


Employee.prototype.render = function() {
    // document.write(`<p>Employee Name: ${this.fullName}</p><p>Department: ${this.department}</p><p>Salary: ${this.salary}</p><br>`)


    const navEl = document.createElement('nav');

    const imgEl = document.createElement('img');
    imgEl.src= `${this.imageURL}`;
    imgEl.alt=`${this.fullName}`;
    navEl.appendChild(imgEl);
    
    const pEl = document.createElement('p');
    pEl.textContent = `Name: ${this.fullName} -ID: ${this.employeeID}`;
    navEl.appendChild(pEl);

    const pEl2 = document.createElement('p');
    pEl2.textContent = `Department: ${this.department} level: ${this.level}`;
    navEl.appendChild(pEl2);

    const pEl3 = document.createElement('p');
    pEl3.textContent = `Salary: ${this.salary} JD`;
    navEl.appendChild(pEl3);



    body[0].appendChild(navEl)


    //this.employeeID = employeeID;
    // this.fullName = fullName;
    // this.department = department;
    // this.level = level;
    // this.imageURL = imageURL;
    //this.salary = salary;


}



const employeeNo1 = new Employee("Ghazi Samer", "Administration", "Senior", "./image/Ghazi.jpg");

const employeeNo2 = new Employee("Lana Ali", "Finance", "Senior", "./image/Lana.jpg");

const employeeNo3 = new Employee("Tamara Ayoub", "Marketing", "Senior", "./image/Tamara.jpg");

const employeeNo4 = new Employee("Safi Walid","Admenestration", "Mid-Senior","./image/Safi.jpg");

const employeeNo5 = new Employee("Omar Zaid", "Development", "Senior", "./image/Omar.jpg");

const employeeNo6 = new Employee("Rana Saleh", "Development", "Junior", "./image/Rana.jpg");
    
const employeeNo7 = new Employee("Hadi Ahmad", "Finance", "Mid-Senior", "./image/Hadi.jpg");




employeeNo1.employeeID();
employeeNo2.employeeID();
employeeNo3.employeeID();
employeeNo4.employeeID();
employeeNo5.employeeID();
employeeNo6.employeeID();
employeeNo7.employeeID();


employeeNo1.salary();
employeeNo2.salary();
employeeNo3.salary();
employeeNo4.salary();
employeeNo5.salary();
employeeNo6.salary();
employeeNo7.salary();


employeeNo1.render();
employeeNo2.render();
employeeNo3.render();
employeeNo4.render();
employeeNo5.render();
employeeNo6.render();
employeeNo7.render();




console.log(employeeArray);



for(let i =0; i < employeeArray.length; i ++) {
    console.log(employeeArray[i]);
}








