
///////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
let cmsForm = document.querySelector('.cms-form')
let idVideo = document.querySelector('.id-video')
let nameVideo = document.querySelector('.name-video')
let scoreVideo = document.querySelector('.score-video')
let imageVideo = document.querySelector('.image-video')
let describeVideo = document.querySelector('.describe-video')
let urlVideo = document.querySelector('.url-video')
let btn = document.querySelector('.btn-cms')
let alertText = document.querySelector(".cms-form p")
let inputsForm = document.querySelectorAll(".clear-input")
let pushArrayBtn = document.querySelectorAll('#pushNewFilm, #pushFilm, #pushSerial')
let selector;

function fetching(selectArray) {
    
    if (cmsForm) {
        cmsForm.addEventListener('submit', (e) => {
            e.preventDefault()

            let newVideo = {
                name: nameVideo.value,
                score: scoreVideo.value,
                image: imageVideo.value,
                description: describeVideo.value,
                url: urlVideo.value,
            };
            if (nameVideo.value && scoreVideo.value && imageVideo.value && describeVideo.value && urlVideo.value) {


                fetch(`https://filmnet-b6d8b-default-rtdb.firebaseio.com/${selectArray}.json`, {
                    method: "POST",
                    headers: {
                     "Content-type": "application/json"
                    },
                    body: JSON.stringify(newVideo)
                }).then(res => {
                    location.reload()
                }).catch(() => {
                    setTimeout(() => {
                        alertText.innerHTML = " انتقال اطلاعات با مشکل مواجه شده است لطفا اینترنت خود را بررسی کنید"
                        alertText.style.color = "red"
                        alertText.style.opacity = "100%"
                    }, 1);
                    setTimeout(() => {
                        alertText.style.opacity = "0%"
                    }, 10000);
                })

                fetch(`https://filmnet-b6d8b-default-rtdb.firebaseio.com/all videos.json`, {
                    method: "POST",
                    headers: {
                     "Content-type": "application/json"
                    },
                    body: JSON.stringify(newVideo)
                }).then(res => {
                    location.reload()
                }).catch(() => {
                    setTimeout(() => {
                        alertText.innerHTML = " انتقال اطلاعات با مشکل مواجه شده است لطفا اینترنت خود را بررسی کنید"
                        alertText.style.color = "red"
                        alertText.style.opacity = "100%"
                    }, 1);
                    setTimeout(() => {
                        alertText.style.opacity = "0%"
                    }, 10000);
                })
            }else{
                setTimeout(() => {
                    alertText.innerHTML = "لطفا اطلاعات را کامل وارد کنید"
                    alertText.style.color = "red"
                    alertText.style.opacity = "100%"
                }, 1);
                setTimeout(() => {
                    alertText.style.opacity = "0%"
                }, 3000);
            }

        })
    }


}

pushArrayBtn.forEach(item => {
    item.addEventListener('click', btn => {
        

        let selectArray = btn.target.innerHTML
        if (selectArray) {
            fetching(selectArray)
        }
        
    })
})


