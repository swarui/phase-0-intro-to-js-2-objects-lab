// Write your solution in this file!
const employee={};
function updateEmployeeWithKeyAndValue(employee, key, value){
employee={...employee,...{[key]:value}}
return employee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value;
    return employee;
}
function deleteFromEmployeeByKey(employee,key){
    const newEmployee={...employee};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}