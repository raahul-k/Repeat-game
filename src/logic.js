const logic = (n, t) => {
  //n: size of matrix, t: number of tiles
  let playAgainBtn = document.querySelector(".play-again-btn");
  let repeatPatternBtn = document.querySelector(".repeat-pattern");
  let backBtn = document.querySelector(".arena-back-btn");
  let gameContainer = document.querySelector(".game-container");
  let winScreen = document.querySelector(".winscreen");
  let emptyProgressBar = document.querySelector(".progress-bar");
  let liveProgressBar = document.querySelector(".live-progress");

  //Logic
  repeatPatternBtn.disabled = true; //Disable the repeat button until the animation plays

  //Keep the winning screen hidden initially
  if (!winScreen.classList.contains("hide")) {
    winScreen.classList.add("hide");
  }

  //Remove all existing tiles (if any) from the game-container
  const removeChildren = (parentClass, childClass) => {
    let parent = document.querySelector(`.${parentClass}`);
    let children = document.querySelectorAll(`.${childClass}`);

    children.forEach((child) => {
      parent.removeChild(child);
    });
  };
  removeChildren("game-container", "tile");

  //Create tiles based on the difficulty level
  //25 for easy
  //36 for medium
  //49 for hard
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const tile = document.createElement("button");
      tile.classList.add("tile");
      gameContainer.appendChild(tile);
    }
  }

  let tiles = document.querySelectorAll(".tile");

  //Arrange the tiles in grid display
  gameContainer.style.display = "grid";
  gameContainer.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  gameContainer.style.gridTemplateRows = `repeat(${n}, 1fr)`;

  //Set the total progress bar width according to the board size
  emptyProgressBar.style.width = `calc(42px * ${n} + 0.3rem * ${n + 2})`;

  //Generate random numbers for tile positions
  function randomNumbers(arraySize, t) {
    const numbers = Array.from({ length: arraySize }, (_, index) => index);

    const result = [];

    for (let i = 0; i < t; i++) {
      const randomNumber = Math.floor(Math.random() * numbers.length);
      const selectedNumber = numbers.splice(randomNumber, 1)[0];
      result.push(selectedNumber);
    }

    return result;
  }

  const positions = randomNumbers(tiles.length, t);

  //Play the animation on start
  let count = -1;
  const playAnimation = async () => {
    repeatPatternBtn.disabled = true;
    tiles.forEach((tile) => {
      tile.style.opacity = "1";
      tile.disabled = true; //Disable the tiles as long as animation is running
    });
    count = -1;
    liveProgressBar.style.width = "0px"; //Reset the live-progress

    for (let i = 0; i < positions.length; i++) {
      setTimeout(() => {
        tiles[positions[i]].classList.add("animation");
      }, (i + 1) * 1000);
    }

    //Remove the animation class from the tiles
    setTimeout(() => {
      for (let i = 0; i < positions.length; i++) {
        if (tiles[positions[i]].classList.contains("animation")) {
          tiles[positions[i]].classList.remove("animation");
        }
      }

      repeatPatternBtn.disabled = false; //Enable the repeat pattern button

      tiles.forEach((tile) => {
        tile.disabled = false; //Enable the tiles again
      });

    }, (positions.length + 1) * 1000);
  };

  const handleClick = async () => {
    tiles.forEach((tile, index) => {
      tile.addEventListener("click", () => {
        console.log(count);
        if (!tile.classList.contains("animation")) {
          tile.classList.add("animation");
          setTimeout(() => {
            tile.classList.remove("animation");
          }, 1500);
        }
        if (index === positions[count + 1]) {
          count++;
          liveProgressBar.style.width =
            (count + 1) * (100 / positions.length) + "%";
        } else {
          count = -1;
          liveProgressBar.style.width = "0px";
        }
        checkWin();
      });
    });
  };

  repeatPatternBtn.addEventListener("click", () => {
    playAnimation();
  });

  //Check for win after each click
  const checkWin = () => {
    if (liveProgressBar.style.width === "100%") {
      //Reduce tile opacity and show the winscreen
      tiles.forEach((tile) => {
        tile.style.opacity = 0.1;
        tile.disabled = true;
      });
      repeatPatternBtn.disabled = true;
      backBtn.disabled = true;
      winScreen.classList.remove("hide");
      console.log("win");
      liveProgressBar.style.width = "0px";
    }
  };

  playAgainBtn.addEventListener("click", () => {
    playAgainLogic();
  });

  const playAgainLogic = () => {
    document.querySelector(".arena").classList.add("hide");
    document.querySelector(".level").classList.remove("hide");
    //Reduce tile opacity and show the winscreen
    tiles.forEach((tile) => {
      tile.style.opacity = "1";
      tile.disabled = true;
    });
    repeatPatternBtn.disabled = true;
    backBtn.disabled = false;
    console.log("win");
    liveProgressBar.style.width = "0px";
  };

  setTimeout(() => {
    tiles.forEach((tile) => {
      tile.addEventListener("mouseover", () => {
        tile.style.cursor = "pointer";
      });
    });
  }, positions.length * 1000);
};

export default logic;
