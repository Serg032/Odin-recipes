const buttonOne = document.querySelector("#one");
buttonOne.style.background = "red";
buttonOne.classList.add("buttonEvent");
buttonOne.innerHTML = "Don't Press";
buttonTwo = document.querySelector("#two");

const message = () => {
  alert("YEEEEAH");
};

const func = (e) => {
  console.log(e.target);
};

const color = () => {
  if (buttonOne.style.background != "green") {
    buttonOne.style.background = "green";
  } else {
    buttonOne.style.background = "red";
  }
};

buttonOne.addEventListener("click", message);
buttonTwo.addEventListener("click", color);

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.id);
  });
});
