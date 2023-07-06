
////////////////////////////////////////////////////////////////////////
window.addEventListener('load', () => {
  flagThem = JSON.parse(localStorage.getItem('them'))
  if (flagThem) {
    document.documentElement.style.setProperty("--main-color", "#49b6ff")
    document.documentElement.style.setProperty("--second-color", "#00a8e8")
    document.documentElement.style.setProperty("--forth-color", "#5aa9e6")
    document.documentElement.style.setProperty("--third-color", "#031a6b")
    document.documentElement.style.setProperty("--text-color", "snow")
    document.documentElement.style.setProperty("--text2-color", "snow")
    flagThem = false
  }else{
    document.documentElement.style.setProperty("--main-color", "#000")
    document.documentElement.style.setProperty("--second-color", "#f5ad11")
    document.documentElement.style.setProperty("--forth-color", "#000000f9")
    document.documentElement.style.setProperty("--third-color", "#232729")
    document.documentElement.style.setProperty("--text-color", "snow")
    document.documentElement.style.setProperty("--text2-color", "black")
    flagThem = true
  }
})
///////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////
let videoPlayerPage = document.querySelector(".video-player-page");
let videoPlayer = document.querySelector('.video-player')
let locationParam = new URLSearchParams(location.search)
let locationID = locationParam.get("id")
let videoTransfer;
function generateVideoPlayer(videoTransfer) {
  videoPlayerPage.insertAdjacentHTML('beforeend', `

<div>
            <h4 class="alert-how-downloaded">برای دانلود میتوانید سه نقطه در سمت راست  پلیر را بفشارید<h4>
                
              <video
              id="my-video"
              class="video-js"
              controls
              preload="auto"
              width="100%"
              height="100%"
              data-setup="{}"
            >
              <source class="video-player" src="${videoTransfer.url}" type="video/mp4" />
                <a href="https://videojs.com/html5-video-support/" target="_blank"
                  >supports HTML5 video</a
                  >
                  </p>
                  </video>
                  </div>

`)
}

if (locationID) {
  fetch('https://filmnet-b6d8b-default-rtdb.firebaseio.com/serial.json')
  .then(res => res.json())
  .then(data => {
    let serialFetch = Object.entries(data)
    let serialTransfer = serialFetch.find(items => {
      return items[1].name === String(locationID)
    })
    if (serialTransfer) {
      generateVideoPlayer(serialTransfer[1])
      serialTransfer = []
    }else{
    }
  })

  fetch('https://filmnet-b6d8b-default-rtdb.firebaseio.com/film.json')
  .then(res => res.json())
  .then(data => {
    let filmFetch = Object.entries(data)
    let filmTransfer = filmFetch.find(items => {
      return items[1].name === String(locationID)
    })
    if (filmTransfer) {
      generateVideoPlayer(filmTransfer[1])
      filmTransfer = []
    }else{
    }
  })

  fetch('https://filmnet-b6d8b-default-rtdb.firebaseio.com/new film.json')
  .then(res => res.json())
  .then(data => {
    let filmFetch = Object.entries(data)
    let filmTransfer = filmFetch.find(items => {
      return items[1].name === String(locationID)
    })
    if (filmTransfer) {
      generateVideoPlayer(filmTransfer[1])
      filmTransfer = []
    }else{
    }
  })



}


