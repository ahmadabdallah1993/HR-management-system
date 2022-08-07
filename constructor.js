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

body[0].style.display = 'flex';
body[0].style.width = '100%';
body[0].style.flexWrap = 'wrap';
body[0].style.justifyContent = 'space-between';








Employee.prototype.render = function() {
    // document.write(`<p>Employee Name: ${this.fullName}</p><p>Department: ${this.department}</p><p>Salary: ${this.salary}</p><br>`)


    const divEl = document.createElement('div');

    const imgEl = document.createElement('img');
    imgEl.src= `${this.imageURL}`;
    imgEl.alt=`${this.fullName}`;
    imgEl.style.width = '70%';
    divEl.appendChild(imgEl);
    
    const pEl = document.createElement('p');
    pEl.textContent = `Name: ${this.fullName} -ID: ${this.employeeID}`;
    divEl.appendChild(pEl);

    const pEl2 = document.createElement('p');
    pEl2.textContent = `Department: ${this.department} level: ${this.level}`;
    divEl.appendChild(pEl2);

    const pEl3 = document.createElement('p');
    pEl3.textContent = `Salary: ${this.salary} JD`;
    divEl.appendChild(pEl3);

//    divEl.style.display ='flex';
//    divEl.style.justifyContent = 'flex-start';
   divEl.style.width = '200px';
   

   divEl.style.margin = '70px 60px';
//    divEl.style.marginTop = '50px';
//    divEl.style.gap = '10px';
   
   divEl.style.minHeight = '100px';
   divEl.style.border = '5px';
   divEl.style.flexWrap = 'wrap'; 
   divEl.style.flexDirection = 'row';
   divEl.style.backgroundColor = 'rgb(200, 228, 219)';
   divEl.style.textAlign = 'center';
   divEl.style.borderRadius = '20px';
   
   
   
//    divEl.style.flex = '0 0 20%';
// divEl.style.justifyContent= 'space-around'
// divEl.style.alignItems = 'centre'






    body[0].appendChild(divEl);
}



body[0].classList.add('designBody');

// const headerEl = document.getElementsByTagName('header');
// headerEl.classList.add('designHeader');
// body[0].appendChild('header');







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








