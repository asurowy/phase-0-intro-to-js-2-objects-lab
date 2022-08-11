const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
  };

  function updateEmployeeWithKeyAndValue(object, key, value){
    const objectCopy = {...object};
    objectCopy[key] = value;
    return objectCopy;
  }
const employeeCopy = updateEmployeeWithKeyAndValue(
  employee, 
  "favoriteMovie", 
  "FindingNemo"
  );
employeeCopy;

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;

  return employee;
}
  //const newEmployee = destructivelyUpdateEmployeeWithKeyAndValue(
    //employee, "streetAddress", "12 Broadway");
  //newEmployee; 

  function deleteFromEmployeeByKey(obj, key){
    const newObj = { ...obj };
    delete newObj[key] 
    return newObj;
  }   
  const employeeNoName = deleteFromEmployeeByKey( employee, 
    "name");
  delete employee.name;

 function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee[key]
  return employee;
 }
  const EmployeeGone = delete employee.name;