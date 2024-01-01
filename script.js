const pswLen = document.getElementById("psw-len");
const lenValue = document.querySelector(".len-value");
let pswLenVale = 8;
pswLen.addEventListener("input", (e) => {
  pswLenVale = e.target.value;
  generatePassword();
});
function generatePassword() {
  lenValue.textContent = pswLenVale;
}
generatePassword();
