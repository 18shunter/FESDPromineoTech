var ageRequiredToDrive = 16;
var currentAge = 14;
var canPersonDrive = currentAge >= ageRequiredToDrive;
console.log(canPersonDrive);


var ageRequiredToDrive = 16;
var currantAge = 17;
var canPersonDrive = currantAge >= ageRequiredToDrive;
if (canPersonDrive) {
    console.log('This person can drive');
}

var ageRequiredToDrive = 16;
var currentAge = 14;
if (currentAge >= ageRequiredToDrive) {
    console.log('This person can drive');
} else {
    console.log('This person cannot legally drive');
}

var costOfEggs = 2.12;
var numberOfDozenOfEggsToPurchase =0;
if (costOfEggs > 3){
    numberOfDozenOfEggsToPurchase = 1;
} else if (costOfEggs > 2) {
    numberOfDozenOfEggsToPurchase = 2;
} else if {costOfEggs > 1} { 
    numberOfDozenOfEggsToPurchase = 3;
} else {
    numberOfDozenOfEggsToPurchase = 4;
}
console.log(' I will buy' + numberOfDozenOfEggsToPurchase + 'dozen eggs.');


LOOPS~

var cupsOfFlour = 0;
while (cupsOfFlour < 5) {
    console.log('Scooping a cup of flour into the bowl');
    cupsOfFlour +=1;
    console.log('There are' + cupsOfFlour + 'cups of flour in the bowl');
}



for (var cupsOfFlour = 0; cupsOfFlour < 5; cupsOfFlour++) {

    console.log('Scooping a cup of flour into the bowl');
  
    console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl'); 
  
  }
  
  
  