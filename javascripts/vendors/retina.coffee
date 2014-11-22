---
# Retina
---

#!
# * Retina.js v1.1.0
# *
# * Copyright 2013 Imulus, LLC
# * Released under the MIT license
# *
# * Retina.js is an open source script that makes it easy to serve
# * high-resolution images to devices with retina displays.
#
(->

  # Ensure Content-Type is an image before trying to load @2x image
  # https://github.com/imulus/retinajs/pull/45)
  Retina = ->
  RetinaImagePath = (path, at_2x_path) ->
    @path = path
    if typeof at_2x_path isnt "undefined" and at_2x_path isnt null
      @at_2x_path = at_2x_path
      @perform_check = false
    else
      @at_2x_path = path.replace(/\.\w+$/, (match) ->
        "@2x" + match
      )
      @perform_check = true
    return
  RetinaImage = (el) ->
    @el = el
    @path = new RetinaImagePath(@el.getAttribute("src"), @el.getAttribute("data-at2x"))
    that = this
    @path.check_2x_variant (hasVariant) ->
      that.swap()  if hasVariant
      return

    return
  root = ((if typeof exports is "undefined" then window else exports))
  config = check_mime_type: true
  root.Retina = Retina
  Retina.configure = (options) ->
    options = {}  unless options?
    for prop of options
      continue
    return

  Retina.init = (context) ->
    context = root  unless context?
    existing_onload = context.onload or new Function
    context.onload = ->
      images = document.getElementsByTagName("img")
      retinaImages = []
      i = undefined
      image = undefined
      i = 0
      while i < images.length
        image = images[i]
        retinaImages.push new RetinaImage(image)
        i++
      existing_onload()
      return

    return

  Retina.isRetina = ->
    mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),                      (min--moz-device-pixel-ratio: 1.5),                      (-o-min-device-pixel-ratio: 3/2),                      (min-resolution: 1.5dppx)"
    return true  if root.devicePixelRatio > 1
    return true  if root.matchMedia and root.matchMedia(mediaQuery).matches
    false

  root.RetinaImagePath = RetinaImagePath
  RetinaImagePath.confirmed_paths = []
  RetinaImagePath::is_external = ->
    !!(@path.match(/^https?\:/i) and not @path.match("//" + document.domain))

  RetinaImagePath::check_2x_variant = (callback) ->
    http = undefined
    that = this
    if @is_external()
      callback false
    else if not @perform_check and typeof @at_2x_path isnt "undefined" and @at_2x_path isnt null
      callback true
    else if @at_2x_path of RetinaImagePath.confirmed_paths
      callback true
    else
      http = new XMLHttpRequest
      http.open "HEAD", @at_2x_path
      http.onreadystatechange = ->
        return callback(false)  unless http.readyState is 4
        if http.status >= 200 and http.status <= 399
          if config.check_mime_type
            type = http.getResponseHeader("Content-Type")
            return callback(false)  if not type? or not type.match(/^image/i)
          RetinaImagePath.confirmed_paths.push that.at_2x_path
          callback true
        else
          callback false

      http.send()
    return

  root.RetinaImage = RetinaImage
  RetinaImage::swap = (path) ->
    load = ->
      unless that.el.complete
        setTimeout load, 5
      else
        that.el.setAttribute "width", that.el.offsetWidth
        that.el.setAttribute "height", that.el.offsetHeight
        that.el.setAttribute "src", path
      return
    path = @path.at_2x_path  if typeof path is "undefined"
    that = this
    load()
    return

  Retina.init root  if Retina.isRetina()
  return
)()
