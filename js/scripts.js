// UI logic

$(document).ready(function() {
  $("form#formMain").submit(function(event) {
    event.preventDefault();
    const number = parseInt($("input#numberInput").val());
    console.log(number);
  })
})

// Business logic

function returnRangeOfNumbers(number) {
  return number;
}

function replaceOne(number) {
  return number;
}

function replaceTwo(number) {
  return number;
}

function replaceThree(number) {
  return number;
}

