var encoder = new GIFEncoder()
encoder.setRepeat(0)

// do this repeatedly.
encoder.addFrame(fore_ctx)

encoder.finish()
var data = encoder.stream().getData()
data = btoa(data)
var img = document.createElement('img')
img.src = "data:image/gif;base64, " + data
document.body.appendChild(img)
