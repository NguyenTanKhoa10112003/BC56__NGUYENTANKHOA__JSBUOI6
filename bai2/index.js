function tinhTong() {
  var soX = document.getElementById("soX").value * 1;
  var soN = document.getElementById("soN").value * 1;
  var tong = 0;
  for (var i = 1; i <= soN; i++) {
    tong += Math.pow(soX, i);
   
  }
  document.getElementById("result").innerHTML = tong;
}
