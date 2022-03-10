window.addEventListener('load', (event) => {
  window.document.querySelector("#themeItem").addEventListener("click",  () => {
    let colorHolder = window.document.querySelector(":root");
    colorHolder.classList.toggle('changeTheme');
});

  window.document.querySelector(".menuButton").addEventListener("click",  () => {
    let links = window.document.querySelector(".navigation");
    links.classList.toggle('show');
});
});