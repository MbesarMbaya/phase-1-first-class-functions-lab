// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers=function(drivers){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers=function(drivers){
    return drivers.slice(-2)
}

const selectingDrivers=['returnFirstTwoDrivers','returnLastTwoDrivers'];

function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  function fareDoubler(fare) {
    const fareMultiplier = createFareMultiplier(2);
    return fareMultiplier(fare);
  }
  
  function fareTripler(fare) {
    const fareMultiplier = createFareMultiplier(3);
    return fareMultiplier(fare);
  }
  
  function selectDifferentDrivers(drivers, driverFunctions) {
    return driverFunctions(drivers);
  }

const firstTwoDrivers = selectDifferentDrivers(drivers, selectingDrivers[0]);
console.log(firstTwoDrivers);
const lastTwoDrivers = selectDifferentDrivers(drivers, selectingDrivers[1]);
console.log(lastTwoDrivers);
    
