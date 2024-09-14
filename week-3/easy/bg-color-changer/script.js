let ch = document.getElementById("picker");

ch.addEventListener("click", () => {
  let p = prompt("Enter the colour you want in the Colour panel");
  let newBtn = document.createElement("button")
  newBtn.setAttribute('id',`${p.toLowerCase()}`)
  newBtn.setAttribute('class',`btn`)
  newBtn.innerHTML = `${p}`
  document.querySelector(".container").appendChild(newBtn);
  document.getElementById(
    `${p.toLowerCase()}`
  ).style.backgroundColor = `${p.toLowerCase()}`;
  console.log(p);
  setButtons();
});

let btnSet = document.querySelectorAll(".btn");
btnSet.forEach((e) => {
  e.addEventListener("click", () => {
    setButtons();
    let y = e.innerText;
    document.body.style.backgroundColor = y.toLowerCase();
  });
});
function setButtons() {
  let btn = document.querySelectorAll(".btn");
  // let body = document.getElementsByTagName('body')
  btn.forEach((e) => {
    console.log(e);
    e.addEventListener("click", () => {
      let x = e.innerText;
      document.body.style.backgroundColor = x.toLowerCase();
    });
  });
}
let d = document.getElementById("default");
d.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
});
