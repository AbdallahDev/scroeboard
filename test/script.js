function setTimer() {
  // Get the input value (interpreted as total minutes for this example)
  var minutesInput = document.getElementById("time").value;
  // Convert minutes to total seconds for easier calculation
  var timeleft = minutesInput * 60;

  var countdownEl = document.getElementById("countdown");

  var downloadTimer = setInterval(function () {
    if (timeleft < 0) {
      clearInterval(downloadTimer);
      //   countdownEl.innerHTML = "Finished";
    } else {
      // Calculate minutes and seconds from remaining total seconds
      var minutes = Math.floor(timeleft / 60);
      var seconds = timeleft % 60;

      // Format seconds to always have two digits (e.g., 05 instead of 5)
      var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

      // Update the display in the format MM:SS
      countdownEl.innerHTML = minutes + ":" + formattedSeconds;
    }
    timeleft -= 1;
  }, 1000);
}
