function Increment() {
  let number = Number(document.getElementById("number").innerHTML);
  document.getElementById("number").innerHTML = number + 1;

  //for display none to hide favicon

  const s = document.getElementById("smile");
  s.style.display = "none";

  /* number opacity = 1 to shown*/

  const show = document.getElementById("number");
  show.style.opacity = 1;
}

function Decrement() {
  let number = Number(document.getElementById("number").innerHTML);
  document.getElementById("number").innerHTML = number - 1;

  //for display none to hide favicon

  const s = document.getElementById("smile");
  s.style.display = "none";

  /* number opacity = 1 to shown*/

  const show = document.getElementById("number");
  show.style.opacity = 1;
}

function Netural() {
  let number = Number(document.getElementById("number").innerHTML);
  document.getElementById("number").innerHTML = number = 0;

  //for display none to hide favicon

  const s = document.getElementById("smile");
  s.style.display = "none";

  /* number opacity = 1 to shown*/

  const show = document.getElementById("number");
  show.style.opacity = 1;
}
