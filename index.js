// Write your solution in this file!
const employee = {name:"kas",
streetAddress:"12 bos st",};

function updateEmployeeWithKeyAndValue(employee,key,value){
    const newEmployee = {...employee}
    newEmployee.streetAddress = value
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key , value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employeer,key){
    const nuevoEmployee = {...employee}
   delete nuevoEmployee[key] 
   return nuevoEmployee 

}

function destructivelyDeleteFromEmployeeByKey(employeer,key){
    delete employee[key]
    return employee
}