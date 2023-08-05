const findTheOldest = function(peopleArray) {
    const arrayLength = peopleArray.length,
        currentDate = new Date(), 
        currentYear = currentDate.getFullYear();
    let ageDiff = 0, 
        age = 0, 
        higherAge = 0;
        olderIndex = 0;
    for (let i = 0; i < arrayLength; i++) {
        if (peopleArray[i].yearOfDeath === undefined)
            age = currentYear - peopleArray[i].yearOfBirth;
        else 
            age = peopleArray[i].yearOfDeath - peopleArray[i].yearOfBirth; 
        ageDiff = higherAge - age; 
        if (ageDiff < 0) {
            higherAge = age;
            olderIndex = i;
        }
    }
    return (peopleArray[olderIndex]); 
};

// Do not edit below this line
module.exports = findTheOldest;
