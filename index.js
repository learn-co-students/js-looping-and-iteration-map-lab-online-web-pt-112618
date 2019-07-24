function lowerCaseDrivers (array) {
    return array.map(function(name) {
      return name.toLowerCase()
    });
};

function nameToAttributes (array) {
  return array.map(function(name) {
    const first = name.split(' ')[0]
    const last = name.split(' ')[1]
    return {firstName: first, lastName: last};
  });
};

function attributesToPhrase (array) {
  return array.map(function(name) {
    return (`${name.name} is from ${name.hometown}`);
  });
};
