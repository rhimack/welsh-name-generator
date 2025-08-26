function generateName(event) {
  event.preventDefault();

  let nameElement = document.querySelector("#name");

  new Typewriter("#name", {
    strings: "name...",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let nameFormElement = document.querySelector("#name-form");
nameFormElement.addEventListener("submit".generateName);
