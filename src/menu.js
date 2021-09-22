const addFood = (src, textName, textPrice) => {
  const food = document.createElement("div");
  const img = document.createElement("img");
  const info = document.createElement("div");
  const name = document.createElement("p");
  const price = document.createElement("p");

  food.classList.add("information-dish");
  img.classList.add("random-dish");
  info.classList.add("random-info");
  name.classList.add("name");
  price.classList.add("price");

  img.setAttribute("src", src);

  name.textContent = textName;
  price.textContent = textPrice;

  info.appendChild(name);
  info.appendChild(price);
  food.appendChild(img);
  food.appendChild(info);

  return food;
};

const loadMenu = () => {
  const main = document.querySelector("main");
  main.textContent = "";

  const foods = [
    addFood("./images/1.jpg", "Burrata e Ham", "10$"),
    addFood("./images/2.jpg", "Uni and Tapioca", "10$"),
    addFood("./images/3.jpg", "Cappelletti", "10$"),
    addFood("./images/5.jpg", "Pork Dumplings", "10$"),
  ];

  for (let food of foods) {
    main.appendChild(food);
  }
};

export default loadMenu;
