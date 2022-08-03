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

Employee.prototype.render = function() {
    document.write(`<p>Employee Name: ${this.fullName}</p><p>Department: ${this.department}</p><p>Salary: ${this.salary}</p><br>`)
}



const employeeNo1 = new Employee("Ghazi Samer", "Administration", "Senior", "./image/pic.png");

const employeeNo2 = new Employee("Lana Ali", "Finance", "Senior", "./image/pic.png");

const employeeNo3 = new Employee("Tamara Ayoub", "Marketing", "Senior", "./image/pic.png");

const employeeNo4 = new Employee("Safi Walid","Admenestration", "Mid-Senior","./image/pic.png");

const employeeNo5 = new Employee("Omar Zaid", "Development", "Senior", "./image/pic.png");

const employeeNo6 = new Employee("Rana Saleh", "Development", "Junior", "./image/pic.png");
    
const employeeNo7 = new Employee("Hadi Ahmad", "Finance", "Mid-Senior", "./image/pic.png");




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








