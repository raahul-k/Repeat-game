const repeatBtnLogic = (cb) => {
  let repeatBtn = document.querySelector(".repeat-pattern");
  repeatBtn.addEventListener("click", () => {
    if (cb) {
      cb();
    }
  });
};

export default repeatBtnLogic;
