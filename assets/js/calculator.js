const drslt = document.getElementById("dResult");
const allclr = document.getElementById("allclear");
const prvs = document.getElementById("previous");
const prcnt = document.getElementById("percent");
const dvd = document.getElementById("divide");
const n7 = document.getElementById("num7");
const n8 = document.getElementById("num8");
const n9 = document.getElementById("num9");
const prdct = document.getElementById("product");
const n4 = document.getElementById("num4");
const n5 = document.getElementById("num5");
const n6 = document.getElementById("num6");
const mns = document.getElementById("minus");
const n1 = document.getElementById("num1");
const n2 = document.getElementById("num2");
const n3 = document.getElementById("num3");
const pls = document.getElementById("plus");
const dlt = document.getElementById("delete");
const flt = document.getElementById("float");
const n0 = document.getElementById("num0");
const eql = document.getElementById("equal");

let first = null;
let operator = null;
let second = null;

function clickNum(num) {
  drslt.innerText += num;
}


n1.addEventListener("click", () => clickNum('1'));
n2.addEventListener("click", () => clickNum('2'));
n3.addEventListener("click", () => clickNum('3'));
n4.addEventListener("click", () => clickNum('4'));
n5.addEventListener("click", () => clickNum('5'));
n6.addEventListener("click", () => clickNum('6'));
n7.addEventListener("click", () => clickNum('7'));
n8.addEventListener("click", () => clickNum('8'));
n9.addEventListener("click", () => clickNum('9'));
n0.addEventListener("click", () => clickNum('0'));
flt.addEventListener("click", () => clickNum('.'));


function clickOp(op) {
  first = parseFloat(drslt.innerText);
  operator = op; 
  drslt.innerText = "";
}

pls.addEventListener("click", () => clickOp('+'));
mns.addEventListener("click", () => clickOp('-'));
prdct.addEventListener("click", () => clickOp('*'));
dvd.addEventListener("click", () => clickOp('/'));

eql.addEventListener("click",function(){
    second = parseFloat(drslt.innerText);
  
    let result;
    if (operator === '+') {
      result = first + second;
    } else if (operator === '-') {
      result = first - second;
    } else if (operator === '*') {
      result = first * second;
    } else if (operator === '/') {
      result = first / second;
    }
  
    drslt.innerText = result;
    first = result;
    operator = null;
    second = null;
  })
  allclr.addEventListener("click",function(){
    drslt.innerText = "";
    operator = null;
    second = null;
  });

  dlt.addEventListener("click",function(){
    drslt.innerText = drslt.innerText.slice(0, -1);
  });
  