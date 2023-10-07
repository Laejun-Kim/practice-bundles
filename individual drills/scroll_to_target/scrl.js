const boxes = document.getElementsByClassName("box");

// btn_c.addEventListener("click", () => {
//   boxes[2].scrollIntoView({
//     behavior: "smooth",
//   });
// });

// function scroll() {
//   console.log("btn c is clicked");
//   const box_c = document.getElementsByClassName("c");
//   box_c.scrollIntoView();
// }

//TIL ! getElementsByClassName 은 그 이름을 가진 class 가 하나일지라도 array를 반환한다! 이는 그 대상을 콘솔에 찍었을때 HTMLCollection 이라고 표시해 주는것을 보면 명백하다.그러니 const btn_c 로 변수 지정후에도 btn_c[0] 이런식으로 index 표시를 해줘야만 써먹을수 있다.

function scrolll(boxnum) {
  boxes[boxnum].scrollIntoView({
    behavior: "smooth",
  });
}
