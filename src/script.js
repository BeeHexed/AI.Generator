function generatePoem(event) {
    event.preventDefault();

    new Typewriter('#story', {
  strings: "Today, I stepped back into the year 1888, a world of horse-drawn carriages, gaslight lamps, and murder.",
  autoStart: true,
  delay: 1,
  cursor: "",
});
}
   

let poemFormElement = document.querySelector("#input-generator");
poemFormElement.addEventListener("submit", generatePoem);