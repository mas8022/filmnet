
/////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////
let serialsPagination = document.querySelector(".serials-pagination");
let serialsInPlayingBtn = document.querySelector(".serials-in-playing-btn");
function openSerialsPagination() {
  serialsPagination.style.visibility = "visible";
  serialsPagination.style.opacity = "100%";
}
function closeSerialsPagination() {
  serialsPagination.style.visibility = "hidden";
  serialsPagination.style.opacity = "0%";
}
window.addEventListener("load", openSerialsPagination);
let showSerialPaginationFlex = document.querySelectorAll('.show-serial-pagination-flex')
let newSerialsArray;
let numberPage;
let HmSerial = 0
let SerialPaginationFlex = document.querySelector("#showSerialPaginationFlex")
fetch('https://filmnet-b6d8b-default-rtdb.firebaseio.com/serial.json')
  .then(res => res.json())
  .then(data => {
    let serialFetch = Object.entries(data)
    let HmShowSerial = 9///////////////////////////////////
    let HmNumberPage = (serialFetch.length / HmShowSerial)
    let serialPaginationNumber = document.querySelector('.serial-pagination-number')
    for (let f = 0; f < HmNumberPage; f++) {
      serialPaginationNumber.insertAdjacentHTML("beforeend", `<div>${(f + 1)}</div>`)
    }
    let allNumberPage = document.querySelectorAll('.serial-pagination-number div')
    serialFetch.slice(-HmShowSerial,).forEach(item => {
      showSerialPaginationFlex[0].insertAdjacentHTML("afterbegin", `<a href="./download-page.html?id=${item[1].name}">
      <div class="serial-pagination" style="background: url('${item[1].image}');">
      <div class="hide-cover-serial videos film-in-playing">${item[1].description}</div>
      <h2 class="serial-pagination-name">${item[1].name}</h2>
      <p class="serial-score"><span>${item[1].score}</span>/10</p>
      </div></a>`)
    })
    allNumberPage.forEach(items => {
        items.addEventListener('click', item => {
          allNumberPage.forEach(btn => {
            btn.style.filter = "brightness(100%)"
            btn.style.color = "var(--text-color)"
          })
          item.target.style.filter = "brightness(200%)"
          item.target.style.color = "var(--second-color)"
          

        showSerialPaginationFlex.scrollTop = 0;
        newSerialsArray = []
        showSerialPaginationFlex[0].innerHTML = ""
        numberPage = item.target.innerHTML
        if (((numberPage * -HmShowSerial) + (HmShowSerial)) === 0) {
          newSerialsArray = serialFetch.slice(((numberPage * -HmShowSerial)),)
        }else{
          newSerialsArray = serialFetch.slice(((numberPage * -HmShowSerial)),((numberPage * -HmShowSerial) + (HmShowSerial)))
        }
        console.log(newSerialsArray);
        generatorPaginationVideo(newSerialsArray)
        let SerialPaginationFlex = document.querySelector(".show-serial-pagination-flex")
        SerialPaginationFlex.scrollTop = "0px"
      })
    })
    if (serialFetch) {
      setTimeout(function() {
        var loaderContainer = document.querySelector('.loader-container');
        loaderContainer.style.visibility = 'hidden';
        loaderContainer.style.opacity = '0%';
      },0);
    }
 })

function generatorPaginationVideo(videoFetch) {
  videoFetch.forEach(item => {
    showSerialPaginationFlex[0].insertAdjacentHTML("afterbegin", `<a href="./download-page.html?id=${item[1].name}">
    <div class="serial-pagination" style="background: url('${item[1].image}');">
    <div class="hide-cover-serial videos film-in-playing">${item[1].description}</div>
    <h2 class="serial-pagination-name">${item[1].name}</h2>
    <p class="serial-score"><span>${item[1].score}</span>/10</p>
    </div></a>`)
  })
}


