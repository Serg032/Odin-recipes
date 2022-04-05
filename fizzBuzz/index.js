const home = document.querySelector(".formulario");
const result = document.querySelector("#result");

home.addEventListener("submit", (event) => {
  const number = Number(document.querySelector("#number").value);

  event.preventDefault();
  console.log(number);
  if (number % 3 === 0 && number % 5 === 0) {
    result.innerHTML = "<h3>Fizz&Buzz</h3>";
  } else if (number % 3 === 0) {
    result.innerHTML = "<h3>Fizz</h3>";
  } else if (number % 5 === 0) {
    result.innerHTML = "<h3>Buzz</h3>";
  } else {
    result.innerHTML = number;
  }
});
