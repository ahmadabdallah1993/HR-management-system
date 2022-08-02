var employee = {
    0: {
        employeeID: 0,
        fullName: "Ghazi Samer",
        department: "Administration", 
        level: "Senior",
        imageURL: 0,
        salary: 0
    },
    1: {
        employeeID: 0,
        fullName: "Lana Ali",
        department: "Finance",
        level: "Senior", 
        imageURL: 0,
        salary: 0
    },
    2: {
        employeeID: 0,
        fullName: "Tamara Ayoub",
        department: "Marketing",
        level: "Senior",
        imageURL: 0,
        salary: 0
    },
    3: {
        employeeID: 0,
        fullName: "Safi Walid",
        department: "Admenestration",
        level: "Mid-Senior",
        imageURL: 0,
        salary: 0
    },
    4: {
        employeeID: 0,
        fullName: "Omar Zaid",
        department: "Development",
        level: "Senior",
        imageURL: 0,
        salary: 0
    },
    5:{
        employeeID: 0,
        fullName: "Rana Saleh",
        department: "Development",
        level: "Junior",
        imageURL: 0,
        salary: 0
    },
    6: {
        employeeID: 0,
        fullName: "Hadi Ahmad",
        department: "Finance",
        level: "Mid-Senior",
        imageURL: 0,
        salary: 0
    },
    setID: function(){
        console.log("--------------------------");
        console.log("--------------------------");
        var id = 1000;
    for(var i = 0; i < 4; i ++) {
        this[i]["employeeID"] = id;
        console.log("employee id after adding id method =  " + this[i]["employeeID"]);
        id ++;

    }
    },
    calculateSalary: function() {

        console.log("--------------------------");
        console.log("--------------------------");

        for(var i = 0; i < 7; i ++) {
            if(this[i]["level"] == "Junior"){
                this[i]["salary"] = Math.floor(Math.random() * (1000 - 500)) + 500;
            } else if(this[i]["level"] == "Mid-Senior") {
                this[i]["salary"] = Math.floor(Math.random() * (1500 - 1000)) + 1000;
            } else if(this[i]["level"] == "Senior") {
                this[i]["salary"] = Math.floor(Math.random() * (2000 - 1500)) + 1500;
    
        }
        console.log("employee salary after adding salary method =  " + this[i]["salary"]);
    }
    },
    tax: function() {
        console.log("--------------------------");
        console.log("--------------------------");
        
        for(var i = 0; i < 7; i ++) {
            var j = this[i]["salary"];
            
            this[i]["salary"] = j - (j * (0.075));
            console.log("employee salary after adding tax method =  " + this[i]["salary"]);
            
        }
        
    },
    printThem: function() {
        console.log("--------------------------");
        console.log("--------------------------");
        for(var i = 0; i < 7; i ++) {
            
            console.log("Employee Name: " + this[i]["fullName"]);
            console.log("Employee Salary: " + this[i]["salary"]);
            
        }

    }
    


};


// console.log("employee id test before adding id method =  " + employee[0].employeeID);

console.log(employee["setID"]());


// console.log("employee salary test before adding salary method =  " + employee[0].salary);

console.log(employee["calculateSalary"]());


console.log(employee["tax"]());
console.log(employee["printThem"]());


