(()=>{"use strict";const e=(e,t,n)=>{const d=document.createElement("div"),a=document.createElement("img"),o=document.createElement("div"),c=document.createElement("p"),i=document.createElement("p");return d.classList.add("information-dish"),a.classList.add("random-dish"),o.classList.add("random-info"),c.classList.add("name"),i.classList.add("price"),a.setAttribute("src",e),c.textContent=t,i.textContent=n,o.appendChild(c),o.appendChild(i),d.appendChild(a),d.appendChild(o),d},t=()=>{const e=document.querySelector("main");e.textContent="";const t=document.createElement("div"),n=document.createElement("h1"),d=document.createElement("h2"),a=document.createElement("img"),o=document.createElement("img");n.textContent="Enjoy Your Meal",d.textContent="Nothing brings people together like good food.",a.setAttribute("src","./images/food.jpg"),o.setAttribute("src","./images/stroke.png"),a.classList.add("image"),o.classList.add("stroke"),t.classList.add("text-home"),t.appendChild(n),t.appendChild(d),e.appendChild(t),e.appendChild(a),e.appendChild(o)},n={Home:t,Menu:()=>{const t=document.querySelector("main");t.textContent="";const n=[e("./images/1.jpg","Burrata e Ham","10$"),e("./images/2.jpg","Uni and Tapioca","10$"),e("./images/3.jpg","Cappelletti","10$"),e("./images/5.jpg","Pork Dumplings","10$")];for(let e of n)t.appendChild(e)},About:()=>{const e=document.querySelector("main");e.textContent="";const t=document.createElement("div"),n=document.createElement("h1"),d=document.createElement("h2");n.textContent="About Us",d.textContent="We welcome you to sit back, unwind and appreciate the lovely sights and hints of the ocean while our best gourmet expert sets you up a scrumptious dinner utilizing the best and freshest ingredients.",t.classList.add("text-about"),t.appendChild(n),t.appendChild(d),e.appendChild(t)}},d=e=>{const t=document.createElement("li");return t.textContent=e,t.addEventListener("click",(d=>{n[e](),document.querySelector(".active").classList.remove("active"),t.classList.add("active")})),t};(()=>{const e=document.querySelector("body"),t=document.querySelector("#content"),n=document.createElement("main"),a=document.createElement("div"),o=(()=>{const e=document.createElement("header"),t=(()=>{const e=document.createElement("nav"),t=document.createElement("ul"),n=d("Home"),a=d("Menu"),o=d("About");return n.classList.add("active"),e.classList.add("navigation"),t.appendChild(n),t.appendChild(a),t.appendChild(o),e.appendChild(t),e})();return e.appendChild(t),e})();a.classList.add("bg-image"),t.classList.add("sub-bg"),e.appendChild(a),t.appendChild(o),t.appendChild(n)})(),t()})();