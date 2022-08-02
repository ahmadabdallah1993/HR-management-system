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
    }
};


console.log("employee id test before adding id function =  " + employee[0].employeeID);



function setID() {
    var id = 1000;
    for(var i = 0; i < 4; i ++) {
        employee[i].employeeID = id;
        console.log("employee id after adding id method =  " + employee[i].employeeID);
        id ++;

    }
}

setID();
