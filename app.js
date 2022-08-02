var employee = {
    0: {
        employeeID: 0,
        fullName: "a q",
        department: "Development", 
        level: "Senior",
        imageURL: 0,
        salary: 0
    },
    1: {
        employeeID: 0,
        fullName: "b q",
        department: "Administration",
        level: "Junior", 
        imageURL: 0,
        salary: 0
    },
    2: {
        employeeID: 0,
        fullName: "c q",
        department: "Marketing",
        level: "Mid-Senior",
        imageURL: 0,
        salary: 0
    },
    3: {
        employeeID: 0,
        fullName: "d q",
        department: "Finance",
        level: "Mid-Senior",
        imageURL: 0,
        salary: 0
    },
    setID: function(){
        var id = 1000;
    for(var i = 0; i < 4; i ++) {
        this[i]["employeeID"] = id;
        console.log("employee id after adding id method =  " + this[i]["employeeID"]);
        id ++;

    }
    },
    calculateSalary: function() {

        for(var i = 0; i < 4; i ++) {
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
        for(var i = 0; i < 4; i ++) {
            var j = this[i]["salary"];
            
            this[i]["salary"] = j - (j * (0.075));
            console.log("employee salary after adding tax method =  " + this[i]["salary"]);
            
        }
        
    }
    
    
    
};


console.log("employee id test before adding id method =  " + employee[0].employeeID);

console.log(employee["setID"]());


console.log("employee salary test before adding salary method =  " + employee[0].salary);

console.log(employee["calculateSalary"]());


console.log(employee["tax"]());