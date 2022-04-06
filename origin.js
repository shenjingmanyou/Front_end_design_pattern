var isShow = true;

var modal = document.createElement("div");
var switchButton = document.createElement("button");
switchButton.innerText = "关";
switchButton.onclick = function () {
  if (isShow) {
    switchButton.innerText = "开";
    isShow = false;
  } else {
    switchButton.innerText = "关";
    isShow = true;
  }
};
modal.appendChild(switchButton);
document.getElementById("root").appendChild(modal);
