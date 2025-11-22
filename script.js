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
