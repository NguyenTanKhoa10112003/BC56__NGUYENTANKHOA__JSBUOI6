function taoDiv() {
//   var divContainer = document.getElementById("divContainer");
//   var input = document.getElementById("iSo").value * 1;

  var output = "";
  // b1
  var dem = 1; // Bước nhảy
  // b2
  while (dem <= input) {
    // b3
    // var div = `<div class="alert alert-success mt-2">hello cybersoft</div>`;
    // output += div;
    div.textContent = i % 2 === 0 ? "Div chẵn " + i : "Div lẻ " + i;
    // b4
    dem++;
  }
  document.getElementById("result").innerHTML = output;
}
