function addField() {
  let field_type = document.getElementById("select-field").value;
  let label = document.getElementById("label").value;
  if (label === "") {
    alert("Enter a label ");
    return;
  }
  console.log(field_type.toLowerCase());
  console.log(label);
  document.getElementById("label").value = "";
  setForm(field_type.toLowerCase(), label);
}
function setForm(type, label) {
  let form = document.getElementById("form-output");
  let inp_label = document.createElement("label");
  let inp = document.createElement("input");
  inp.type = type;
  if (type === "radio" || type === "checkbox") {
    inp_label.style.display = "inline";
    inp.name = "same";
    console.log(inp_label);
    inp_label.innerHTML = label;

    console.log(inp);
    console.log(inp_label);

    let ele = inp_label.appendChild(inp);
    form.appendChild(inp_label);
  } else if (type === "submit") {
    inp.innerHTML = label;
    form.appendChild(inp)
    console.log(inp);
  } else {
    inp_label.innerHTML = label;

    console.log(inp);
    console.log(inp_label);

    let ele = inp_label.appendChild(inp);
    form.appendChild(inp_label);
  }
}
