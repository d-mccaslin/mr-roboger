// UI logic

$(document).ready(function() {
  $("form#formMain").submit(function(event) {
    event.preventDefault();
    const number = parseInt($("input#numberInput").val());
    // console.log(number);
    const numberRange = returnRangeOfNumbers(number);
    const outputRange = replaceAll(numberRange);
    
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
  for (let i = 0; i < numberArray.length; i++) {
    let targetNumber = numberArray[i];
    if (targetNumber.toString().indexOf('2') > -1) {
      numberArray[i] = "Boop!";
    }
  }
  return numberArray;
}

function replaceThree(numberArray) {
  for (let i = 0; i < numberArray.length; i++) {
    let targetNumber = numberArray[i];
    if (targetNumber.toString().indexOf('3') > -1) {
      numberArray[i] = "Won't you be my neighbor?";
    }
  }
  return numberArray;
}

function replaceAll(numberArray) {
  replaceOne(numberArray);
  replaceTwo(numberArray);
  replaceThree(numberArray);
  return numberArray;
}
