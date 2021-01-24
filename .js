Challenge 1 & 2 - BMI Calculator

let markMass = 78;
let markHeight = 1.69;

let jonhMass = 92;
let johnHeight = 1.95;

const bmi = function (mass, height) {
  return mass / height ** 2;
};
let markBMI = bmi(78, 1.69);
let johnBMI = bmi(92, 1.95);

if (markBMI > johnBMI) {
  console.log(
    `Mark's BMI of ${markBMI} is higher than John's BMI of ${johnBMI}.`
  );
} else if (johnBMI > markBMI) {
  console.log(
    `John's BMI of ${johnBMI} is higher than Mark's BMI of ${markBMI}.`
  );
}

console.log(markBMI);

//Challenge 3 - Average Score Calculator
const avgScore = function (a, b, c) {
  let findAvg = Math.floor((a + b + c) / 3);
  return findAvg;
};

let dolphinsAvgScore = avgScore(96, 106, 119);
let koalasAvgScore = avgScore(109, 90, 123);

if (dolphinsAvgScore > koalasAvgScore && dolphinsAvgScore >= 100) {
  console.log(
    `Dolphins win! The Dolphins win! ${dolphinsAvgScore} to ${koalasAvgScore}! What a game folks, what a game!`
  );
} else if (dolphinsAvgScore < koalasAvgScore && koalasAvgScore >= 100) {
  console.log(
    `Koala's win! The Koala's win! ${koalasAvgScore} to ${dolphinsAvgScore}! What a game folks, what a game!`
  );
} else {
  if (dolphinsAvgScore === koalasAvgScore && dolphinsAvgScore >= 100) {
    console.log(
      `It's a tie! The game is a tie! ${dolphinsAvgScore} to ${koalasAvgScore}! Look's like we're headed to overtime folks!`
    );
  } else {
    console.log(
      `We're sorry to report back at home but it seems neither team has scored enough points to win. Quite a shabby show indeed Dick - Back over to you Tom.`
    );
  }
}

console.log(dolphinsAvgScore, koalasAvgScore);

//Challenge 4 - A Simple Tip Calculator
let billValue = 100;
let tip =
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

const totalBill = billValue + tip;

console.log(
  `The bill for the meal is ${billValue}. Based on the total, the generally accepted tip is ${tip} dollars. Following this guideline brings the total amount to ${totalBill}.`
);

console.log(totalBill);

Challenge 5 - Double the Average Score
calcAverage = (a, b, c) => {
  let findAvg = Math.floor((a + b + c) / 3);
  return findAvg;
};

let dolphinsAvgScore = calcAverage(9600, 100, 119);
let koalasAvgScore = calcAverage(109, 90, 123);

const checkWinner = function (dolphinsAvgScore, koalasAvgScore) {
  if (
    dolphinsAvgScore > koalasAvgScore &&
    dolphinsAvgScore >= 2 * koalasAvgScore
  ) {
    console.log(`Dolphins win! ${dolphinsAvgScore} to ${koalasAvgScore}!`);
  } else if (
    koalasAvgScore > dolphinsAvgScore &&
    koalasAvgScore >= 2 * dolphinsAvgScore
  ) {
    console.log(`Koala's win! ${koalasAvgScore} to ${dolphinsAvgScore}!`);
  } else {
    console.log(`Neither team scored enough for victory!!!`);
  }
};
console.log(dolphinsAvgScore, koalasAvgScore);
checkWinner(dolphinsAvgScore, koalasAvgScore);

Challenge 6 - More Work with the Tip Calculator

let billValue = 100;
let tip =
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
// console.log(tip);
let totalCost = billValue + tip;
// console.log(totalCost);

function calcTip(billValue) {
  return billValue >= 50 && billValue <= 300
    ? billValue * 0.15
    : billValue * 0.2;
}
// console.log(calcTip(1000));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips, totals);

for (i = 0; i < bills.length; i++) {
  console.log(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
}

Challenge 7 - More Work with the BMI Calculator

const obj1 = {
    fullName: 'Mark Miller',
    mass: 80,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / (this.height ** 2);
       return this.bmi;
   },
};
const obj2 = {
    fullName: 'John Smith',
    mass: 68,
    height: 1.49,
    calcBMI: function(){
        this.bmi = this.mass / (this.height ** 2);
       return this.bmi;
   }
};

obj1.calcBMI();
obj2.calcBMI();
console.log(obj1,obj2);
console.log(obj1.bmi,obj2.bmi);

if (obj1.calcBMI > obj2.calcBMI) {
    console.log(`${obj1.fullName}'s BMI ${obj1.bmi} is higher than John's ${obj2.bmi}!`)
} else if (obj2.calcBMI > obj1.calcBMI){
    console.log(`${obj2.fullName}'s BMI ${obj2.bmi} is higher than Mark's ${obj1.bmi}!`)
} else{
    console.log(`They both have the same BMI! ${obj1.bmi}`)
// };
