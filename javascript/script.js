let loaderContainerAlert = document.querySelector('.loader-container h3')
window.addEventListener('load', () => {
  setTimeout(() => {
    loaderContainerAlert.style.visibility = "visible"
    loaderContainerAlert.style.opacity = "100%"
  },3000);
})
///////////////////////////////////////////////////////////////////////
let locationParams = new URLSearchParams(location.search)
let locationId = locationParams.get("id")
if (locationId == "sign up") {
  document.querySelector('.login').style.display = "none"
  document.querySelector('.account').style.marginRight = "4.5rem"
}
/////////////////////////////////////////////////////////////////
let darkMoodBtn = document.querySelector('#darkMoodBtn')
let flagThem = true;
darkMoodBtn.addEventListener('click', () => {
  localStorage.setItem('them', JSON.stringify(flagThem))
  if (flagThem) {
    document.documentElement.style.setProperty("--main-color", "#49b6ff")
    document.documentElement.style.setProperty("--second-color", "#00a8e8")
    document.documentElement.style.setProperty("--forth-color", "#5aa9e6")
    document.documentElement.style.setProperty("--third-color", "#031a6b")
    document.documentElement.style.setProperty("--text-color", "snow")
    document.documentElement.style.setProperty("--text2-color", "snow")
    flagThem = false
    darkMoodBtn.style.backgroundColor = "#00a8e8"
  }else{
    document.documentElement.style.setProperty("--main-color", "#000")
    document.documentElement.style.setProperty("--second-color", "#f5ad11")
    document.documentElement.style.setProperty("--forth-color", "#000000f9")
    document.documentElement.style.setProperty("--third-color", "#232729")
    document.documentElement.style.setProperty("--text-color", "snow")
    document.documentElement.style.setProperty("--text2-color", "black")
    flagThem = true
    darkMoodBtn.style.backgroundColor = "#f5ad11"
  }
})
///////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////
let loginBtn = document.querySelector('.login')
window.addEventListener('load', () => {
  let isLogin = JSON.parse(localStorage.getItem('login'))
  if (isLogin) {
    loginBtn.style.display = "none"
  }
})
/////////////////////////////////////////////////////////////////////////////////////
let searchBtnNav = document.querySelector(".search-btn-nav");
let hideSearchBarInput = document.querySelector(".hide-search-bar-input");
function clearSearchBarWithTagA() {
  hideSearchBarInput.value = ""
  
}
searchBtnNav.addEventListener('click', () => {
  setTimeout(() => {
    clearSearchBarWithTagA()
    hideSearchBarInput.focus()
  }, 500);
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let gridSerialsInPlaying = document.querySelector(".grid-serials-in-playing");
fetch('https://filmnet-b6d8b-default-rtdb.firebaseio.com/serial.json')
.then(res => res.json())
.then(data => {
  let serialGetFetch = Object.entries(data)
  serialGetFetch.slice(-8,).forEach(item => {
    gridSerialsInPlaying.insertAdjacentHTML(
      "beforeend",
      `<a href="./download-page.html" data-aos="fade-up" onclick="clearSearchBarWithTagA"><div transferSerialPaginationInfo(event) class="serials videos" style="background: url(${item[1].image});">
      <div class="hover-describe-film">
      <p>${item[1].description}</p>
      </div>
      <h2>${item[1].name}</h2>
      <p><span>${item[1].score}</span>/10</p>
      </div></a>`
    )
  })
  let hoverDescribeFilm = document.querySelectorAll(".hover-describe-film");
  hoverDescribeFilm.forEach(function (item) {
    item.addEventListener("mouseenter", function (event) {
      event.target.style.opacity = "100%";
      event.target.parentElement.parentElement.href = `./download-page.html?id=${event.target.parentElement.children[1].innerHTML}`
    });
    item.addEventListener("mouseleave", function (event) {
      event.target.style.opacity = "0%";
    });
  });
})
/////////////////////////////////////////////////////////////////////////////
let showScrollFilm = document.querySelector(".show-scroll-film");
let showFilmName = document.querySelector(".show-film-name");
let showScore = document.querySelector(".show-score");
let descriptionFilm = document.querySelector(".discrition-film");
let owlSlider = document.querySelector(".owl-carousel");
fetch('https://filmnet-b6d8b-default-rtdb.firebaseio.com/new film.json')
.then(res => res.json())
.then(data => {
  let filmScrollFetch = Object.entries(data)
  filmScrollFetch.forEach(function (film) {
    owlSlider.insertAdjacentHTML(
      "beforeend",
      `
      <div class="item film" onclick='infoClick(event)' style="background: url('${film[1].image}');">
      <h2>${film[1].name}</h2>
      <h4><span>${film[1].score}</span>/10</h4>
      <p class="hide-desc">${film[1].description}</p>
      <img src="${film[1].wallPaper}" class="link-hide"></img>
      </div>
      `
      );
  });
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });

  if (filmScrollFetch) {
    setTimeout(function() {
      var loaderContainer = document.querySelector('.loader-container');
      loaderContainer.style.visibility = 'hidden';
      loaderContainer.style.opacity = '0%';
    },0);
  }
})
window.addEventListener('load', firstFilmShow)
function firstFilmShow() {

  fetch('https://filmnet-b6d8b-default-rtdb.firebaseio.com/new film.json')
  .then(res => res.json())
  .then(data => {
    let filmScrollFetch = Object.entries(data)
    let seeBtn = document.querySelector('#downloadfilmBtn')
    seeBtn.href = `./download-page.html?id=${filmScrollFetch.slice(-2,-1)[0][1].name}`
    showScrollFilm.style.background = `url("${filmScrollFetch.slice(-2,-1)[0][1].image}")`;
    showFilmName.innerHTML = filmScrollFetch.slice(-2,-1)[0][1].name;
    showScore.innerHTML = filmScrollFetch.slice(-2,-1)[0][1].score;
    descriptionFilm.innerHTML = filmScrollFetch.slice(-2,-1)[0][1].description;
  })
}
function infoClick(event) {
  fetch('https://filmnet-b6d8b-default-rtdb.firebaseio.com/new film.json')
  .then(res => res.json())
  .then(data => {
    let filmScrollFetch = Object.entries(data)

    let filmFind = filmScrollFetch.find(item => {
      return item[1].name === event.target.children[0].innerHTML
    })
    showScrollFilm.style.background = `url("${filmFind[1].image}")`;
    showFilmName.innerHTML = filmFind[1].name;
    showScore.innerHTML = filmFind[1].score;
    descriptionFilm.innerHTML = filmFind[1].description;
    console.log(filmFind);    
  })
}

////////////////////////////////////////////////////////////////////////
let hideSearchBar = document.querySelector(".hide-search-bar");
let searchHideBtnNav = document.querySelector(".search-hide-btn-nav");
let seriales = document.querySelector(".seriales");
let filmBtn = document.querySelector(".film-btn");
let footerBtn = document.querySelector(".footer-btn");
let homeBtn = document.querySelector(".home-btn");
function hoverSearchBarCome() {
  hideSearchBar.style.left = "3rem";
  hideSearchBar.style.visibility = "visible";
  hideSearchBar.style.opacity = "100%";
}
function hoverSearchBarExist() {
  hideSearchBar.style.left = "-40rem";
  hideSearchBar.style.visibility = "hidden";
  hideSearchBar.style.opacity = "0%";
}
searchBtnNav.addEventListener("click", function () {
  hoverSearchBarCome()
});
searchHideBtnNav.addEventListener("click", function () {
  hoverSearchBarExist()
});
hideSearchBarInput.addEventListener("blur", function () {
  hoverSearchBarExist()
  closesuggestionSearchBar()
});
hideSearchBarInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    hoverSearchBarExist()
    
    closesuggestionSearchBar()
  }
});
seriales.addEventListener("click", function () {
  hoverSearchBarExist();
  accountPageExist();
  downloadPageExist();
});
filmBtn.addEventListener("click", function () {
  hoverSearchBarExist();
  accountPageExist();
  downloadPageExist();
});
footerBtn.addEventListener("click", function () {
  hoverSearchBarExist();
  accountPageExist();
  downloadPageExist();
});
homeBtn.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
  hoverSearchBarExist();
  accountPageExist();
  downloadPageExist();
});
////////////////////////////////////////////////
let flexFilmsInPlaying = document.querySelector(".grid-films-in-playing");
fetch('https://filmnet-b6d8b-default-rtdb.firebaseio.com/film.json')
.then(res => res.json())
.then(data => {
  let filmFetch = Object.entries(data)
  filmFetch.slice(-8,).forEach(item => {
    flexFilmsInPlaying.insertAdjacentHTML(
      "beforeend",
      `<a href="./download-page.html" data-aos="fade-up">
      <div class="film-in-playing videos" style="background: url('${item[1].image}')">
      <div class="hover-describe-on-film">
      <p class="describe-hide-for-film">${item[1].description}</p>
      </div>
      <h2>${item[1].name}</h2>
      <p><span>${item[1].score}</span>/10</p>
      </div>
      </a>`
    );
  })
  let filmesInPlaying = document.querySelectorAll(".film-in-playing");
  filmesInPlaying.forEach(function (item) {
    item.children[0].addEventListener("mouseenter", function (event) {
      event.target.style.opacity = "100%";
      event.target.parentElement.parentElement.href = `./download-page.html?id=${event.target.parentElement.children[1].innerHTML}`
    });
    item.children[0].addEventListener("mouseleave", function (event) {
      event.target.style.opacity = "0%";
    });
  });
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let videosArray = document.querySelectorAll('.videos')
let newVideo = []
videosArray.forEach(video => {
  video.addEventListener('mouseenter', event => {
    newVideo = []
    newVideo = serialsArray.find(item => {
      return item.name = event.target.children[1].innerHTML
    })
    event.target.parentElement.href = `./download-page.html?id=${newVideo.name}`
  })
})
///////////////////////////////////////////////////////////////////////////////////////
let sliders = document.querySelectorAll(".wrapper button");
let content;
let contents = document.querySelectorAll(".content");
let icons = document.querySelectorAll(".icon");
function closeSlider() {
  for (let i = 0; i < sliders.length; i++) {
    icons[i].classList.remove("fa-minus");
    icons[i].classList.add("fa-plus");
    contents[i].style.height = "0px";
  }
}
sliders.forEach((slider) => {
  slider.addEventListener("click", function (event) {
    content = event.target.parentElement.children[1];
    
    if (Number(content.style.height.slice(0, -2)) === 0) {
      closeSlider();
      console.log("open");
      content.style.height = content.scrollHeight + "px";
      event.target.children[0].classList.add("fa-minus");
    } else {
      closeSlider();
      console.log("close");
      content.style.height = "0px";
      event.target.children[0].classList.add("fa-plus");
    }
  });
});
window.addEventListener("click", e => {
  if (!document.querySelector('.frequently-asked>div').contains(e.target)) {
    closeSlider()
  }
})
/////////////////////////////////////////////////////////////////
icons.forEach((icon) => {
  icon.addEventListener("click", function (event) {
    content = event.target.parentElement.parentElement.children[1];
    
    if (Number(content.style.height.slice(0, -2)) === 0) {
      closeSlider();
      console.log("open");
      content.style.height = content.scrollHeight + "px";
      event.target.classList.add("fa-minus");
    } else {
      closeSlider();
      console.log("close");
      content.style.height = "0px";
      event.target.classList.add("fa-plus");
    }
  });
});
////////////////////////////////////////////////////////////////////////////////
let loginingClick = document.querySelector(".logining-click");
let btnsNav = document.querySelector(".btns-nav");
let loginForm = document.querySelector(".form-logging");
let account = document.querySelector(".account");

if (loginForm) {
  loginForm.addEventListener("click", function (event) {
    event.preventDefault();
  });
}
if (loginingClick) {
  loginingClick.addEventListener("click", () => {
    account.style.width = "10rem";
    loginBtn.style.display = "none";
    btnsNav.style.width = "17rem";
    btnsNav.style.marginRight = "44rem";
  });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let filmspagination = document.querySelector(".films-pagination");
let filmsInPlayingBtn = document.querySelector(".films-in-playing-btn");
function openFilmsPagination() {
  filmspagination.style.visibility = "visible";
  filmspagination.style.opacity = "100%";
}
function closeFilmsPagination() {
  filmspagination.style.visibility = "hidden";
  filmspagination.style.opacity = "0%";
}
filmsInPlayingBtn.addEventListener("click", openFilmsPagination);
let showFilmPaginationFlex = document.querySelectorAll('.show-film-pagination-flex')
let newfilmsArray;
let numberPages;
let HmFilms = 0
let HmShowfilm = 12///////////////////////////////////
let HmNumberPages = (HmFilms / HmShowfilm)
let filmPaginationNumber = document.querySelector('.film-pagination-number')
if (filmPaginationNumber) {
  for (let g = 0; g < HmNumberPages; g++) {
    filmPaginationNumber.insertAdjacentHTML("beforeend", `<div>${(g + 1)}</div>`)
  }
}
let allNumberPages = document.querySelectorAll('.film-pagination-number div')
let filmPaginationFlex = document.querySelector("#showFilmPaginationFlex")
allNumberPages.forEach(buttons => {
  buttons.addEventListener('click', () => {
    filmPaginationFlex.scrollTop = 0;
  })
})
function transferFilmPaginationInfo(event) {
  let nameSeTra = event.target.parentElement.children[1].innerHTML
  let findSeTrObje = filmsArray.find(item => {
    return item.name === nameSeTra
  })
  downloadPageName.innerHTML = findSeTrObje.name
  describeDownloadFilm.innerHTML = findSeTrObje.description
  momDownloadPage.style.background = `url(${findSeTrObje.image})`
}
//////////////////////////////////////////////////////////////////////////////////
let suggestionSearchBar = document.querySelector('.suggestion')
let filmsSegestionArray = []
function closesuggestionSearchBar() {
  suggestionSearchBar.style.visibility = "hidden"
  suggestionSearchBar.style.opacity = "0%"
}
hideSearchBarInput.addEventListener("keyup", (e) => {
  suggestionSearchBar.innerHTML = ""
  let allVideosFetch = []
  fetch('https://filmnet-b6d8b-default-rtdb.firebaseio.com/all videos.json')
  .then(res => res.json())
  .then(data => {
    allVideosFetch = Object.entries(data)
    let filmsSegArray = allVideosFetch.filter(item => {
      return item[1].name.toLowerCase().trim().includes( hideSearchBarInput.value.toLowerCase().trim())
    })
    console.log(filmsSegArray);
    if (hideSearchBarInput.value) {
      if (filmsSegArray) {
        suggestionSearchBar.style.visibility = "visible"
        suggestionSearchBar.style.opacity = "100%"
        filmsSegArray.forEach(items => {
          suggestionSearchBar.insertAdjacentHTML('beforeend', `<a class="seg-video" href="./download-page.html?id=${items[1].name}">
          <div onmouseenter="transferFilmInfoFromsuggestionSearchBar(event)">${items[1].name}</div>
          </a>`)
        })
      }
    }else{
      closesuggestionSearchBar()
    }
  })
})
document.documentElement.addEventListener('click', (event) => {
  if (!suggestionSearchBar.contains(event.target)) {
    closesuggestionSearchBar()
  }
})
////////////////////////////////////////////////////////////////
let homeBtnBottomNav = document.querySelector('.home-btn-bottom-nav')
homeBtnBottomNav.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
  downloadPageExist()
})
/////////////////////////////////////////////////////////////////////
function transferFilmInfoFromsuggestionSearchBar(event) {
  console.log(event.target.innerHTML);
  event.target.parentElement.href = `./download-page.html?id=${event.target.innerHTML}`
}
hideSearchBarInput.addEventListener('keyup', () => {
  let segVideos = document.querySelectorAll(".seg-video")
  transferFilmInfoFromsuggestionSearchBar()
})
//////////////////////////////////////////////////////////////////
let downloadFilmBtn = document.querySelector('.downloadfilm-btn')
downloadFilmBtn.addEventListener('mouseenter', (e) => {
  fetch('https://filmnet-b6d8b-default-rtdb.firebaseio.com/new film.json')
  .then(res => res.json())
  .then(data => {
    let filmFetches = Object.entries(data)
    let filmFetchTr = filmFetches.find(item => {
      return item[1].name === e.target.parentElement.children[0].innerHTML
    })
    e.target.href = `./download-page.html?id=${filmFetchTr[1].name}`
  })
})