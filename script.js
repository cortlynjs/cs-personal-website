function showDateTime() {
  var dateTime = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
  var formattedDateTime = dateTime.toLocaleDateString('en-US', options);
  document.getElementById("datetime").innerHTML = formattedDateTime;
}

setInterval(showDateTime, 1000);
