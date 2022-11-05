



function addHandler() {
  // console.log("addHandler");
  x = $("#firstOperand").val();
  y = $("#secondOperand").val();
  x = Number(x)
  y = Number(y)
  result = `${x} + ${y} = ${x + y}`; // better
  coloredResult = `
  <span style="background-color:blue">
  ${result}
  <button class="deleteBtn">Delete</button>
  </span>
  <br>
  `
  $("#result").append(coloredResult);
}


function subHandler() {
  // console.log("addHandler");
  x = $("#firstOperand").val();
  y = $("#secondOperand").val();
  x = Number(x)
  y = Number(y)
  // console.log(x);
  // console.log(y);
  // console.log(x + y);
  result = `${x} - ${y} = ${x - y}`; // better
  coloredResult = `
  <span style="background-color:yellow">
  ${result}
    <button class="deleteBtn">Delete</button>
  </span>
  <br>
  `
  $("#result").append(coloredResult);
}


function mulHandler() {
  // console.log("mulHandler");
  x = $("#firstOperand").val();
  y = $("#secondOperand").val();
  x = Number(x)
  y = Number(y)
  result = `${x} * ${y} = ${x * y}`;
  coloredResult = `
  <span style="background-color:green">
  ${result}
  <button class="deleteBtn">Delete</button>
  </span>
  <br>
  `
  $("#result").append(coloredResult);
}


function divHandler() {
  // console.log("divHandler")
  x = $("#firstOperand").val();
  y = $("#secondOperand").val();
  x = Number(x)
  y = Number(y)
  result = `${x} / ${y} = ${x / y}`;
  coloredResult = `
  <span style="background-color:red">
  ${result}
  <button class="deleteBtn">Delete</button>
  </span>
  <br>
  `
  $("#result").append(coloredResult);
}


function deleteHandler() {
  // console.log("deleteHandler");
  $(this).parent().hide();
  // "this" will select the current html element, this parent will be one level up
}

function setup() {
  // console.log("setup");
  $("#addBtn").click(addHandler);
  $("#subBtn").click(subHandler);
  $("#mulBtn").click(mulHandler);
  $("#divBtn").click(divHandler);
  $("body").on("click", ".deleteBtn", deleteHandler);
}


$(document).ready(setup);