function tinnhGiaiThua() {
  var nhapN = document.getElementById("soN").value * 1;
  var giaiThua = 1;
  var giaTri = 1;
  while (giaTri <= nhapN) {
    giaiThua *= giaTri;
    giaTri ++;
  }
  document.getElementById("result").innerHTML = giaiThua;
}
