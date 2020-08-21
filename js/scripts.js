// UI logic

$(document).ready(function() {
  $("form#formMain").submit(function(event) {
    event.preventDefault();
    const number = parseInt($("input#numberInput").val());
    const name = $("input#nameInput").val();
    // console.log(number);

    if (number) {
      const numberRange = returnRangeOfNumbers(number);
      let outputRange = replaceAll(numberRange);
      if (name) {
        addName(outputRange, name);
      }
      console.log(outputRange);
      $("#response").show();
      $("ul#result").prepend("<li>" + outputRange + "</li>");
    }
  })
})

// Business logic

function replaceAll(numberArray) {
  replaceThirtyTwo(numberArray);
  replaceTwentyOne(numberArray);
  replaceThirteen(numberArray);
  replaceThree(numberArray);
  replaceTwo(numberArray);
  replaceOne(numberArray);
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
  // return numberArray;
}

function replaceTwo(numberArray) {
  for (let i = 0; i < numberArray.length; i++) {
    let targetNumber = numberArray[i];
    if (targetNumber.toString().indexOf('2') > -1) {
      numberArray[i] = "Boop!";
    }
  }
  // return numberArray;
}

function replaceThree(numberArray) {
  for (let i = 0; i < numberArray.length; i++) {
    let targetNumber = numberArray[i];
    if (targetNumber.toString().indexOf('3') > -1) {
      numberArray[i] = "Won't you be my neighbor?";
    }
  }
  // return numberArray;
}

function replaceThirteen(numberArray) {
  for (let i = 0; i < numberArray.length; i++) {
    let targetNumber = numberArray[i];
    if (targetNumber.toString().indexOf('13') > -1) {
      numberArray[i] = "Won't you be my neighbor? (THIRTEEN)";
    }
  }
  // return numberArray;
}

function replaceTwentyOne(numberArray) {
  for (let i = 0; i < numberArray.length; i++) {
    let targetNumber = numberArray[i];
    if (targetNumber.toString().indexOf('21') > -1) {
      numberArray[i] = "Boop (TWENTY ONE)";
    }
  }
  // return numberArray;
}

function replaceThirtyTwo(numberArray) {
  for (let i = 0; i < numberArray.length; i++) {
    let targetNumber = numberArray[i];
    if (targetNumber.toString().indexOf('32') > -1) {
      numberArray[i] = "Won't you be my neighbor? (THIRTY TWO)"
    }
  }
  // return numberArray;
}

function addName(numberArray, name) {
  for (let i = 0; i < numberArray.length; i++) {
    let targetString = numberArray[i];
    if (targetString.toString().indexOf('neighbor') > -1) {
      const ind1 = targetString.indexOf("?");
      numberArray[i] = targetString.slice(0,ind1) + ", " + name + targetString.slice(ind1,targetString.length);
    }
  }
}

/* To do

- check input(s)
- make name optional
- additional / fun styling stuff
- tweak outputs to remove testing text

Questions

- is return necessary on replace methods?
- Do spec input/ouputs need to be cumulative with previous rules?

*/