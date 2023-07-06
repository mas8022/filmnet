
////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
let locationParams = new URLSearchParams(location.search)
let locationId = locationParams.get("id")
let momDownloadPage = document.querySelector('.mom-download-page')
let describeVideoTransfer = document.querySelector('.decribte-download-film')
let downloadPageName = document.querySelector('.dowload-page-name p')
let seeOnlineBtn = document.querySelector('#seeOnline')

function pushInfoVideoTransfer(event) {
  momDownloadPage.style.background = `url(${event.image})`
  downloadPageName.innerHTML = event.name
  describeVideoTransfer.innerHTML = event.description
}

////////////////////////////////////////////////////////////////////

fetch('https://filmnet-b6d8b-default-rtdb.firebaseio.com/serial.json')
.then(res => res.json())
.then(data => {
  let serialFetch = Object.entries(data)
  let videoTransfer = serialFetch.find(items => {
    return items[1].name === String(locationId)
  })
  if (videoTransfer) {
    pushInfoVideoTransfer(videoTransfer[1])
    seeOnlineBtn.href = `./video-player.html?id=${videoTransfer[1].name}`
    videoTransfer = []
  }

})


fetch('https://filmnet-b6d8b-default-rtdb.firebaseio.com/film.json')
.then(res => res.json())
.then(data => {
  let filmFetch = Object.entries(data)
  let findFilmFetch = filmFetch.find(item => {
    return item[1].name === locationId
  })
  if (findFilmFetch) {
    pushInfoVideoTransfer(findFilmFetch[1])
    seeOnlineBtn.href = `./video-player.html?id=${findFilmFetch[1].name}`
    findFilmFetch = []
  }
  
})


fetch('https://filmnet-b6d8b-default-rtdb.firebaseio.com/new film.json')
.then(res => res.json())
.then(data => {
  let filmFetch = Object.entries(data)
  let findFilmFetch = filmFetch.find(item => {
    return item[1].name === locationId
  })
  if (findFilmFetch) {
    pushInfoVideoTransfer(findFilmFetch[1])
    seeOnlineBtn.href = `./video-player.html?id=${findFilmFetch[1].name}`
    findFilmFetch = []
  }
  
})


