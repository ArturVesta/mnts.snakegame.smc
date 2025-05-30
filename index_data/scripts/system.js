const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controls = document.querySelectorAll(".controls i");
let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 5;
let velocityX = 0, velocityY = 0;
let snakeBody = [];
let setIntervalId;
// Scores
let score = 0;
let meaw_token_item = localStorage.getItem("meawTockenStorage") || 0;
let gold_item = localStorage.getItem("goldStorage") || 0;
let alpha_coin_item = localStorage.getItem("alphaCoinStorage") || 0;
let crystal_item = localStorage.getItem("crystalStorage") || 0;
let ticket_item = localStorage.getItem("ticketStorage") || 0;
let ticket_chromatic_item = localStorage.getItem("ticketChromaticStorage") || 0;
let ticket_premium_item = localStorage.getItem("ticketPremiumStorage") || 0;
// End scores
let highScore = localStorage.getItem("high-score") || 0;
if(localStorage.getItem("lang") === "en") {
  highScoreElement.innerText = `High Score: ${highScore}`;
}else
if(localStorage.getItem("lang") === "ru") {
  highScoreElement.innerText = `Высокий счет: ${highScore}`;
}else
if(localStorage.getItem("lang") === "jp") {
  highScoreElement.innerText = `ハイスコ​​ア: ${highScore}`;
}else
if(localStorage.getItem("lang") === "chs") {
  highScoreElement.innerText = `高分： ${highScore}`;
}else
if(localStorage.getItem("lang") === "cht") {
  highScoreElement.innerText = `高分： ${highScore}`;
}else
if(localStorage.getItem("lang") === "ko") {
  highScoreElement.innerText = `높은 점수: ${highScore}`;
}
const updateFoodPosition = () => {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
}
const handleGameOver = () => {
  document.getElementById("loseModal").style.display = "block";
  document.getElementById("loseScore").innerHTML = scoreElement.innerText;
  updateFoodPosition();
  if(score <= localStorage.getItem("steelScore")) {
    document.getElementById("loseNewRecordScore").innerHTML = "";
  }else
  if(score === localStorage.getItem("steelScore")) {
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("loseNewRecordScore").innerHTML = "So close to a new record!";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("loseNewRecordScore").innerHTML = "Так близко к новому рекорду!";
    }else
    if(localStorage.getItem("lang") === "jp") {
      document.getElementById("loseNewRecordScore").innerHTML = "新記録にかなり近づいています!";
    }else
    if(localStorage.getItem("lang") === "chs") {
      document.getElementById("loseNewRecordScore").innerHTML = "距离新纪录仅一步之遥！";
    }else
    if(localStorage.getItem("lang") === "cht") {
      document.getElementById("loseNewRecordScore").innerHTML = "距離新紀錄只有一步之遙！";
    }else
    if(localStorage.getItem("lang") === "ko") {
      document.getElementById("loseNewRecordScore").innerHTML = "새로운 기록에 정말 가까워요!";
    }
  }else
  if(score >= localStorage.getItem("steelScore")) {
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("loseNewRecordScore").innerHTML = "Congrats, you achieved a new record!";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("loseNewRecordScore").innerHTML = "Поздравляем, вы установили новый рекорд!";
    }else
    if(localStorage.getItem("lang") === "jp") {
      document.getElementById("loseNewRecordScore").innerHTML = "おめでとうございます、新記録を達成しました！";
    }else
    if(localStorage.getItem("lang") === "chs") {
      document.getElementById("loseNewRecordScore").innerHTML = "恭喜您，创造了新纪录！";
    }else
    if(localStorage.getItem("lang") === "cht") {
      document.getElementById("loseNewRecordScore").innerHTML = "恭喜您，創造了新紀錄！";
    }else
    if(localStorage.getItem("lang") === "ko") {
      document.getElementById("loseNewRecordScore").innerHTML = "축하합니다! 새로운 기록을 달성했습니다!";
    }
  }
  if(localStorage.getItem("movementbg") === "playerWalk") {
    document.getElementById("playerWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "alboradaWalk") {
    document.getElementById("alboradaWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "andromedaWalk") {
    document.getElementById("andromedaWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "arthurWalk") {
    document.getElementById("arthurWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "auroraWalk") {
    document.getElementById("auroraWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "boltusWalk") {
    document.getElementById("boltusWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "caramelWalk") {
    document.getElementById("caramelWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "doomlightlWalk") {
    document.getElementById("doomlightlWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "firefoxWalk") {
    document.getElementById("firefoxWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "firestarWalk") {
    document.getElementById("firestarWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "flamencoWalk") {
    document.getElementById("flamencoWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "gabrielWalk") {
    document.getElementById("gabrielWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "hotsteelWalk") {
    document.getElementById("hotsteelWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "hurricaneWalk") {
    document.getElementById("hurricaneWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "jojoWalk") {
    document.getElementById("jojoWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "michaelWalk") {
    document.getElementById("michaelWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "neutronWalk") {
    document.getElementById("neutronWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "northernWalk") {
    document.getElementById("northernWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "pulsarWalk") {
    document.getElementById("pulsarWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "rangerWalk") {
    document.getElementById("rangerWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "ravenWalk") {
    document.getElementById("ravenWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "skylarkWalk") {
    document.getElementById("skylarkWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "snowWalk") {
    document.getElementById("snowWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "trioWalk") {
    document.getElementById("trioWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "ventorusWalk") {
    document.getElementById("ventorusWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "deathKnellWalk") {
    document.getElementById("deathKnellWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "dreadwolfWalk") {
    document.getElementById("dreadwolfWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "gaialWalk") {
    document.getElementById("gaialWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "guerillaHunterWalk") {
    document.getElementById("guerillaHunterWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "lancelotWalk") {
    document.getElementById("lancelotWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "moonRabbitWalk") {
    document.getElementById("moonRabbitWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "nebulaWalk") {
    document.getElementById("nebulaWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "shiranuikWalk") {
    document.getElementById("shiranuikWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "skyfireWalk") {
    document.getElementById("skyfireWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "twilightWalk") {
    document.getElementById("twilightWalk").pause();
  }
};
document.getElementById("reset").onclick = function() {
  closeModalSound();
  document.getElementById("loseModal").style.display = "none";
  gameOver = false;
  foodX, foodY;
  snakeX = 5, snakeY = 5;
  velocityX = 0, velocityY = 0;
  snakeBody = [];
  setIntervalId;
  score = 0;
  if(localStorage.getItem("lang") === "en") {
    scoreElement.innerText = `Score: ${score}`;
  }else
  if(localStorage.getItem("lang") === "ru") {
    scoreElement.innerText = `Счет: ${score}`;
  }else
  if(localStorage.getItem("lang") === "jp") {
    scoreElement.innerText = `チェック： ${score}`;
  }else
  if(localStorage.getItem("lang") === "chs") {
    scoreElement.innerText = `分数： ${score}`;
  }else
  if(localStorage.getItem("lang") === "cht") {
    scoreElement.innerText = `分數： ${score}`;
  }else
  if(localStorage.getItem("lang") === "ko") {
    scoreElement.innerText = `점수: ${score}`;
  };
  localStorage.setItem("steelScore", localStorage.getItem("high-score"));
};
const changeDirection = e => {
  if(e.key === "ArrowUp" && velocityY != 1) {
    velocityX = 0;
    velocityY = -1;
    if(document.getElementById("chechboxPausing").checked === false) {
      playActiveMoveSound();
    }else{
      return false;
    }
  } else if(e.key === "ArrowDown" && velocityY != -1) {
    velocityX = 0;
    velocityY = 1;
    if(document.getElementById("chechboxPausing").checked === false) {
      playActiveMoveSound();
    }else{
      return false;
    }
  } else if(e.key === "ArrowLeft" && velocityX != 1) {
    velocityX = -1;
    velocityY = 0;
    if(document.getElementById("chechboxPausing").checked === false) {
      playActiveMoveSound();
    }else{
      return false;
    }
  } else if(e.key === "ArrowRight" && velocityX != -1) {
    velocityX = 1;
    velocityY = 0;
    if(document.getElementById("chechboxPausing").checked === false) {
      playActiveMoveSound();
    }else{
      return false;
    }
  } else if(e.key === "ArrowUp" && velocityY != 1) {
    velocityX = 0;
    velocityY = -1;
    if(document.getElementById("chechboxPausing").checked === false) {
      playActiveMoveSound();
    }else{
      return false;
    }
  } else if(e.key === "ArrowDown" && velocityY != -1) {
    velocityX = 0;
    velocityY = 1;
    if(document.getElementById("chechboxPausing").checked === false) {
      playActiveMoveSound();
    }else{
      return false;
    }
  } else if(e.key === "ArrowLeft" && velocityX != 1) {
    velocityX = -1;
    velocityY = 0;
    if(document.getElementById("chechboxPausing").checked === false) {
      playActiveMoveSound();
    }else{
      return false;
    }
  } else if(e.key === "ArrowRight" && velocityX != -1) {
    velocityX = 1;
    velocityY = 0;
    if(document.getElementById("chechboxPausing").checked === false) {
      playActiveMoveSound();
    }else{
      return false;
    }
  }
}
controls.forEach(button => button.addEventListener("click", () => changeDirection({ key: button.dataset.key })));
const initGame = () => {
  if(gameOver) return handleGameOver();
  let html = `<div class="food ` + localStorage.getItem("reapitfood") + `" style="grid-area: ${foodY} / ${foodX}"></div>`;
  if(snakeX === foodX && snakeY === foodY) {
    updateFoodPosition();
    playCollectItem();
    snakeBody.push([foodY, foodX]);
    score++;
    highScore = score >= highScore ? score : highScore;
    localStorage.setItem("high-score", highScore);
    if(localStorage.getItem("lang") === "en") {
      scoreElement.innerText = `Score: ${score}`;
      highScoreElement.innerText = `High Score: ${highScore}`;
    }else
    if(localStorage.getItem("lang") === "ru") {
      scoreElement.innerText = `Счет: ${score}`;
      highScoreElement.innerText = `Высокий счет: ${highScore}`;
    }else
    if(localStorage.getItem("lang") === "jp") {
      scoreElement.innerText = `チェック： ${score}`;
      highScoreElement.innerText = `ハイスコ​​ア: ${highScore}`;
    }else
    if(localStorage.getItem("lang") === "chs") {
      scoreElement.innerText = `分数： ${score}`;
      highScoreElement.innerText = `高分： ${highScore}`;
    }else
    if(localStorage.getItem("lang") === "cht") {
      scoreElement.innerText = `分數： ${score}`;
      highScoreElement.innerText = `高分： ${highScore}`;
    }else
    if(localStorage.getItem("lang") === "ko") {
      scoreElement.innerText = `점수: ${score}`;
      highScoreElement.innerText = `높은 점수: ${highScore}`;
    }
    if(localStorage.getItem("foodStyle") === "imgMeow") {
      meaw_token_item++;
      document.getElementById("collectedMeow").innerHTML = meaw_token_item;
      localStorage.setItem("meawTockenStorage", meaw_token_item);
    }else
    if(localStorage.getItem("foodStyle") === "imgGold") {
      gold_item++;
      document.getElementById("collectedGold").innerHTML = gold_item;
      localStorage.setItem("goldStorage", gold_item);
    }else
    if(localStorage.getItem("foodStyle") === "imgAlphacoin") {
      alpha_coin_item++;
      document.getElementById("collectedAlphacoin").innerHTML = alpha_coin_item;
      localStorage.setItem("alphaCoinStorage", alpha_coin_item);
    }else
    if(localStorage.getItem("foodStyle") === "imgCrystal") {
      crystal_item++;
      document.getElementById("collectedCrystal").innerHTML = crystal_item;
      localStorage.setItem("crystalStorage", crystal_item);
    }else
    if(localStorage.getItem("foodStyle") === "imgTicket") {
      ticket_item++;
      document.getElementById("collectedTicket").innerHTML = ticket_item;
      localStorage.setItem("ticketStorage", ticket_item);
    }else
    if(localStorage.getItem("foodStyle") === "imgCticket") {
      ticket_chromatic_item++;
      document.getElementById("collectedCticket").innerHTML = ticket_chromatic_item;
      localStorage.setItem("ticketChromaticStorage", ticket_chromatic_item);
    }else
    if(localStorage.getItem("foodStyle") === "imgPticket") {
      ticket_premium_item++;
      document.getElementById("collectedPticket").innerHTML = ticket_premium_item;
      localStorage.setItem("ticketPremiumStorage", ticket_premium_item);
    }
  }
  snakeX += velocityX;
  snakeY += velocityY;
  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }
  snakeBody[0] = [snakeX, snakeY];
  if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
    return gameOver = true;
  }
  for (let i = 0; i < snakeBody.length; i++) {
    html += `<div class="head ` + localStorage.getItem("number") + `" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
    if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
      gameOver = true;
    }
  }
  playBoard.innerHTML = html;
  levelsSystem();
  leagueSystem();
}
updateFoodPosition();
if(localStorage.getItem("difficulty") === "normal") {
  setIntervalId = setInterval(initGame, 140);
  if(localStorage.getItem("movementbg") === "playerWalk") {
    document.getElementById("playerWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "alboradaWalk") {
    document.getElementById("alboradaWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "andromedaWalk") {
    document.getElementById("andromedaWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "arthurWalk") {
    document.getElementById("arthurWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "auroraWalk") {
    document.getElementById("auroraWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "boltusWalk") {
    document.getElementById("boltusWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "caramelWalk") {
    document.getElementById("caramelWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "doomlightlWalk") {
    document.getElementById("doomlightlWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "firefoxWalk") {
    document.getElementById("firefoxWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "firestarWalk") {
    document.getElementById("firestarWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "flamencoWalk") {
    document.getElementById("flamencoWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "gabrielWalk") {
    document.getElementById("gabrielWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "hotsteelWalk") {
    document.getElementById("hotsteelWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "hurricaneWalk") {
    document.getElementById("hurricaneWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "jojoWalk") {
    document.getElementById("jojoWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "michaelWalk") {
    document.getElementById("michaelWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "neutronWalk") {
    document.getElementById("neutronWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "northernWalk") {
    document.getElementById("northernWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "pulsarWalk") {
    document.getElementById("pulsarWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "rangerWalk") {
    document.getElementById("rangerWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "ravenWalk") {
    document.getElementById("ravenWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "skylarkWalk") {
    document.getElementById("skylarkWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "snowWalk") {
    document.getElementById("snowWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "trioWalk") {
    document.getElementById("trioWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "ventorusWalk") {
    document.getElementById("ventorusWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "deathKnellWalk") {
    document.getElementById("deathKnellWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "dreadwolfWalk") {
    document.getElementById("dreadwolfWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "gaialWalk") {
    document.getElementById("gaialWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "guerillaHunterWalk") {
    document.getElementById("guerillaHunterWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "lancelotWalk") {
    document.getElementById("lancelotWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "moonRabbitWalk") {
    document.getElementById("moonRabbitWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "nebulaWalk") {
    document.getElementById("nebulaWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "shiranuikWalk") {
    document.getElementById("shiranuikWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "skyfireWalk") {
    document.getElementById("skyfireWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "twilightWalk") {
    document.getElementById("twilightWalk").playbackRate = 1.0;
  }
}else
if(localStorage.getItem("difficulty") === "hard") {
  setIntervalId = setInterval(initGame, 100);
  if(localStorage.getItem("movementbg") === "playerWalk") {
    document.getElementById("playerWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "alboradaWalk") {
    document.getElementById("alboradaWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "andromedaWalk") {
    document.getElementById("andromedaWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "arthurWalk") {
    document.getElementById("arthurWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "auroraWalk") {
    document.getElementById("auroraWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "boltusWalk") {
    document.getElementById("boltusWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "caramelWalk") {
    document.getElementById("caramelWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "doomlightlWalk") {
    document.getElementById("doomlightlWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "firefoxWalk") {
    document.getElementById("firefoxWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "firestarWalk") {
    document.getElementById("firestarWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "flamencoWalk") {
    document.getElementById("flamencoWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "gabrielWalk") {
    document.getElementById("gabrielWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "hotsteelWalk") {
    document.getElementById("hotsteelWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "hurricaneWalk") {
    document.getElementById("hurricaneWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "jojoWalk") {
    document.getElementById("jojoWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "michaelWalk") {
    document.getElementById("michaelWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "neutronWalk") {
    document.getElementById("neutronWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "northernWalk") {
    document.getElementById("northernWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "pulsarWalk") {
    document.getElementById("pulsarWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "rangerWalk") {
    document.getElementById("rangerWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "ravenWalk") {
    document.getElementById("ravenWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "skylarkWalk") {
    document.getElementById("skylarkWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "snowWalk") {
    document.getElementById("snowWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "trioWalk") {
    document.getElementById("trioWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "ventorusWalk") {
    document.getElementById("ventorusWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "deathKnellWalk") {
    document.getElementById("deathKnellWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "dreadwolfWalk") {
    document.getElementById("dreadwolfWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "gaialWalk") {
    document.getElementById("gaialWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "guerillaHunterWalk") {
    document.getElementById("guerillaHunterWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "lancelotWalk") {
    document.getElementById("lancelotWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "moonRabbitWalk") {
    document.getElementById("moonRabbitWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "nebulaWalk") {
    document.getElementById("nebulaWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "shiranuikWalk") {
    document.getElementById("shiranuikWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "skyfireWalk") {
    document.getElementById("skyfireWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "twilightWalk") {
    document.getElementById("twilightWalk").playbackRate = 1.5;
  }
}else
if(localStorage.getItem("difficulty") === "hell") {
  setIntervalId = setInterval(initGame, 50);
  if(localStorage.getItem("movementbg") === "playerWalk") {
    document.getElementById("playerWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "alboradaWalk") {
    document.getElementById("alboradaWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "andromedaWalk") {
    document.getElementById("andromedaWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "arthurWalk") {
    document.getElementById("arthurWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "auroraWalk") {
    document.getElementById("auroraWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "boltusWalk") {
    document.getElementById("boltusWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "caramelWalk") {
    document.getElementById("caramelWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "doomlightlWalk") {
    document.getElementById("doomlightlWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "firefoxWalk") {
    document.getElementById("firefoxWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "firestarWalk") {
    document.getElementById("firestarWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "flamencoWalk") {
    document.getElementById("flamencoWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "gabrielWalk") {
    document.getElementById("gabrielWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "hotsteelWalk") {
    document.getElementById("hotsteelWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "hurricaneWalk") {
    document.getElementById("hurricaneWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "jojoWalk") {
    document.getElementById("jojoWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "michaelWalk") {
    document.getElementById("michaelWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "neutronWalk") {
    document.getElementById("neutronWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "northernWalk") {
    document.getElementById("northernWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "pulsarWalk") {
    document.getElementById("pulsarWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "rangerWalk") {
    document.getElementById("rangerWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "ravenWalk") {
    document.getElementById("ravenWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "skylarkWalk") {
    document.getElementById("skylarkWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "snowWalk") {
    document.getElementById("snowWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "trioWalk") {
    document.getElementById("trioWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "ventorusWalk") {
    document.getElementById("ventorusWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "deathKnellWalk") {
    document.getElementById("deathKnellWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "dreadwolfWalk") {
    document.getElementById("dreadwolfWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "gaialWalk") {
    document.getElementById("gaialWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "guerillaHunterWalk") {
    document.getElementById("guerillaHunterWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "lancelotWalk") {
    document.getElementById("lancelotWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "moonRabbitWalk") {
    document.getElementById("moonRabbitWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "nebulaWalk") {
    document.getElementById("nebulaWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "shiranuikWalk") {
    document.getElementById("shiranuikWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "skyfireWalk") {
    document.getElementById("skyfireWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "twilightWalk") {
    document.getElementById("twilightWalk").playbackRate = 2.0;
  }
}else
if(localStorage.getItem("difficulty") === "") {
  setIntervalId = setInterval(initGame, 140);
  if(localStorage.getItem("movementbg") === "playerWalk") {
    document.getElementById("playerWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "alboradaWalk") {
    document.getElementById("alboradaWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "andromedaWalk") {
    document.getElementById("andromedaWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "arthurWalk") {
    document.getElementById("arthurWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "auroraWalk") {
    document.getElementById("auroraWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "boltusWalk") {
    document.getElementById("boltusWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "caramelWalk") {
    document.getElementById("caramelWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "doomlightlWalk") {
    document.getElementById("doomlightlWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "firefoxWalk") {
    document.getElementById("firefoxWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "firestarWalk") {
    document.getElementById("firestarWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "flamencoWalk") {
    document.getElementById("flamencoWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "gabrielWalk") {
    document.getElementById("gabrielWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "hotsteelWalk") {
    document.getElementById("hotsteelWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "hurricaneWalk") {
    document.getElementById("hurricaneWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "jojoWalk") {
    document.getElementById("jojoWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "michaelWalk") {
    document.getElementById("michaelWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "neutronWalk") {
    document.getElementById("neutronWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "northernWalk") {
    document.getElementById("northernWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "pulsarWalk") {
    document.getElementById("pulsarWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "rangerWalk") {
    document.getElementById("rangerWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "ravenWalk") {
    document.getElementById("ravenWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "skylarkWalk") {
    document.getElementById("skylarkWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "snowWalk") {
    document.getElementById("snowWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "trioWalk") {
    document.getElementById("trioWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "ventorusWalk") {
    document.getElementById("ventorusWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "deathKnellWalk") {
    document.getElementById("deathKnellWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "dreadwolfWalk") {
    document.getElementById("dreadwolfWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "gaialWalk") {
    document.getElementById("gaialWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "guerillaHunterWalk") {
    document.getElementById("guerillaHunterWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "lancelotWalk") {
    document.getElementById("lancelotWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "moonRabbitWalk") {
    document.getElementById("moonRabbitWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "nebulaWalk") {
    document.getElementById("nebulaWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "shiranuikWalk") {
    document.getElementById("shiranuikWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "skyfireWalk") {
    document.getElementById("skyfireWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "twilightWalk") {
    document.getElementById("twilightWalk").playbackRate = 1.0;
  }
}
document.addEventListener("keydown", changeDirection);