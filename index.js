const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}

const allDrivers = ['Antonia', 'Nuru', 'Amari','Mo'];
const firstTwoDrivers = returnFirstTwoDrivers(allDrivers);
const lastTwoDrivers = returnLastTwoDrivers(allDrivers);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

console.log(firstTwoDrivers);
console.log(lastTwoDrivers);

const createFareMultiplier = function(multiplier){
    return function(fare){
        return fare * multiplier
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, selectionFunction){
   return selectionFunction(drivers);
}

const selectedFirstTwoDrivers = selectDifferentDrivers(allDrivers, returnFirstTwoDrivers);
const selectedLastTwoDrivers = selectDifferentDrivers(allDrivers, returnFirstTwoDrivers);