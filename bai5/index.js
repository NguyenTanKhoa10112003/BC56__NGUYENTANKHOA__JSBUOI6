function cacSoNguyen() {
  var soNguyen = document.getElementById("soNguyen").value * 1;
  var cacSoNguyen = "";
  for (var i = 1; i <= soNguyen; i++) {
    cacSoNguyen = cacSoNguyen + i + " ";
  }
  document.getElementById(
    "result"
  ).innerHTML = `<p>Các số nguyên là: ${cacSoNguyen}</p>`;
}
