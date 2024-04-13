const difficultyLogic = (cb) => {
  const levelBtns = document.querySelectorAll(".diff-level");

  let n, t;

  levelBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      if (index === 0) {
        n = 5;
        t = 4;
      } else if (index === 1) {
        n = 6;
        t = 6;
      } else {
        n = 7;
        t = 8;
      }
      document.querySelector(".level").classList.add("hide");
      document.querySelector(".arena").classList.remove("hide");
      setTimeout(cb(n, t), 1000);
    });
  });
};

export default difficultyLogic;
