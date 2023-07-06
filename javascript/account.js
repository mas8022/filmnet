
///////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////
