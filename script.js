//here I'll set the tournement title when the user press enter on the tournement name input
const tournementNameInputEl = document.getElementById("tournement-name-input");
tournementNameInputEl.addEventListener("keydown", function (event) {
  // if (event.key == "Enter") {
  //   setTournementName();
  // }
  event.key == "Enter" && setTournementName();
});
function setTournementName() {
  console.log(tournementNameInputEl.value);

  var txt = tournementNameInputEl.value;
  const tournementNameTxtEl = document.getElementById("tournement-name-txt");
  tournementNameTxtEl.textContent = txt;
}
//here i'll set the period by when the user enter it the set period input element then pressing enter
const periodInputEl = document.getElementById("period-value-input");
periodInputEl.addEventListener("keydown", function (e) {
  e.key == "Enter" && setPeriod();
});
function setPeriod() {
  var period = periodInputEl.value;
  const periodTxtEl = document.getElementById("period");
  periodTxtEl.textContent = period;
}
//her i'll set ther timer and fire it when ever the user entered a time in the time textbox
//then press enter
const timerInputEl = document.getElementById("timer-value-input");
timerInputEl.addEventListener("keydown", function (e) {
  e.key == "Enter" && setTimer();
});
function setTimer() {
  //here i'll convert the time inserted in the timer element from minutes to seconds
  var timerValue = timerInputEl.value * 60;
  var timerTxtEl = document.getElementById("timer-txt");
  var timer = setInterval(function () {
    if (timerValue < 0) {
      clearInterval(timer);
      timerTxtEl.style.backgroundColor = "red";
      timerTxtEl.style.color = "white";
      timerTxtEl.style.fontWeight = "bold";
    } else {
      //calculates the left minutes and seconds
      var minutes = Math.floor(timerValue / 60);
      var seconds = timerValue % 60;
      //format minutes and seconds to show them with two digits ex. 45:00
      var formatedMinutes = minutes < 10 ? "0" + minutes : minutes;
      var formatedSeconds = seconds < 10 ? "0" + seconds : seconds;
      //update the text in the timer div
      timerTxtEl.textContent = formatedMinutes + ":" + formatedSeconds;
      timerValue -= 1;
    }
  }, 1000);
}

//bellow the functions regard editing the home team data like the score and the shots
//changes the home team score when the user press enter on the home score input element
//--------------------------------------------------------------------------------
//sets the home team name by entering the name in the home team name input element then pressing enter
const homeTeamNameInputEl = document.getElementById("home-team-name-input");
homeTeamNameInputEl.addEventListener("keydown", function (event) {
  if (event.key == "Enter") setHomeTeamName();
});
function setHomeTeamName() {
  homeTeamName = homeTeamNameInputEl.value;
  const homeTeamNameTxtEl = document.getElementById("home-team-name-txt");
  homeTeamNameTxtEl.textContent = homeTeamName;
}
//sets the home team logo or flag
const homeTeamFlagUrlInputEl = document.getElementById(
  "home-team-flag-url-input"
);
homeTeamFlagUrlInputEl.addEventListener("keydown", function (e) {
  e.key == "Enter" && setHomeTeamFlagUrl();
});
function setHomeTeamFlagUrl() {
  var url = homeTeamFlagUrlInputEl.value;
  const homeTeamLogo = document.getElementById("home-team-flag-img");
  homeTeamLogo.src = url;
}
//sets the home team score
const homeScoreInputEl = document.getElementById("home-score-input");
homeScoreInputEl.addEventListener("keydown", function (event) {
  event.key == "Enter" && setHomeScoreVAlue();
});
function setHomeScoreVAlue() {
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

//-------------------------------------------------------------
//bellow the functions regard editing the away team data like the score and the shots
//changes the away team score when the user press enter on the away score input element
//-------------------------------------------------------------
//sets the away team name
const awayTeamNameInputEl = document.getElementById("away-team-name-input");
awayTeamNameInputEl.addEventListener("keydown", function (e) {
  e.key == "Enter" && setAwayTeamName();
});
function setAwayTeamName() {
  var name = awayTeamNameInputEl.value;
  const AwayTeamNameTxtEl = document.getElementById("away-team-name-txt");
  AwayTeamNameTxtEl.textContent = name;
}
//sets the away team flag/logo img url
const awayTeamImgUrlInput = document.getElementById("away-team-flag-url-input");
awayTeamImgUrlInput.addEventListener("keydown", function (e) {
  e.key == "Enter" && setAwayTeamImgUrl();
});
function setAwayTeamImgUrl() {
  var imgUrl = awayTeamImgUrlInput.value;
  const awayTeamImg = document.getElementById("away-team-flag-img");
  awayTeamImg.src = imgUrl;
  console.log(awayTeamImg.src);
}
//sets the away team score
const awayScoreInputEl = document.getElementById("away-score-input");
awayScoreInputEl.addEventListener("keydown", function (event) {
  if (event.key == "Enter") setAwayScoreValue();
});
function setAwayScoreValue() {
  var score = awayScoreInputEl.value;
  if (score < 10) score = "0" + score;
  const awayScoreTxtEl = document.getElementById("away-score");
  awayScoreTxtEl.textContent = score
  console.log(score)
}
//set away team shots
const awayShotsInputEl = document.getElementById("away-shots-input");
awayShotsInputEl.addEventListener("keydown", function (event) {
  if (event.key == "Enter") setAwayShotsValue();
});
function setAwayShotsValue() {
  // console.log(awayShotsInputEl.value)
  var shots =
    awayShotsInputEl.value < 10
      ? "0" + awayShotsInputEl.value
      : awayShotsInputEl.value;
  var awayShotsTxtEl = document.getElementById("away-shots");
  awayShotsTxtEl.textContent = shots;
}
//set away team shots on target
const awayShotsOnTargetInputEl = document.getElementById(
  "away-shots-on-target-input"
);
awayShotsOnTargetInputEl.addEventListener("keydown", function (event) {
  if (event.key == "Enter") setAwayShotsOnTargetValue();
});
function setAwayShotsOnTargetValue() {
  var shotsOnTarget =
    awayShotsOnTargetInputEl.value >= 10
      ? awayShotsOnTargetInputEl.value
      : "0" + awayShotsOnTargetInputEl.value;

  const awayShotsOnTargetTxtEl = document.getElementById(
    "away-shots-on-target"
  );
  awayShotsOnTargetTxtEl.textContent = shotsOnTarget;
}
//set away team posession
const awayPosessionInputEl = document.getElementById("away-posession-input");
awayPosessionInputEl.addEventListener("keydown", function (event) {
  if (event.key == "Enter") setAwayPosessionValue();
});
function setAwayPosessionValue() {
  var posession = awayPosessionInputEl.value;
  // posession = posession < 10 ? "0" + posession : posession;

  const awayPosessionTxtEl = document.getElementById("away-posession");
  awayPosessionTxtEl.textContent = posession + "%";
}
