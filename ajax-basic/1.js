var myRequest = new XMLHttpRequest();
// console.log(myRequest);

let input = document.getElementById("comment");

let btnAdd = document.getElementById("add");

let pContent = document.getElementById("pContent");

let added = document.getElementById("added");

input.addEventListener("input", function () {
  let commentTxt = input.value;
  pContent.innerHTML = commentTxt;
});

btnAdd.addEventListener("click", function (e) {
  e.preventDefault();
  myRequest.onload = function () {
    let commentTxt = input.value;
    added.innerHTML = commentTxt;
  };

  myRequest.open("POST", "/comment.txt");
  myRequest.send();
});