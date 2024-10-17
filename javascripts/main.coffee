---
# Main
---

onWindowsLoaded = ->
  document.getElementById('me-more').addEventListener 'mouseenter', formatEmailEvent
  document.getElementById('me-more').addEventListener 'touchstart', formatEmailEvent

  return

formatEmailEvent = (e) ->
  emailElement = document.getElementById('email')
  emailElement.innerHTML = formatEmail(emailElement.innerHTML)

  return

formatEmail = (email) ->
  email.replace('[at]', '@').replace '{.}', '.'

document.addEventListener "DOMContentLoaded", onWindowsLoaded
