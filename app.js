// alert("test");

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerDisplay = document.querySelector(".timerDisplay");
let timer = null;

// 시작버튼 이벤트
document.getElementById("startTimer").addEventListener("click", () => {
  //클릭하면 타이머 시작
  // alert("클릭했음"); 테스트용
  // timer = setInterval(함수,10); << 타이머 시작함수 10ms마다 함수 실행
  if (timer !== null) {
    clearInterval(timer); //이미 타이머가 실행중이라면 종료하기!
  }
  timer = setInterval(displayTimer, 10);
});

function displayTimer() {
  //10ms에 한번씩 실행 10ms씩 더함
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  timerDisplay.textContent = ` ${h} : ${m} : ${s} : ${ms}`;
}

// 멈춤버튼
document.getElementById("pauseTimer").addEventListener("click", () => {
  // 멈춤 버튼 클릭시 타이머 종료!
  clearInterval(timer);
});

// 리셋버튼
document.getElementById("resetTimer").addEventListener("click", () => {
  clearInterval(timer);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timerDisplay.textContent = " 00 : 00 : 00 : 000 ";
});
