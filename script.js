"use strict";

const longHand = document.querySelector(".long-hand");
const shortHand = document.querySelector(".short-hand");
const secondHand = document.querySelector(".sec-hand");

const secondHandFun = function () {
  setInterval(() => {
    const date = new Date();

    ///////////// SHORT HAND //////////////////
    let hour = date.getHours();
    if (!hour) return;
    // console.log(hour);
    shortHand.style.transform = `translate(-50%, 0%) rotate(${
      (hour / 12) * 360
    }deg)`;

    ///////////// LONG HAND //////////////////
    let minute = date.getMinutes();
    if (!minute) return;
    // console.log(minute);
    longHand.style.transform = `translate(-50%, 0%) rotate(${
      (minute / 60) * 360
    }deg)`;

    ///////////// SECOND HAND //////////////////
    let sec = date.getSeconds();
    // console.log(sec);

    secondHand.style.transform = `translate(-50%, 0%) rotate(${
      (sec / 60) * 360
    }deg)`;
  }, 1000);
};
secondHandFun();
