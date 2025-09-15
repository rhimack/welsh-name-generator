function displaySong(response) {
  console.log("Name generated");
  new Typewriter("#song", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateSong(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "3b3935e5a0ob7af4fft24a1b0a07901a";
  let prompt =
    "User instructions: Generate a traditional welsh name that begins with ${instructionsInput.value}";
  let context =
    "You are a welsh name expert and your mission is to provide a welsh name begining with any letter stated in basic HTML. Please make sure to follow the user instructions. Not include sogn title. Sign the poes 'by SheCodes AI'inside a <strong> element.";
  let apiURL =
    "https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}";

  console.log("Generating song");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displaySong);
}

let songFormElement = document.querySelector("#name-form");
songFormElement.addEventListener("submit", generateSong);
