import { updateUserDatas } from "./firestore.js";

const checkKey = (e) => {
    e = e || window.event;
    if (e.keyCode == '38') {
      // up arrow
      if (userY > 10) {
        userY = userY - 5;
        updateUserDatas('y', userY, userId);
      }
    } else if (e.keyCode == '40') {
      // down arrow
      if (userY < 90) {
        userY = userY + 5;
        updateUserDatas('y', userY, userId);
      }
    } else if (e.keyCode == '37') {
      // left arrow
      if (userX > 10) {
        userX = userX - 5;
        updateUserDatas('x', userX, userId);
      }
    } else if (e.keyCode == '39') {
      // right arrow
      if (userX < 90) {
        userX = userX + 5;
        updateUserDatas('x', userX, userId);
      }
    }
    checkFlag();
  };
  
  document.onkeydown = checkKey;

//   -------------------  //

const checkFlag = () => {
    if (userX === flag.x && userY === flag.y) {
        const newFlagX = (Math.floor(Math.random() * (9 - 1 + 1)) + 1) * 10;
        const newFlagY = (Math.floor(Math.random() * (9 - 1 + 1)) + 1) * 10;
        updateFlagDatas(newFlagX, newFlagY);
        updateUserDatas('score', userScore + 1, userId);
    }
};