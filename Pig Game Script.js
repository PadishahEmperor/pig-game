/* const player2Name = prompt("Please Enter Player Two Name"); */

for (let i = 0; i < 2; i++) {
  let playerName = prompt(
    `Please Enter Player ${i === 0 ? "One" : "Two"} Name`
  );
  document.querySelectorAll(".player-name")[i].textContent = playerName;
}

// Defining/DECLARING the  class and variables that will be used multiple times
let score = document.querySelector(".score.active");
let addScore = Number(score.textContent);

let totalScore = document.querySelector(".total-score.active");
let addTotal = Number(totalScore.textContent);

let player1Div = document.querySelector(".player-div1");

console.log(player1Div.classList.contains("active"));

let player2Div = document.querySelector(".player-div2");

let holdBool = false;

//Object with Dice images with a corresponding dice value assigned to those images
const diceImg = {
  "dice-1.png": 1,
  "dice-2.png": 2,
  "dice-3.png": 3,
  "dice-4.png": 4,
  "dice-5.png": 5,
  "dice-6.png": 6,
};

console.log(diceImg["dice-1.png"]);

// TO GET RANDOM IMAGE FROM THE OBJECT

const diceRoll = function (diceImg) {
  let diceList = [];
  for (i in diceImg) {
    /*  console.log(i); */
    diceList.push(i);
  }
  /*  console.log(diceList.length); */
  return diceList[Math.trunc(Math.random() * diceList.length + 1) - 1]; // For range use- Math.trunc(Math.random()*(Max-Min +1)+Min)
};

/*  document.querySelectorAll(".dice")[5].classList.add("hidden"); */

// CALLING THE RANDOM FUNCTION
let randomDice = diceRoll(diceImg);
console.log(randomDice);

// MAKING ONE RANDOM DICE APPEAR ON THE SCREEN EVERYTIME PAGE IS LOADED
document
  .querySelectorAll(".dice")
  [diceImg[randomDice] - 1].classList.remove("hidden"); //  [diceImg[randomDice] - 1], -1 here BECAUSE IMAGES VALUE RANGE FROM 1-6, BUT I NEED 0-5 BECAUSE OF HOW OBJECTS ARE STORED IN THE ARRAY TO ACCESS AN ELEMENT FROM THE NODELIST(querySelectorAll('.dice'))[coz multiple elements with same class]

console.log(document.querySelector(".btn.roll"));

/*   let rolled = diceImg[randomDice];
console.log(rolled); */

// FUNCTIONALITY FOR ROLL-BUTTON
document.querySelector(".btn.roll").addEventListener("click", function () {
  // HIDDING THE PREVIOUS DICE IMG
  document
    .querySelectorAll(".dice")
    [diceImg[randomDice] - 1].classList.add("hidden");

  // SELECTING NEW RANDOM DICE IMG
  randomDice = diceRoll(diceImg);
  console.log(randomDice);

  // MAKING THE NEW DICE IMG(BASED ON RANDOM DICE IMG THAT GOT SELECTED) APPEAR/VISIBLE ON SCREEN
  document
    .querySelectorAll(".dice")
    [diceImg[randomDice] - 1].classList.remove("hidden");
  /* randomDice = diceRoll(diceImg); */

  // LOGIC FOR ROLLING THE DICE AND UPDATING VALUES ON SCREEN DEPENDING WHICH PLAYER TURN IT IS
  //ALREDY ASSUMING PLAYER 1 GOES FIRST

  if (!player2Div.classList.contains("active")) {
    // CHECKING IF THE RANDOM DICE IMG ISN'T 1, AND UPDING VALUES ACCORDING TO THAT
    if (diceImg[randomDice] !== 1) {
      //IMP TO SELECT AND UPADTE THE ORIGANLLY DEFINDED VARIABLES, AS NEW VALUE MAY BE ASSIGNED TO THEM OTHERWISE MAY KEEP WORKING WITH PREVIOUSLY ASSIGNED VALUES OF THOSE VARIABLES
      //
      score = document.querySelector(".score.active"); //SELCTING THE CURRENT ACTIVE SCORE, TO UPDATE THE VALUES ON SCREEN DEPENDING WHICH DIV IS ACTIVE
      addScore = Number(score.textContent);

      totalScore = document.querySelector(".total-score.active");
      addTotal = Number(totalScore.textContent);
      console.log(addScore);

      addScore = addScore + diceImg[randomDice]; // -1 NOT NEEDED HERE BECAUSE NOT SELECTING FROM NODE LIST INSTEAD COUNTING THE REAL VALUES TO DISPLAY ON THE SCREEN
      score.textContent = addScore;
    } else {
      // IF DICE IMGE ROLL IS 1 THE SETTING TEXT CONTENT OF THE CURRENT ACTIVE SCORE ELEMENT TO 0, ALSO REMOVING ACTIVE STATE FROM DIV 1
      addScore = 0;
      score.textContent = addScore;
      if (player1Div.classList.contains("active")) {
        player1Div = document.querySelector(".player-div1");

        console.log(player1Div.classList.contains("active"));

        player2Div = document.querySelector(".player-div2");
        document.querySelector(".player-div1").style.opacity = 1;
        document.querySelector(".player-div2").style.opacity = 0.7;

        player1Div.classList.remove("active");
        document.querySelector(".score.active").classList.remove("active");
        document
          .querySelector(".total-score.active")
          .classList.remove("active");

        player2Div.classList.add("active");
        document.querySelectorAll(".score")[1].classList.add("active");
        document.querySelectorAll(".total-score")[1].classList.add("active");
        player1Div = document.querySelector(".player-div1");

        console.log(player1Div.classList.contains("active"));

        player2Div = document.querySelector(".player-div2");

        holdBool = true;
      }
    }
  } else {
    // EXECUTE WHEN P2 IS ACTIVE
    // DOING THE SAME FOR PALYER 2, IF MULTIPLE PALYERS THEN USE ELSE IF CONDTIONS
    if (diceImg[randomDice] !== 1) {
      score = document.querySelector(".score.active");
      addScore = Number(score.textContent);

      totalScore = document.querySelector(".total-score.active");
      addTotal = Number(totalScore.textContent);

      /*  player1Div = document.querySelector(".player-div1");

        console.log(player1Div.classList.contains("active"));

        player2Div = document.querySelector(".player-div2"); */

      console.log(addScore);
      addScore = addScore + diceImg[randomDice];
      score.textContent = addScore;
    } else {
      addScore = 0;
      score.textContent = addScore;
      if (player2Div.classList.contains("active")) {
        player1Div = document.querySelector(".player-div1");

        console.log(player1Div.classList.contains("active"));

        player2Div = document.querySelector(".player-div2");
        document.querySelector(".player-div1").style.opacity = 0.7;
        document.querySelector(".player-div2").style.opacity = 1;

        player2Div.classList.remove("active");

        document.querySelector(".score.active").classList.remove("active");
        document
          .querySelector(".total-score.active")
          .classList.remove("active");

        player1Div.classList.add("active");
        document.querySelectorAll(".score")[0].classList.add("active");
        document.querySelectorAll(".total-score")[0].classList.add("active");
        player1Div = document.querySelector(".player-div1");

        console.log(player1Div.classList.contains("active"));

        player2Div = document.querySelector(".player-div2");

        holdBool = false;
      }
    }
  }
});

/*  console.log(randomDice); */

// SELECTING THE HOLD BUTTON AND UPADTING THE TOTAL SCORE
document.querySelector(".btn.hold").addEventListener("click", function () {
  // LOGIC FOR HOLD, WITH PLAYER 1 GOING FIRST.
  if (player1Div.classList.contains("active")) {
    console.log("me first before hold");
    if (!holdBool) {
      // CHECKING IF THE HOLD BOOLEAN IS TRUE OR FALSE, HERE CODE WILL RUN IF ITS NOT FALSE
      console.log("me first after hold");

      addTotal = addTotal + addScore; // ADD-TOTAL IS THE NUMBER OF TOTAL-SCORE ON THE SCREEN, UPDATING IT BY ADDING CURRENT SCORE TO THE TOTAL SCORE
      totalScore.textContent = addTotal; // UPDATING THE VALUE ON SCREEN

      addScore = 0; //SETTING CURRENT SCORE TO 0 AND LOGGING THAT ON THE SCREEN
      score.textContent = addScore;

      // CHANGING TURN BY REMOVING/ ADDING ACTIVE ON PLAYER DIV AND ALSO CHANGING THE OPACITY OF THE DIVS TO SHOW WHICH DIV BLOCK IS ACTIVE
      document.querySelector(".player-div1").style.opacity = 1;
      document.querySelector(".player-div2").style.opacity = 0.7;

      player1Div.classList.remove("active"); // ACTIVE FROM PLAYER ONE REMOVED

      // ACTIVE FROM ACTIVE-SCORE ELEMENTS REMOVED
      document.querySelector(".score.active").classList.remove("active");
      document.querySelector(".total-score.active").classList.remove("active");

      player2Div.classList.add("active");
      document.querySelectorAll(".score")[1].classList.add("active");
      document.querySelectorAll(".total-score")[1].classList.add("active");

      holdBool = true; // SETTING NEW BOOL VALUE TO HOLD SO THE OTHER BLOCK CAN GET EXECUTED

      // SETTING NEW VALUES AS THESE MAY HAVE GOTTEN UPDATED TO NEWER STATE(ACTIVE, NO ACTIVE)
      player1Div = document.querySelector(".player-div1");

      console.log(player1Div.classList.contains("active"));

      player2Div = document.querySelector(".player-div2");
      winnerCheck();
    }
  } else {
    p2_active();
    winnerCheck();
    // WILL GET EXCUTED WHEN PLAYER ONE DIV ISNT ACTIVE(OR DOESNT HAVE ACTIVE CLASS ON IT)
    /*             console.log("me last before hold");
      if (holdBool === true) {
        console.log("me last after hold");
        console.log("me");
        // MAY HAVE GOTTEN UPADTED SO SETTING THE STATES AGAIN, IF SATES THE SAME NO ISSUES AND IF GOTTEN UPDATED THEN NEW STATES WILL GET ASSIGNED
        score = document.querySelector(".score.active");
        addScore = Number(score.textContent);

        totalScore = document.querySelector(".total-score.active");
        addTotal = Number(totalScore.textContent);

        // REST IS DOING SAME AS ABOVE BUT FOR ACTIVE DIV 2
        addTotal = addTotal + addScore;
        totalScore.textContent = addTotal;

        addScore = 0;
        score.textContent = addScore;

        document.querySelector(".player-div1").style.opacity = 0.7;
        document.querySelector(".player-div2").style.opacity = 1;

        player2Div.classList.remove("active");

        document
          .querySelector(".score.active")
          .classList.remove("active");
        document
          .querySelector(".total-score.active")
          .classList.remove("active");

        player1Div.classList.add("active");
        document.querySelectorAll(".score")[0].classList.add("active");
        document
          .querySelectorAll(".total-score")[0]
          .classList.add("active");

        holdBool = false;
        player1Div = document.querySelector(".player-div1");

        console.log(player1Div.classList.contains("active"));

        player2Div = document.querySelector(".player-div2");
      }*/
  }
});

// NEW BUTTON FUNCTIONALITY

document.querySelector(".btn.new").addEventListener("click", function () {
  for (let i = 0; i < 2; i++) {
    document.querySelectorAll(".score")[i].textContent = 0;
    document.querySelectorAll(".total-score")[i].textContent = 0;

    if (!player1Div.classList.contains("active")) {
      p2_active();
    }
  }
});

function p2_active() {
  /*  if (!player1Div.classList.contains("active")) { */
  if (holdBool === true) {
    console.log("me last after hold");
    console.log("me");
    // MAY HAVE GOTTEN UPADTED SO SETTING THE STATES AGAIN, IF SATES THE SAME NO ISSUES AND IF GOTTEN UPDATED THEN NEW STATES WILL GET ASSIGNED
    score = document.querySelector(".score.active");
    addScore = Number(score.textContent);

    totalScore = document.querySelector(".total-score.active");
    addTotal = Number(totalScore.textContent);

    // REST IS DOING SAME AS ABOVE BUT FOR ACTIVE DIV 2
    addTotal = addTotal + addScore;
    totalScore.textContent = addTotal;

    addScore = 0;
    score.textContent = addScore;

    document.querySelector(".player-div1").style.opacity = 0.7;
    document.querySelector(".player-div2").style.opacity = 1;

    player2Div.classList.remove("active");

    document.querySelector(".score.active").classList.remove("active");
    document.querySelector(".total-score.active").classList.remove("active");

    player1Div.classList.add("active");
    document.querySelectorAll(".score")[0].classList.add("active");
    document.querySelectorAll(".total-score")[0].classList.add("active");

    holdBool = false;
    player1Div = document.querySelector(".player-div1");

    console.log(player1Div.classList.contains("active"));

    player2Div = document.querySelector(".player-div2");
  }
}

/* function winnerCheck() {
  for (let i = 0; i < 2; i++) {
    let total = Number(
      document.querySelectorAll(".total-score")[i].textContent
    );
    let playerName =
      document.querySelectorAll(".player-name")[i].textContent; // Variabl wont work for the win coz of the i, as it could be any of the player that wins the game and that gets checked inside of conditional.
    if (total >= 50) {
      console.log(`${playerName} Wins The Game!`);
     
      document.querySelector(
        ".winner"
      ).textContent = `${playerName} Won The Game!`;

      document.querySelector(".overlay").classList.remove("hidden");
      document.querySelector(".winner").classList.remove("hidden");
      document.querySelector(".start").classList.remove("hidden");
    }
  }
} */

function winnerCheck() {
  for (let i = 0; i < 2; i++) {
    let total = Number(
      document.querySelectorAll(".total-score")[i].textContent
    );
    let playerName = document.querySelectorAll(".player-name")[i].textContent;
    if (total >= 50) {
      console.log(`${playerName} Wins The Game!`);
      document.querySelector(
        ".winner"
      ).textContent = `${playerName} Won The Game!`;

      // Remove "hidden" class from the button with class "start"
      document.querySelector(".start").classList.remove("hidden");

      document.querySelector(".overlay").classList.remove("hidden");
      document.querySelector(".winner").classList.remove("hidden");
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  winnerCheck();
});

document.querySelector(".overlay").addEventListener("click", function () {
  document.querySelector(".overlay").classList.add("hidden");
  document.querySelector(".winner").classList.add("hidden");
  document.querySelector(".start").classList.add("hidden");
});

document.querySelector(".start").addEventListener("click", function () {
  document.querySelector(".overlay").classList.add("hidden");
  document.querySelector(".winner").classList.add("hidden");
  document.querySelector(".start").classList.add("hidden");
});
