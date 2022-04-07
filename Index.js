var L = 1; // The Lenght of the run is 1 unit
var A = 0; // Achilles starts from the beginning
var T = 0.5; // The Tortoise starts from the center
var n = 0; // the contestants run in steps, counted by this variable

var startSignal = document.getElementById('startSignal');
var result = document.getElementById('result');

startSignal.onclick = function () {
  startSignal.parentNode.removeChild(startSignal); // (removing the button)
  var step = setInterval(function () {
    A = T; // Achilles reaches the Tortoise...
    T = (L + T) / 2; // which in the meantime went halfway from the end
    n++;

    result.innerHTML = `We're at step number: ${n} <br> Their distance from each other is: ${
      T - A
    }`;

    if (A == T) {
      result.innerHTML = `The contestants met at ${A} after ${n} steps! <br>
    I'm sorry Zeno, I see no paradox here 🙃`;
      clearInterval(step);
    }
  }, 200);
};
// FASTER VERSION WITH WHILE
// Which unfortunatley blocks the JavaScript event loop, therefore no longer rendering the rest of the body
// So there's no way to display the progres during the contest

// while (A !== T) {
//   A = T; // Achilles reaches the Tortoise...
//   T = (L + T) / 2; // which in the meantime went halfway from the end
//   n++;
// }
// result.innerHTML = `The contestants met at ${A} after ${n} steps! <br>
// I'm sorry Zeno, I see no paradox here 🙃`;
