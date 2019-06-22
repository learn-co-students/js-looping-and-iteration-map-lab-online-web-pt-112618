// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const result = drivers.map(function(driver) {
    return driver.toLowerCase()
  })
  return result;
}

function nameToAttributes(drivers) {
  const result = drivers.map(function(driver) {
    return Object.assign({}, {firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]})
  })
  return result;
}

function attributesToPhrase(drivers) {
  const result = drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
  return result;
}
