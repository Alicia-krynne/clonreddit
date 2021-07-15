const appendOptions = (svg, lable, toggle=undefined) => {
  const svgElement = svg 
  let nightModeLable = document.createElement("div")
  nightModeLable.classList.add("night-mode-lable")
  nightModeLable.innerHTML = lable 

  let nightModeToggle = document.createElement("button")
  nightModeToggle.classList.add("night-toggle")
  let nightModeButton = document.createElement("Button")
  nightModeButton.classList.add("toggle-night-mode")
  nightModeButton.innerHTML = svgElement
  nightModeButton.appendChild(nightModeLable)

  if (toggle) {
      nightModeButton.appendChild(nightModeToggle)
      nightModeButton.addEventListener("click", function () {
          let toggleButton = this.querySelector("button")
          let root = document.documentElement;
          if (toggleButton.classList.contains("toggled")) {

              toggleButton.classList.remove("toggled")
              toggleButton.classList.add("night-toggle")
              root.style.setProperty('--headder-background', 'white')
              root.style.setProperty('--svg-color', 'grey')
              root.style.setProperty('--light-grey', 'lightgrey')
              root.style.setProperty('--primary-button-color', 'royalblue')
              root.style.setProperty('--primary-button-hover', 'rgb(42, 87, 223)')
              root.style.setProperty('--default-color', 'black')

          } else {

              toggleButton.classList.add("toggled")
              toggleButton.classList.remove("night-toggle")
              root.style.setProperty('--headder-background', 'black')
              root.style.setProperty('--svg-color', 'lightgrey')
              root.style.setProperty('--light-grey', 'white')
              root.style.setProperty('--primary-button-color', 'lightgrey')
              root.style.setProperty('--primary-button-hover', 'white')
              root.style.setProperty('--default-color', 'white')
          }
          document.querySelectorAll("path").forEach((path) => {
              console.log("class List", path.classList)
              if (!(path.classList.contains("main-logo"))){
                  path.setAttribute("fill", root.style.getPropertyValue("--default-color"))
              }
          })
      })

  }
  return nightModeButton
}

window.addEventListener("load", () => {
let dropDown = document.querySelector(".nav-login-signup-profile .profile")

dropDown.addEventListener("click", function() {
  const classExists = document.querySelector(".profile-drop-down")
  if (classExists) {
      console.log("Removed")
      classExists.remove()
      return
  }


  let dropDownElement = document.createElement("Div")
  dropDownElement.classList.add("profile-drop-down")

  let optionsElement = document.createElement("h3")
  optionsElement.classList.add("options")
  optionsElement.textContent = "view options"
  dropDownElement.appendChild(optionsElement)

  let svgElement = `<svg class="gRVZlDl2ZHFThtPLjYYzD" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><g fill="inherit"><path d="M15.992 14.898A5.014 5.014 0 0 1 12 10a5.014 5.014 0 0 1 3.992-4.899.998.998 0 0 0 .343-1.819A7.965 7.965 0 0 0 12 2c-4.41 0-8 3.588-8 8 0 4.411 3.59 8 8 8a7.966 7.966 0 0 0 4.335-1.283 1 1 0 0 0-.343-1.819"></path></g></svg>`
  let nightModeButton =  appendOptions(svgElement, 'Nigth Mode', toggle=true)
  dropDownElement.appendChild(nightModeButton)

  optionsElement = document.createElement("h3")
  optionsElement.classList.add("options")
  optionsElement.textContent = "more stuff"
  dropDownElement.appendChild(optionsElement)

  svgElement = `<svg class="_2BQPq3iyS8t6kKtFmtkB30 " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,1.5 C14.687,1.5 18.5,5.313 18.5,10 C18.5,14.687 14.687,18.5 10,18.5 C5.314,18.5 1.5,14.687 1.5,10 C1.5,5.313 5.314,1.5 10,1.5 Z M7.879,12.122 C6.709,10.952 6.709,9.049 7.879,7.879 C9.012,6.746 10.988,6.746 12.121,7.879 C12.512,8.269 13.145,8.269 13.535,7.879 C13.926,7.489 13.926,6.855 13.535,6.465 C12.591,5.52 11.336,5 10,5 C8.664,5 7.409,5.52 6.465,6.465 C4.516,8.414 4.516,11.586 6.465,13.536 C7.409,14.48 8.664,15 10,15 C11.336,15 12.591,14.48 13.535,13.536 C13.926,13.145 13.926,12.512 13.535,12.122 C13.145,11.731 12.512,11.731 12.121,12.122 C10.988,13.255 9.012,13.255 7.879,12.122 Z"></path></svg>`
  nightModeButton =  appendOptions(svgElement, 'Reddit Coins <span> 0 coins </span>')
  dropDownElement.appendChild(nightModeButton)

  svgElement = `<svg class="_2BQPq3iyS8t6kKtFmtkB30 " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"></path></svg>`
  nightModeButton =  appendOptions(svgElement, 'Reddit Premium')
  dropDownElement.appendChild(nightModeButton)

  svgElement = `<svg class="_2BQPq3iyS8t6kKtFmtkB30 " viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="inherit" d="M8.622 10.616c.078.08.14.175.183.28.044.105.07.218.07.332 0 .237-.087.456-.253.62-.167.168-.385.255-.622.255-.236 0-.455-.087-.62-.254-.167-.166-.255-.385-.255-.622 0-.114.027-.227.07-.332.044-.105.105-.2.184-.28.087-.088.174-.15.288-.193.324-.13.71-.052.954.193zm-.205-6.242c1.595 0 2.466.807 2.466 1.92 0 .976-.556 1.448-1.238 1.816-.615.317-.83.518-.904.898 0 .004-.034.207-.036.21-.034.126-.087.244-.18.336-.14.14-.323.21-.524.21-.097 0-.192-.017-.29-.052-.087-.035-.165-.088-.235-.158-.14-.14-.22-.333-.22-.533 0-.11.02-.188.074-.348.16-.472.55-.896 1.056-1.17.577-.327.84-.558.84-1.07 0-.42-.357-.715-.987-.715-.496 0-.996.218-1.39.52-.26.2-.62.202-.858-.02l-.05-.05c-.313-.29-.27-.787.075-1.04.603-.444 1.394-.753 2.4-.753zM8 13.25c-2.895 0-5.25-2.355-5.25-5.25S5.105 2.75 8 2.75 13.25 5.105 13.25 8 10.895 13.25 8 13.25M8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7"></path></svg>`
  nightModeButton =  appendOptions(svgElement, 'Help Center <svg class="_1Jtes5zRWNpwobWM4O2Unx" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"></path><path d="M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"></path></svg>')
  dropDownElement.appendChild(nightModeButton)

  svgElement = `<svg class="_2BQPq3iyS8t6kKtFmtkB30 " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="inherit"><path d="M15,2 L5,2 C4.447,2 4,2.447 4,3 L4,9 L9.586,9 L8.293,7.707 C7.902,7.316 7.902,6.684 8.293,6.293 C8.684,5.902 9.316,5.902 9.707,6.293 L12.707,9.293 C13.098,9.684 13.098,10.316 12.707,10.707 L9.707,13.707 C9.512,13.902 9.256,14 9,14 C8.744,14 8.488,13.902 8.293,13.707 C7.902,13.316 7.902,12.684 8.293,12.293 L9.586,11 L4,11 L4,17 C4,17.553 4.447,18 5,18 L15,18 C15.553,18 16,17.553 16,17 L16,3 C16,2.447 15.553,2 15,2"></path></g></svg>`
  nightModeButton =  appendOptions(svgElement, 'Log In/ Sign Up')
  dropDownElement.appendChild(nightModeButton)


  document.body.appendChild(dropDownElement) 
  
  document.querySelectorAll(".toggle-night-mode").forEach((element) => {
      const root = document.documentElement;
      element.addEventListener("mouseover", function() {
          this.querySelectorAll("path").forEach((path) => {
              path.setAttribute("fill", root.style.getPropertyValue("--headder-background"))
          })
      })
      element.addEventListener("mouseout", function() {
          this.querySelectorAll("path").forEach((path) => {
              path.setAttribute("fill", root.style.getPropertyValue("--default-color"))
          })
      })
  })
})


})
