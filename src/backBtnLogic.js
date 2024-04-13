const backBtnLogic = () => {
  let backBtn = document.querySelectorAll(".back-btn");

  backBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      console.log(index);
      if (index === 0) {
        document.querySelector(".landing").classList.remove("hide");
        document.querySelector(".level").classList.add("hide");
      } else {
        document.querySelector(".level").classList.remove("hide");
        document.querySelector(".arena").classList.add("hide");
      }
    });
  });
};

export default backBtnLogic;
