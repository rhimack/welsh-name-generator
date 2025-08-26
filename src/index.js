function generateName(event) {
  event.preventDefault();

  let nameElement = document.querySelector("#name");
  nameElement.innerHTML = "Please enter the name you would like to generate";
}

let nameFormElement = document.querySelector("#name-form");
nameFormElement.addEventListener("submit".generateName);
