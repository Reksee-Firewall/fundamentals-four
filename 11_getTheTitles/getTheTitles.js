const getTheTitles = function(booksArray) {
    let titles = []; 
    for (let i = 0; i < booksArray.length; i++) {
        titles.push(booksArray[i].title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
