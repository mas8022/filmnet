//////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////
// admin info started////////////////
let usernameRegex = "mohammad reza"
let passwordRegex = "12345"
// admin info ended////////////////
///////////////////////////////////////
let form = document.querySelector('form')
let userNameLogged = document.querySelector('.user-name-logged')
let userPasswordLogged = document.querySelector('.user-password-logged')
let clickForm = document.querySelector('.hhhh')
let alertCheckLoginForm = document.querySelector('.alert-check-login-form')

function clearInputs() {
    userNameLogged.value = ""
    userPasswordLogged.value = ""
}


fetch('https://filmnet-b6d8b-default-rtdb.firebaseio.com/allusers.json')
    .then(res => res.json())
    .then(data => {
        let usersFetch = Object.entries(data)

        
              
        clickForm.addEventListener("mouseenter", function (event) {

            

            let isExistUser = usersFetch.filter(item => {
                return (item[1].firstName).toLowerCase().trim() === (userNameLogged.value).toLowerCase().trim() && (item[1].password).trim() === (userPasswordLogged.value).toLowerCase().trim()
            })

            clickForm.addEventListener('click', (e) => {
                if (userNameLogged.value === usernameRegex && userPasswordLogged.value === passwordRegex) {
                    event.target.href = "./cms.html"                    
                }else if (isExistUser.length === 1) {
                    e.target.href = "./bank.html"//لینک درگاه بانکی
                }else{
                    console.log("yes");
                    e.preventDefault()
                    setTimeout(() => {
                        alertCheckLoginForm.style.visibility = "visible"
                        alertCheckLoginForm.style.opacity = "100%" 
                        alertCheckLoginForm.innerHTML = "این نام کاربری و رمز عبور در سامانه موجود نمی باشد لطفا ابتدا ثبت نام کنید"
                    }, 1);
                    setTimeout(() => {
                        alertCheckLoginForm.style.visibility = "hidden"
                        alertCheckLoginForm.style.opacity = "0%"
                        location.reload()
                    }, 4000);
                    clearInputs()
                }
                clearInputs()
            })





            

        }) 

    })
        


        
        
       

        
        
        
        
        
        
        
        
        
        
        







