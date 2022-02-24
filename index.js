const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = a => drivers.slice(0,2);
const returnLastTwoDrivers = a => drivers.slice(-2);

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(mult){
    const fareMultiplier = fare => fare * mult;
    return fareMultiplier;
}

const fareDoubler = (x) => {
    return createFareMultiplier(2)(x);
}
const fareTripler = (c) => {
    return createFareMultiplier(3)(c);
}

// function selectDifferentDrivers(a, b){
//     if (b === 'first two drivers') {
//         return returnFirstTwoDrivers(a);
//     }else (b === 'last two drivers') {
//         return returnLastTwoDrivers(a);
//     }
// }

// function selectDifferentDrivers(arrayOfDrivers, fun){
//     let result;
//     if (fun === 'first two drivers') {
//         result = returnFirstTwoDrivers(arrayOfDrivers);
//     }else (fun === 'last two drivers') {
//         result = returnLastTwoDrivers(arrayOfDrivers);
//     }
//     return [result];
// }