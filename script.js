function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //trocar imagem
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/avatar-lightmode.png")
  } else {
    img.setAttribute("src", "assets/avatar.png")
  }
}