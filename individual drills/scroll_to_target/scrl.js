const btn_c = document.getElementById("btnC");
const box_c = document.getElementsByClassName("box");

btn_c.addEventListener("click", () => {
  console.log("connected to btn_c");
  console.log(box_c);
  box_c[2].scrollIntoView();
});

// function scroll() {
//   console.log("btn c is clicked");
//   const box_c = document.getElementsByClassName("c");
//   box_c.scrollIntoView();
// }

//TIL ! getElementsByClassName 은 그 이름을 가진 class 가 하나일지라도 array를 반환한다! 그러니 const btn_c 로 변수 지정후에도 btn_c[0] 이런식으로 index 표시를 해줘야만 써먹을수 있다.
