function rngMakerbyMath() {
  return Math.floor(Math.random() * 10);
}

// const yourNumber = document.getElementById("byMath");
// const todaysNumber = rngMakerbyMath();
// yourNumber.innerHTML = todaysNumber;

//Math.floor(Math.random() * 10);  이 함수를 사용하는 것은 맞다. console.log 찍어보면 랜덤으로 0~9사이로 숫자 생성됨.

//와 진짜 이 간단한걸 하는데 2시간 걸리는게 말이되냐 Date.now 이용하는건 내일 해보자

const datespan = document.getElementById("dateSpan");

document.getElementById("dateBtn").onclick = function () {
  datespan.innerHTML = `your number is ${Date.now()
    .toString()
    .substring(10, 13)}`;
};
