function convertLength(unit) {
  let units = {
      meters: 1,
      centimeters: 100,
      inches: 39.37,
      feet: 3.28,
      yards: 1.09,
      miles: 0.000621,
      kilometers: 0.001,
      millimeters: 1000
  };

  let value = parseFloat(document.getElementById(unit).value);

  for (let otherUnit in units) {
      if (otherUnit !== unit) {
          let convertedValue = value * units[unit] / units[otherUnit];
          document.getElementById(otherUnit).value = convertedValue;
      }
  }
}