// mảng các số nguyên:
var numList = [];
// Tạo hàm lấy số từ input thêm vào mảng
function themSo() {
  var so = document.querySelector("#nhapSo").value;
  if (so === "") {
    alert("Vui lòng nhập số vào ô");
  } else {
    numList.push(Number(so));
    // Đặt nội dung của ô input là rỗng trở lại để thêm số khác
    document.querySelector("#nhapSo").value = "";
  }
  // Xuất mảng số ra UI
  document.querySelector("#mangSo").innerHTML = numList;
}
//  Gắn hàm trên vào nút "thêm số vào mảng"
document.querySelector("#btnThemSo").addEventListener("click", themSo);
// Tạo hàm xóa mảng
function xoaMang() {
  numList = [];
  document.querySelector("#mangSo").innerHTML = numList;
}
//  Gắn hàm trên vào nút "xóa mảng"
document.querySelector("#btnXoaMang").addEventListener("click", xoaMang);

//! CHỨC NĂNG 1

function tongSoDuong() {
  if (numList.length === 0) {
    alert("Vui lòng thêm số vào mảng");
    return;
  }
  var sum = 0;
  for (var i = 0; i < numList.length; i++) {
    if (numList[i] > 0) {
      sum += numList[i];
    }
  }
  document.querySelector("#ketQua1").innerHTML = sum;
}
document.querySelector("#btn1").addEventListener("click", tongSoDuong);

//! CHỨC NĂNG 2
function demSoDuong() {
  if (numList.length === 0) {
    alert("Vui lòng thêm số vào mảng");
    return;
  }
  var numSoDuong = 0;
  for (var i = 0; i < numList.length; i++) {
    if (numList[i] > 0) {
      numSoDuong += 1;
    }
  }
  document.querySelector("#ketQua2").innerHTML = numSoDuong;
}
document.querySelector("#btn2").addEventListener("click", demSoDuong);

//! CHỨC NĂNG 3
function timMin() {
  if (numList.length === 0) {
    alert("Vui lòng thêm số vào mảng");
    return;
  }
  var min = numList[0];
  for (var i = 1; i < numList.length; i++) {
    if (numList[i] < min) {
      min = numList[i];
    }
  }
  document.querySelector("#ketQua3").innerHTML = min;
}
document.querySelector("#btn3").addEventListener("click", timMin);

//! CHỨC NĂNG 4
function timMinDuong() {
  if (numList.length === 0) {
    alert("Vui lòng thêm số vào mảng");
    return;
  }
  var listSoDuong = [];
  for (var i = 0; i < numList.length; i++) {
    if (numList[i] > 0) {
      listSoDuong.push(numList[i]);
    }
  }
  if (listSoDuong.length === 0) {
    document.querySelector("#ketQua4").innerHTML =
      "Mảng không có số dương nào cả";
    return;
  }
  var minDuong = listSoDuong[0];
  for (var i = 0; i < listSoDuong.length; i++) {
    if (listSoDuong[i] < minDuong) {
      minDuong = listSoDuong[i];
    }
  }
  document.querySelector("#ketQua4").innerHTML = minDuong;
}
document.querySelector("#btn4").addEventListener("click", timMinDuong);

//! CHỨC NĂNG 5
/**
 * Khối 1: mảng
 * Khối 2:
 * - kiểm tra nếu mảng chưa được thêm số thì báo "vui lòng thêm số vào mảng"
 * - tao mảng listSoChan để chứa các số chẵn
 * - sử dụng vòng lặp, nếu số nào chia hết cho 2 thì là số chẵn, thêm số đó vào mảng listSoChan, vì vòng lặp thêm dần theo thứ tự index tăng dần nên số chẵn cuối cùng ở mảng gốc sẽ được thêm vào mảng listSoChan cuối cùng.
 * - xuất ra UI:
 * + nếu độ dài mảng listSoChan là 0 thì không có số chẵn. Tức xuất ra "-1"
 * + else: xuất ra số cuối cùng trong mảng listSoChan (có index là listSoChan.length - 1), sô đó cũng chính là số chẵn cuối cùng trong mảng gốc.
 * Khối 3: số chẵn cuối cùng trong mảng
 */
function timSoChanCuoiCung() {
  if (numList.length === 0) {
    alert("Vui lòng thêm số vào mảng");
    return;
  }
  var listSoChan = [];
  for (var i = 0; i < numList.length; i++) {
    if (numList[i] % 2 === 0) {
      listSoChan.push(numList[i]);
    }
  }
  var soChan = -1;
  if (listSoChan.length === 0) {
    document.querySelector("#ketQua5").innerHTML = soChan;
  } else {
    var i = listSoChan.length - 1;
    soChan = listSoChan[i];
    document.querySelector("#ketQua5").innerHTML = soChan;
  }
}
document.querySelector("#btn5").addEventListener("click", timSoChanCuoiCung);

//! CHỨC NĂNG 6
/**
 * Khối 1: 2 index nhập từ 2 ô input
 *
 * Khối 2:
 * - lấy giá trị 2 index được nhập từ 2 ô input
 * - kiểm tra 1: nếu 1 trong 2 giá index (vốn đang ở kiểu dữ liệu chuỗi) là rỗng thì báo lỗi
 * - chuyển 2 giá trị index thành giá trị số
 * - kiểm tra 2: nếu 1 trong 2 index là số âm thì báo lỗi
 * - kiểm tra 3: nếu index 1 bằng index 2 thì báo lỗi
 * - kiểm tra 4: nếu mảng có ít hơn 2 phần tử thì thông báo "mảng phải có nhiều hơn 1 phần tử" (vì phải có ít nhất 2 phần tử thì mới đổi chổ cho nhau được)
 * - kiểm tra 5: nếu index 1 hoặc index 2 >= length của mảng thì báo lỗi (nếu index 1 hoặc index 2 > length thì sẽ không tìm ra phần tử)
 * - tạo mảng clone không liên quan đến mảng cũ (nhưng giống mảng cũ) bằng vòng lặp (để tránh mảng mới thay đổi thì mảng cũ cũng bị thay đổi theo cho tính chất tham chiếu của biến nhiều giá trị) -> mảng cũ được giữ nguyên để có thể test các chức năng khác của chương trình.
 * - lưu giá trị phần tử index 1 của mảng clone vào biến 1a (vì khi gán giá trị phần tử 2 vào phần tử index 1, thì phần tử index 1 đã bị đổi giá trị thành phần tử 2, sau đó gán lại giá trị phần tử 1 vào phần tử 2 thì phần tử 2 nhận lại giá trị cũ của chính mình -> sai)
 * - gán giá trị index 2 vào index 1, gán giá trị biến 1a vào biến 2 -> mảng mới 2
 * - in mảng mới 2 ra giao diện
 *
 * Khối 3: mảng mới (sau khi đã đổi vị trí 2 phần tử có index 1 và index 2 từ mảng cũ)
 */
function doiViTri() {
  function getEle(a) {
    return document.querySelector(a).value;
  }
  var i1 = getEle("#viTri1");
  var i2 = getEle("#viTri2");
  if (i1 === "" || i2 === "") {
    alert("Bạn phải điền đầy đủ các ô input");
    return;
  }
  var index1 = Number(i1);
  var index2 = Number(i2);
  if (index1 < 0 || index2 < 0) {
    alert("Giá trị index không được là số âm");
    return;
  }
  if (index1 == index2) {
    alert("Bạn phải nhập 2 index khác nhau");
    return;
  }
  if (numList.length < 2) {
    alert("Mảng phải có nhiều hơn 1 phần tử");
    return;
  }
  if (index1 >= numList.length || index2 >= numList.length) {
    alert("Phần tử trong mảng không tồn tại vì giá trị index bạn nhập quá lớn");
    return;
  }

  var numListClone = [];
  for (var i = 0; i < numList.length; i++) {
    numListClone.push(numList[i]);
  }
  var so1a = numListClone[index1];
  numListClone[index1] = numListClone[index2];
  numListClone[index2] = so1a;
  document.querySelector("#ketQua6").innerHTML = numListClone;
}

document.querySelector("#btn6").addEventListener("click", doiViTri);

//! CHỨC NĂNG 7
/**
 * Khối 1: mảng
 *
 * Khối 2:
 * - kiểm tra nếu mảng trống thì yêu cầu thêm số
 * - tạo mảng clone để tránh ảnh hưởng đến mảng gốc
 * - Tạo mảng sortedList dự định sẽ là mảng chứa phần tử theo thứ tự giá trị tăng dần.
 * Dự kiến các bước sẽ làm nếu không sử dụng vòng lặp
 * B1. tìm giá trị bé nhất của mảng bằng hàm min tương tự của chức năng 3
 * B2. loại bỏ giá trị min vừa tìm được khỏi mảng ban đầu, thêm giá trị min bé nhất đó vào mảng sortedList
 * B3. tìm giá trị bé nhất của mảng mới bằng hàm min, giá trị bé nhất của mảng mới đó chính là là giá trị bé nhì của mảng ban đầu (do giá trị bé nhất thật sự đã bị loại bỏ)
 * B4. loại bỏ giá trị min vừa tìm được khỏi mảng, thêm giá trị min đó (giá trị bé nhì) vào mảng sortedList
 * ...(cứ thế lặp lại quá trình trên).......
 * ===> Thực ra không cần làm từng bước như trên mà sử dụng vòng lặp để sau khi lặp sẽ tìm được giá trị bé nhất bé nhì rồi thêm dần giá trị bé nhất, bé nhì vào mảng. Giá trị bé nhất được đẩy vào trước, giá trị bé nhì được đẩy vào sau, cứ thế lặp lại
 * - in mảng sortedList ra UI.
 *
 * Khối 3: mảng mới sau khi đã được sắp xếp tăng dần
 *
 */
function xepTangDan() {
  if (numList.length === 0) {
    alert("Vui lòng thêm số vào mảng");
    return;
  }
  // Tạo mảng clone
  var numListClone = [];
  for (var i = 0; i < numList.length; i++) {
    numListClone.push(numList[i]);
  }
  var sortedList = [];
  while (numListClone.length > 0) {
    var min = numListClone[0];
    var minIndex = 0;

    for (var i = 1; i < numListClone.length; i++) {
      if (numListClone[i] < min) {
        min = numListClone[i];
        minIndex = i;
      }
    }

    numListClone.splice(minIndex, 1);
    sortedList.push(min);
  }
  document.querySelector("#ketQua7").innerHTML = sortedList;
}
document.querySelector("#btn7").addEventListener("click", xepTangDan);

//! CHỨC NĂNG 8:
/**
 * Khối 1: mảng
 *
 * Khối 2:
 * - Kiểm tra nếu mảng trống thì yêu cầu thêm số
 * - Tạo mảng "lớn hơn 1" chỉ gồm các số lớn hơn 1 từ mảng gốc (vì số nguyên tố phải là số lớn hơn 1)
 * - Tạo mảng "số nguyên tố" chỉ để lưu trữ các số nguyên tố được lấy từ mảng "lớn hơn 1"
 * - Sử dụng vòng lặp để kiểm tra lần lượt từng phần tử trong mảng "lớn hơn 1", nếu phần tử nào là số nguyên tố thì đẩy vào mảng số nguyên tố.
 * - lấy ra phần tử đầu tiên của mảng "số nguyên tố"
 *
 * Khối 3: số nguyên tố đầu tiên trong mảng
 */
function nguyenToDau() {
  if (numList.length === 0) {
    alert("Vui lòng thêm số vào mảng");
    return;
  }
  //Tạo mảng chỉ gồm các số lớn hơn 1
  var listHonMot = [];
  for (var i = 0; i < numList.length; i++) {
    if (numList[i] > 1) {
      listHonMot.push(numList[i]);
    }
  }
  var nguyenTo = [];
  for (var i = 0; i < listHonMot.length; i++) {
    var soNguyenTo = true;
    for (a = 2; a <= Math.sqrt(listHonMot[i]); a++) {
      if (listHonMot[i] % a === 0) {
        var soNguyenTo = false;
      }
    }
    if (soNguyenTo) {
      nguyenTo.push(listHonMot[i]);
    }
    if (nguyenTo.length === 0) {
      document.querySelector("#ketQua8").innerHTML = -1;
    } else {
      document.querySelector("#ketQua8").innerHTML = nguyenTo[0];
    }
  }
}
document.querySelector("#btn8").addEventListener("click", nguyenToDau);

//! CHỨC NĂNG 9
/**
 * Khối 1: mảng số thực
 *
 * Khối 2:
 * Giai đoạn 1: Tạo input mảng mới
 * - Tạo UI gồm các nút nhập số thực, xóa mảng và khu vực hiển thị mảng số thực
 * - Tạo các hàm thêm số thực vào mảng, xóa mảng
 * - Gắn các hàm vào các nút tương ứng
 * Giai đoạn 2: Đếm số lượng số thực trong mảng
 * kiểm tra nếu mảng trống thì yêu cầu thêm số
 * var count = 0
 * Dùng vòng lặp kiểm tra từng số trong mảng, mếu một số chia hết cho 1 thì là số nguyên -> count += 1
 * Xuất count ra UI
 *
 * Khối 3: số lượng số nguyên trong mảng
 */

//? Giai đoạn 1: Tạo input mảng mới
// mảng các số thực:
var listSoThuc = [];
// Tạo hàm lấy số từ input thêm vào mảng
function themSoThuc() {
  var soThuc = document.querySelector("#nhapSoThuc").value;
  if (soThuc === "") {
    alert("Vui lòng nhập số vào ô");
  } else {
    listSoThuc.push(Number(soThuc));
    // Đặt nội dung của ô input là rỗng trở lại để thêm số khác
    document.querySelector("#nhapSoThuc").value = "";
  }
  // Xuất mảng số ra UI
  document.querySelector("#mangSoThuc").innerHTML = listSoThuc;
}
//  Gắn hàm trên vào nút "thêm số vào mảng"
document.querySelector("#btnThemSoThuc").addEventListener("click", themSoThuc);
// Tạo hàm xóa mảng
function xoaMangThuc() {
  listSoThuc = [];
  document.querySelector("#mangSoThuc").innerHTML = listSoThuc;
}
//  Gắn hàm trên vào nút "xóa mảng"
document
  .querySelector("#btnXoaMangThuc")
  .addEventListener("click", xoaMangThuc);

//? Giai đoạn 2: Đếm số lượng số thực trong mảng
function demSoThuc() {
  if (listSoThuc.length === 0) {
    alert("Vui lòng thêm số vào mảng");
    return;
  }
  var count = 0;
  for (i = 0; i < listSoThuc.length; i++) {
    if (listSoThuc[i] % 1 === 0) {
      count += 1;
    }
  }
  document.querySelector("#ketQua9").innerHTML = count;
}
document.querySelector("#btn9").addEventListener("click", demSoThuc);

//!CHỨC NĂNG 10
/**
 * Khối 1: mảng
 *
 * Khối 2:
 * kiểm tra nếu mảng trống thì yêu cầu thêm số
 * tạo biến soDuong
 * sử dụng vòng lặp để so sánh từng số trong mảng với số 0, nếu số đó lớn hơn 0 thì soDuong +=1
 * tạo biển soAm
 * sử dụng vòng lặp để so sánh từng số trong mảng với sô 0, nếu số đó bé hơn số 0 thì soAm +=1
 * sử dụng hàm if:
 * nếu soDuong>soAm: output "số dương nhiều hơn số âm"
 * else if soDuong=soAm: output "số dương bằng số âm"
 * else "số âm nhiều hơn số dương"
 *
 * Khối 3: Kết quả số âm hay số dương nhiều hơn (kèm số lượng số dương, số lượng số âm)
 */

function soSanhAmDuong() {
  if (numList.length === 0) {
    alert("Vui lòng thêm số vào mảng");
    return;
  }
  var soDuong = 0;
  for (var i = 0; i < numList.length; i++) {
    if (numList[i] > 0) {
      soDuong += 1;
    }
  }
  var soAm = 0;
  for (var i = 0; i < numList.length; i++) {
    if (numList[i] < 0) {
      soAm += 1;
    }
  }
  if (soDuong > soAm) {
    document.querySelector("#ketQua10").innerHTML =
      "Số lượng số dương nhiều hơn số lượng số âm " +
      "(mảng có " +
      soDuong +
      " số dương, " +
      soAm +
      " số âm)";
  } else if (soDuong == soAm) {
    document.querySelector("#ketQua10").innerHTML =
      "Số lượng số dương bằng số lượng số âm " +
      "(mảng có " +
      soDuong +
      " số dương, " +
      soAm +
      " số âm)";
  } else {
    document.querySelector("#ketQua10").innerHTML =
      "Số lượng số âm nhiều hơn số lượng số dương " +
      "(mảng có " +
      soDuong +
      " số dương, " +
      soAm +
      " số âm)";
  }
}
document.querySelector("#btn10").addEventListener("click", soSanhAmDuong);
