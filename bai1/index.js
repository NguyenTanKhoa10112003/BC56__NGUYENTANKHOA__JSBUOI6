function timSoNguyenDuongNhoNhat() {
  var tong = 0;
  var n = 1;

  while (tong <= 10000) {
    tong += n;
    n++;
  }

  return n;
}

var soNguyenDuongNhonhat = timSoNguyenDuongNhoNhat();
// console.log(soNguyenDuongNhonhat);
document.getElementById("result").innerHTML=`<span>Số nguyên dương nhỏ nhất là: ${soNguyenDuongNhonhat}</span>`
