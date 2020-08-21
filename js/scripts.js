// UI logic

$(document).ready(function() {
  $("form#formMain").submit(function(event) {
    event.preventDefault();
    const number = parseInt($("input#numberInput").val());
    // console.log(number);
    const numberRange = returnRangeOfNumbers(number);
    const outputRange = replaceAll(numberRange);
    
    console.log(outputRange);
    $("#response").show();
    $("#result").text(outputRange);
  })
})

// Business logic

function replaceAll(numberArray) {
  // const originalArray = numberArray;
  replaceThirtyTwo(numberArray);
  replaceTwentyOne(numberArray);
  replaceThirteen(numberArray);
  replaceThree(numberArray);
  replaceTwo(numberArray);
  replaceOne(numberArray);
  //console.log(numberArray);
  return numberArray;
}

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

function replaceThirteen(numberArray) {
  for (let i = 0; i < numberArray.length; i++) {
    let targetNumber = numberArray[i];
    if (targetNumber.toString().indexOf('13') > -1) {
      numberArray[i] = "Won't you be my neighbor? (THIRTEEN) ";
    }
  }
  return numberArray;
}

function replaceTwentyOne(numberArray) {
  for (let i = 0; i < numberArray.length; i++) {
    let targetNumber = numberArray[i];
    if (targetNumber.toString().indexOf('21') > -1) {
      numberArray[i] = "Boop (TWENTY ONE) ";
    }
  }
  return numberArray;
}

function replaceThirtyTwo(numberArray) {
  for (let i = 0; i < numberArray.length; i++) {
    let targetNumber = numberArray[i];
    if (targetNumber.toString().indexOf('32') > -1) {
      numberArray[i] = "Won't you be my neighbor? (THIRTY TWO) "
    }
  }
  return numberArray;
}



/* To do

- convert html output to ul
- check input(s)
- include a "name" input

Questions

- is return necessary on replace methods?
- Do spec input/ouputs need to be cumulative with previous rules?

*/