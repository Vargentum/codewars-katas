//remember that filter returns an array. Not an object!
//can chain array's element call directly to filter

function findEmployeesRole(name) {
  [providedFirstName, providedLastName] = name.split(' ');
  let employee = employees.filter( e => {
    return e.firstName === providedFirstName && e.lastName === providedLastName;
  })[0];
  return employee ? employee.role : "Does not work here!";
}

