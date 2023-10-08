const chars = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
let idx = Math.floor(Math.random() * 62);

function randomChar() {
  let idx = Math.floor(Math.random() * 62);
  return chars.charAt(idx);
}
function randomChar2() {
  let idx = Math.floor(Math.random() * 62);
  return chars.charAt(idx);
}

let randomString = randomChar() + randomChar2();

console.log(randomString);

// document.getElementById("here").innerHTML = randomString;

document.onmousemove = () => {
  randomChar();
  randomChar2();
  document.getElementById("here").innerHTML += randomChar() + randomChar2();
  window.scrollTo(0, document.body.scrollHeight);
};
