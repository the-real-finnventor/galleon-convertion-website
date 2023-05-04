
const v = document.getElementById('galleons');
const b = document.getElementById('convert-btn');
const o = document.getElementById('converted-value');
const n = +v.value
const cv = 7.35
let cdv = n * cv
console.log(n)
console.log(typeof n)

function conv() {
  o.innerHTML = cdv;
}

b.addEventListener('click',conv)