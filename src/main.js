import "../styles/style.css";
import "../styles/components/landing.css";
import "../styles/components/level.css";
import "../styles/components/arena.css";
import "../styles/utils.css";

// import logic from "./logic";
import playNowBtnLogic from "./playNowBtnLogic";
import difficultyLogic from "./difficultyLogic";
import logic from "./logic";
import backBtnLogic from "./backBtnLogic";

playNowBtnLogic();
difficultyLogic(logic);
backBtnLogic();
