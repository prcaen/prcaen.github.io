window.onload = onWindowsLoaded();

function onWindowsLoaded() {
  if(document.getElementById("me-more") !== null)
    document.getElementById("me-more").addEventListener("mouseenter", formatEmailEvent, false);
  document.addEventListener("touchstart", formatEmailEvent, false);
}

function formatEmailEvent(e) {
  var emailElement = document.getElementById("email");

  emailElement.innerHTML = formatEmail(emailElement.innerHTML);
  emailElement.href      = formatEmail(emailElement.href);
}

function formatEmail(email) {
  return email.replace("[at]", "@").replace("{.}", ".");
}
