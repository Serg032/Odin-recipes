const choosen = parseInt(prompt("Choose a number", 0));

while (choosen !== 0) {
  choosen;
}

for (let i = 1; i <= choosen; i++) {
  if (choosen % 3 === 0) {
    console.log("Fizz");
  } else if (choosen % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(choosen);
  }
}
