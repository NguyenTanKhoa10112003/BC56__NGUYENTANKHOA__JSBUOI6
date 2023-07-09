function taoDiv() {
  var output = document.getElementById("output");
  output.innerHTML = "";

  for (var i = 1; i <= 10; i++) {
    var div = document.createElement("div");
    div.textContent = i % 2 === 0 ? "div chẵn " + i : "div lẻ " + i;
    div.className = i % 2 === 0 ? "even" : "odd";
    output.appendChild(div);
  }
}
