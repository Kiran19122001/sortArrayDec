const userInput = prompt("Enter an array (comma-separated values):");

const userArray = userInput.split(",").map(item => parseInt(item));

if (Array.isArray(userArray)) {

  userArray.sort(function(a, b) {
    return b - a;
  });
  console.log("Sorted array in descending order:", userArray);
} else {
  console.log("Incorrect input. Please enter a valid array.");
}
