function newGame() {
  var tournementNameValue = document.getElementById(
    "tournement-name-input"
  ).value;
  var tournementNameTextEl = document.getElementById("tournement-name-txt");
  tournementNameTextEl.textContent = tournementNameValue;

  var homeTeamNameValue = document.getElementById("home-team-name-input").value;
  var homeTeamNameTxtEl = document.getElementById("home-team-name-txt");
  homeTeamNameTxtEl.textContent = homeTeamNameValue;

  var homeTeamFlagUrlValue = document.getElementById(
    "home-team-flag-url-input"
  ).value;
  var homeTeamFlagImgEl = document.getElementById("home-team-flag-img");
  homeTeamFlagImgEl.src = homeTeamFlagUrlValue;

  var awayTeamNameValue = document.getElementById("away-team-name-input").value;
  var awayTeamNameTxtEl = document.getElementById("away-team-name-txt");
  awayTeamNameTxtEl.textContent = awayTeamNameValue;

  var awayTeamFlagUrlValue = document.getElementById(
    "away-team-flag-url-input"
  ).value;
  var awayTeamFlagImgEl = document.getElementById("away-team-flag-img");
  awayTeamFlagImgEl.src = awayTeamFlagUrlValue;

  //here i'll reset all the text inside the details div, like the score and ther records
}

//here i'll set the period by enabling the setPeriod function by clicking the Set period button
function setPeriod() {
  var periodEl = document.getElementById("period");
  var periodInputValue = document.getElementById("period-value-input").value;

  periodEl.textContent = periodInputValue;
}

//her i'll set ther timer and fire it when ever the user entered a time in the time textbox
//the pressed the set timer button
function setTimer() {
  var timerInputValue = document.getElementById("timer-value-input").value;
  var timerEl = document.getElementById("timer");
  if (timerInputValue < 10) {
    timerEl.textContent = "0" + timerInputValue + ":00";
  } else {
    timerEl.textContent = timerInputValue + ":00";
  }

  //her I'll set the left time to be calculated the set interval
  var timeLeft = timerInputValue * 60;
  // var timeLeft = timerInputValue;

  var timer = setInterval(function () {
    if (timeLeft < 0) {
      clearInterval(timer);
      timerEl.style.backgroundColor = "red";
      timerEl.style.color = "white";
      timerEl.style.fontWeight = "bold";
    } else {
      //calculates the left minutes and seconds
      var minutes = Math.floor(timeLeft / 60);
      var seconds = timeLeft % 60;

      //format minutes and seconds to show them with two digits ex. 45:00
      var formatedMinutes = minutes < 10 ? "0" + minutes : minutes;
      var formatedSeconds = seconds < 10 ? "0" + seconds : seconds;

      //update the text in the timer div
      document.getElementById("timer").textContent =
        formatedMinutes + ":" + formatedSeconds;

      // console.log(timeLeft, formatedMinutes, formatedSeconds);

      timeLeft -= 1;
    }
  }, 1000);
}

//bellow the functions regard editing the home team data like the score and the shots
//changes the home team score when the user press enter on the home score input element
const homeScoreInputEl = document.getElementById("home-score-input");
homeScoreInputEl.addEventListener("keydown", function (event) {
  if (event.key == "Enter") edit();
});
function edit() {
  const homeScoreEl = document.getElementById("home-score");
  var score = homeScoreInputEl.value;
  if (score < 10) {
    score = "0" + score;
  }
  homeScoreEl.textContent = score;
}

//set home team shots
const homeShotsInputEl = document.getElementById("home-shots-input");
homeShotsInputEl.addEventListener("keydown", function (event) {
  if (event.key == "Enter") setHomeShotsValue();
});
function setHomeShotsValue() {
  // console.log(homeShotsInputEl.value)
  var shots =
    homeShotsInputEl.value < 10
      ? "0" + homeShotsInputEl.value
      : homeShotsInputEl.value;
  var homeShotsTxtEl = document.getElementById("home-shots");
  homeShotsTxtEl.textContent = shots;
}

//set home team shots on target
const homeShotsOnTargetInputEl = document.getElementById(
  "home-shots-on-target-input"
);
homeShotsOnTargetInputEl.addEventListener("keydown", function (event) {
  if (event.key == "Enter") setHomeShotsOnTargetValue();
});
function setHomeShotsOnTargetValue() {
  var shotsOnTarget =
    homeShotsOnTargetInputEl.value >= 10
      ? homeShotsOnTargetInputEl.value
      : "0" + homeShotsOnTargetInputEl.value;

  const homeShotsOnTargetTxtEl = document.getElementById(
    "home-shots-on-target"
  );
  homeShotsOnTargetTxtEl.textContent = shotsOnTarget;
}

//set home team posession
const homePosessionInputEl = document.getElementById("home-posession-input");
homePosessionInputEl.addEventListener("keydown", function (event) {
  if (event.key == "Enter") setHomePosessionValue();
});
function setHomePosessionValue() {
  var posession = homePosessionInputEl.value;
  // posession = posession < 10 ? "0" + posession : posession;

  const homePosessionTxtEl = document.getElementById("home-posession");
  homePosessionTxtEl.textContent = posession + "%";
}

