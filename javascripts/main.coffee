---
---

onWindowsLoaded = ->
  if document.getElementById('me-more') isnt null
    document.getElementById('me-more').addEventListener 'mouseenter', formatEmailEvent, false

  document.addEventListener 'touchstart', formatEmailEvent, false

  return

formatEmailEvent = (e) ->
  emailElement = document.getElementById('email')
  emailElement.innerHTML = formatEmail(emailElement.innerHTML)
  emailElement.href = formatEmail(emailElement.href)

  return

formatEmail = (email) ->
  email.replace('[at]', '@').replace '{.}', '.'

window.onload = onWindowsLoaded()
