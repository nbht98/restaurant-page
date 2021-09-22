import loadMenu from "./menu";
import loadHome from "./home";
import loadAbout from "./about";

const event = {
  Home: loadHome,
  Menu: loadMenu,
  About: loadAbout,
};

const createLi = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  li.addEventListener("click", (e) => {
    event[text]();
    const active = document.querySelector(".active");
    active.classList.remove("active");
    li.classList.add("active");
  });
  return li;
};

const createNav = () => {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const home = createLi("Home");
  const menu = createLi("Menu");
  const about = createLi("About");

  home.classList.add("active");
  nav.classList.add("navigation");

  ul.appendChild(home);
  ul.appendChild(menu);
  ul.appendChild(about);
  nav.appendChild(ul);
  return nav;
};

const createHeader = () => {
  const header = document.createElement("header");
  const nav = createNav();
  header.appendChild(nav);
  return header;
};

const loadPage = () => {
  const body = document.querySelector("body");
  const content = document.querySelector("#content");
  const main = document.createElement("main");

  const bg = document.createElement("div");
  const header = createHeader();
  const subbg = document.createElement("div");

  bg.classList.add("bg-image");
  subbg.classList.add("sub-bg");

  body.appendChild(bg);
  content.appendChild(subbg);
  content.appendChild(header);
  content.appendChild(main);
};

export default loadPage;
