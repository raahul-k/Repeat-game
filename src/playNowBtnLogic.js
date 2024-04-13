const playNowBtnLogic = () => {
  const landingPage = document.querySelector(".landing");
  const levelPage = document.querySelector(".level");
  const playNowBtn = document.querySelector(".play-now-btn");

  playNowBtn.addEventListener("click", () => {
    console.log(landingPage.classList);
    landingPage.classList.add("hide");
    console.log(landingPage.classList);
    console.log(levelPage.classList);
    levelPage.classList.remove("hide");
    console.log(levelPage.classList);
  });
};

export default playNowBtnLogic;
