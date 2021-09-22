const loadHome = () => {
  const main = document.querySelector("main");
  main.textContent = "";
  const text = document.createElement("div");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const img = document.createElement("img");
  const stroke = document.createElement("img");

  h1.textContent = "Enjoy Your Meal";
  h2.textContent = "Nothing brings people together like good food.";
  img.setAttribute("src", "../dist/images/food.jpg");
  stroke.setAttribute("src", "../dist/images/stroke.png");

  img.classList.add("image");
  stroke.classList.add("stroke");
  text.classList.add("text-home");

  text.appendChild(h1);
  text.appendChild(h2);
  main.appendChild(text);
  main.appendChild(img);
  main.appendChild(stroke);
};

export default loadHome;
