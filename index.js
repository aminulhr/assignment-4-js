/***
 * Problem - 1
 * The mindGame() function takes a input from user. If the input value is a number and also positive number then it does it internal tasks and give the output.
 */
function mindGame(number) {
    if (typeof (number) == "number") {
        if (number >= 0) {
            const multipliedBy3 = number * 3;
            const add10 = multipliedBy3 + 10;
            const divideBy2 = add10 / 2;
            const subtract5 = divideBy2 - 5;
            const finalResult = subtract5;
            return finalResult;
        }
        return 'Please enter a positive number'
    }
    return 'Please enter a number';
}

// Problem 2
// This function takes in a string only and then counts the number of characters in it and returns even if the number is even or returns odd if the number is odd.
function evenOdd(word) {
    const type = typeof word;
    //This line checks for empty parameter as well.
    if (type !== "string" || word.length === 0) return "Please enter a word!";
  
    if (word.length % 2 === 0) return "Even";
    else return "Odd";
  }

  
  //Problem 3: The function takes a number as input and calculates the difference between the input and 7. If the difference is less than 7, it returns the difference, otherwise, it returns double the input.

  function isLGSeven (num) {
    const difference = num - 7;
    if (typeof num != 'number'){
        return "please enter a valid number"
    }
    else if (difference < 7 ){
        return difference;
    }
    else{
        return num * 2;
    }
}

// Problem 4: 
// This function takes in a non empty array and returns the total number of negative numbers(bad data) available;
function findingBadData(array) {
    //This line checks for empty parameter as well.
    if (Array.isArray(array) === false || array.length === 0)
      return "Please enter an array which cannot be empty";
  
    let count = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 0) count++;
    }
  
    return count;
  }

  // Problem-5
  // This function takes three inputs (gem1, gem2, and gem3), representing the number of gems each of three friends has. It then calculates the number of diamonds each friend can get based on the conversion rate of each friend. It sums up the total number of diamonds they can get and returns the result.

function gemsToDiamond (gem1, gem2, gem3){
    const firstFriend = gem1 * 21;
    const secondFriend = gem2 * 32;
    const thirdFriend = gem3 * 43;
    const total = firstFriend + secondFriend + thirdFriend;

    if (typeof gem1 != 'number' || typeof gem2 != 'number' || typeof gem3 != 'number'){
        return "please enter a valid number";
    }

    else if(total < 1000 * 2){
        return total;
    }

    else if (total >= 1000 * 2){
        return total - 2000;
    }
}

