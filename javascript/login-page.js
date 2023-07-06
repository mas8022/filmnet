
////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
let form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    let sexSelect = document.querySelector('.sex-select')
    let firstName = document.querySelector('.first-name')
    let lastName = document.querySelector('.last-name')
    let email = document.querySelector('.email')
    let phoneNumber = document.querySelector('.phone-number')
    let password = document.querySelector('.password')
    let inputs = document.querySelectorAll('.clear')

    if (sexSelect.value) {
        if (isNaN(firstName.value)) {
            if (isNaN(lastName.value)) {
                if (!isNaN(phoneNumber.value)) {
                    if ((password.value.length > 4 && password.value.length < 9)) {
                        localStorage.setItem('login', JSON.stringify('you are login th site'))
                        let newUser = {
                            sex: sexSelect.value,
                            firstName: firstName.value,
                            lastName: lastName.value,
                            email: email.value,
                            phoneNumber: phoneNumber.value,
                            password: password.value,
                        }
                        fetch('https://filmnet-b6d8b-default-rtdb.firebaseio.com/allusers.json', {
                            method: "POST",
                            headers: {
                                "Content-type": "application/json"
                            },
                            body: JSON.stringify(newUser)
                        })
                        .then(res => {
                            console.log(res);
                            inputs.forEach(input => {
                                input.value = ""
                            })
                            document.querySelector('.history-login').style.display = "flex"
                            document.querySelector('.alert-history-login').innerHTML = "ثبت نام شما با موفقیت انجام شده است میتوانید از این بخش خارج شوید"
                        }).catch(res => {
                            document.querySelector('.alert-fetching').innerHTML = " انتقال اطلاعات با مشکل مواجه شده است لطفا اینترنت خود را بررسی کنید"
                        })
                        
                        document.querySelector('.alert-password').style.display = "none"
                    }else{
                        document.querySelector('.alert-password').style.display = "block"
                    }
                    document.querySelector('.alert-phone-number').style.display = "none"
                }else{
                    document.querySelector('.alert-phone-number').style.display = "block"
                }
                document.querySelector('.alert-last-name').style.display = "none"
            }else{
                document.querySelector('.alert-last-name').style.display = "block"
            }
            document.querySelector('.alert-first-name').style.display = "none"
        }else{
            document.querySelector('.alert-first-name').style.display = "block"
        }
    }

})


