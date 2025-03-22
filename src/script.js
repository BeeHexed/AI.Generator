function displayStory(response) {
  console.log("Story generated");
   console.log("Received API Response:", response);
  
    if (!response.data || !response.data.answer) {
    console.error("Error: No story found in response.");
    return;
    }
  
  new Typewriter('#story', {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector('#userInstructions');
    let apiKey = "36b4fe238810fo977tebf4ca2bcf46b6";
    let prompt = `Generate a time traveling story in prose form, based on the prompt: ${instructionsInput.value}`;
    let context = `User instructions: You are an expert on history and time travel and love to write short journal entries as a traveller to different times. Your mission is to write an educational journal entry of no more than 200 words. Be factually correct when possible. Do not include a title. Use past, present, or future voice as applicable to the prompt ${instructionsInput.value}. Add a <br/> at the end of the last paragraph and Sign the work 'SheCodes AI' on a new line and in a <p><strong></strong></p> element. Make sure to follow the user instructions. Thank you.`;
    let apiUrl =`https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`;

    let storyElement = document.querySelector("#story");
    storyElement.classList.remove("hidden");
    storyElement.innerHTML = `⏳Generating your story about ${instructionsInput.value}.<br/>Thank you for waiting. 🙂`

    console.log("Generating story.");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiUrl).then(displayStory);
}
   

let poemFormElement = document.querySelector("#input-generator");
poemFormElement.addEventListener("submit", generatePoem);