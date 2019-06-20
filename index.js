function lowerCaseDrivers(drivers) {
	let newDrivers = []
	drivers.map(driver => newDrivers.push(driver.toLowerCase()));
	return newDrivers
}

function nameToAttributes(list) {
  return list.map(function(driver) {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];

    return { firstName: driverFirst, lastName: driverLast };
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}