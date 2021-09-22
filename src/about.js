const loadAbout = () => {
  const main = document.querySelector("main");
  main.textContent = "";
  const text = document.createElement("div");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");

  h1.textContent = "About Us";
  h2.textContent =
    "We welcome you to sit back, unwind and appreciate the lovely sights and hints of the ocean while our best gourmet expert sets you up a scrumptious dinner utilizing the best and freshest ingredients.";

  text.classList.add("text-about");

  text.appendChild(h1);
  text.appendChild(h2);
  main.appendChild(text);
};

export default loadAbout;
