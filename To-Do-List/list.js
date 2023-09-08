const inp = document.getElementById("inp");
const btn = document.getElementById("btn");
const body1 = document.getElementById("body1");
const body2 = document.getElementById("body2");


function getRandomColor() {
  let colorCode = "#";
  let color = "0123456789ABCDEF";

  for (let i = 0; i < 6; i++) {
    colorCode += color[Math.floor(Math.random() * color.length)];
  }
  return colorCode;
}

btn.addEventListener("click", () => {
  let par = document.createElement("p");
  let but = document.createElement("button");

  body1.style.overflowY = 'scroll';
  body2.style.overflowY = 'scroll';

  // par.style.backgroundColor = getRandomColor();
  par.style.color = "white";
  //   par.style.marginLeft = 15 +"px";
  but.style.backgroundColor = getRandomColor();
  but.style.border = "none";
  but.style.width = 50 + "px";
  but.style.height = 30 + "px";
  but.style.marginTop = 10 + "px";
  // but.style.backgroundColor = 'blue';
  // but.style.color = "white";


  body1.appendChild(par);
  body2.appendChild(but);
  par.innerText = inp.value;
  but.innerText = "Delete";

  but.addEventListener("click", () => {
    rem(par, but);
    //   body1.style.overflowY = 'hidden';
    //   body2.style.overflowY = 'hidden';
  });
  inp.value = "";
});

function rem(par, but) {
  par.remove();
  but.remove();
}