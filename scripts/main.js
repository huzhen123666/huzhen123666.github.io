/*
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

let myVariable = "huzhen";
//变量可以存放数组,使用myVariable[0]访问
myVariable = [1, "cao", true];
//变量可以存放对象
myVariable = document.querySelector("h1");

let testNum = 3;
//if、===、!==
if (testNum === 3) {
  alert("Equal");
} else {
  alert("Not equal");
}

//函数
function myMultiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

//事件,此处传递的第二个参数为匿名函数
document.querySelector("html").addEventListener("click", function () {
  alert("别戳我，我怕疼！");
});

//匿名函数的第二种写法
document.querySelector("html").addEventListener("click", () => {
  alert("别戳我，我怕疼！");
});
*/

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/huohu.jpg") {
    myImage.setAttribute("src", "images/1.png");
  } else {
    myImage.setAttribute("src", "images/huohu.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name:");
  if (!myName) {
    setUserName();
  } else {
    //localStorage API允许我们将数据存储在浏览器中并供后续获取
    //setItem() 函数创建并存储一个'name' 的数据项
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool,${myName}`;
  }
}

//初始化代码，因为它在初次加载时开始工作
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool,${storedName}`;
}

myButton.onclick = function () {
  setUserName();
};
