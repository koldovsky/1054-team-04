// 1. Голи Мессі	
// https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// 2. Перевід у від'ємне число
// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

function makeNegative(num) {
  return -Math.abs(num);
}

function makeNegative(num) {
  return num < 0 ? num : -num;
}

// 3. Нова позиція в грі	
// https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript

function move(position, roll) {
  return position + roll * 2;
}

// 4. Привітання
// https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript

function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

// 5. Велосипедист і кількість води
// https://www.codewars.com/kata/keep-hydrated-1/train/javascript

function litres(time) {
  return Math.floor(0.5 * time);
}

// 6. Ромашки
// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}
