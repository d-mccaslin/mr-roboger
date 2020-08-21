// UI logic

$(document).ready(function() {
  $("form#formMain").submit(function(event) {
    event.preventDefault();
    const number = parseInt($("input#numberInput").val());
    // console.log(number);
    const numberRange = returnRangeOfNumbers(number);
    const outputRange = replaceOne(numberRange);
    console.log(outputRange);
  })
})

// Business logic

function returnRangeOfNumbers(number) {
  let numberArray = [];
  for (let i = 0; i <= number; i++) {
    numberArray.push(i);
  }
  return numberArray;
}

function replaceOne(numberArray) {
  for (let i = 0; i < numberArray.length; i++) {
    let targetNumber = numberArray[i];
    if (targetNumber.toString().indexOf('1') > -1) {
      numberArray[i] = "Beep!";
    }
  }
  return numberArray;
}

function replaceTwo(numberArray) {
  return number;
}

function replaceThree(numberArray) {
  return number;
}

