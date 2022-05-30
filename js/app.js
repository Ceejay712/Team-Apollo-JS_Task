alert('We are Team Apollo, The god of Sun');


// Question 1

let cardTitle = document.querySelector('.team-name');
teamName = cardTitle.innerHTML='Team Apollo';
teamNameStyle = document.querySelector('.team-name').style.color="orange";


// Question 2

let groupNames = ['Omokaro Loveth', 
                  'Stanley Chijioke', 
                  'Shodipe Oladele', 
                  'Ifeoma Okafor', 
                  'Avwunudiogba Ogaga', 
                  'Kasie Ugwu', 
                  'Anyanwu Chukwuemeka']
console.log(groupNames[1]);


// Question 3

let aboutMe = {
    firstName : 'Stanley',
    lastName : 'Chijioke',
    bestMovie : 'Mortal Kombat',
    bestFood : 'Egusi soup and Eba',
    complexion : 'Chocolate',
    birthMonth : "January",
    state : 'Imo',
    groupName : 'Apollo'
}
console.log(aboutMe.bestMovie);



// Qestion 4

let noun = "Stanley";
let verb = 'Eat';
let adjective = 'Healthy'

console.log(noun + ' loves to ' + verb);
console.log('My name is ' + noun + ' and I love to ' +  verb + " tasty meals");
console.log(noun + 'has a ' + adjective + ' skin');
console.log(noun + ' needs to' + verb + ' so he can stay ' + adjective);
console.log('He is not' + adjective + ' like ' + noun + " because he doesnt " + adjective);



// Question 5

remainderOfDivision = (firstNumber, secondNumber) => {
    return (firstNumber % secondNumber);
}
console.log(remainderOfDivision(22, 5));


// Question 6

const quadFunction = (a, b, c) => {
  let root = Math.pow(b, 2) - (4 * a * c);
  let x1 = (-1 * b + Math.sqrt(root)) / 2 * a;
  let x2 = (-1 * b - Math.sqrt(root)) / 2 * a;
  return x1 + " and " + x2;
}

console.log(quadFunction(1, 2, -1));


// Question 7

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "I called my " + myAdjective + " " + myNoun + " and he" + myVerb + " " + myAdverb + "towards me";
console.log(wordBlanks);



// QUestion 8

areaOfCircle = (radius) => {
    let solution = (3.142 * (radius**2));
    return solution;
}
console.log('The area of the circle is ' + areaOfCircle(9));


// Question 9

let principalAmount = 8200;
let interestRate = 17.5;
let timeInYears = 2.6;

let simpleInterst = (principalAmount*interestRate*timeInYears)/100;

console.log(simpleInterst);


//  Question 10

let ten = 10;
let four = 4;

console.log(ten % four);


//  Question 11

//  For test data 1

let meritMass1 = 78;
let meritHeight1 = 1.69;
let meritBMI1 = meritMass1 / (meritHeight1 * meritHeight1);
console.log(meritBMI1);

let nutjobMass1 = 92;
let nutjobHeight1 = 1.95;
let nutjobBMI = nutjobMass1 / (nutjobHeight1 * nutjobHeight1);
console.log(nutjobBMI1);

let meritHigherBMI1 = (meritBmi1 > nutjobBmi1);
console.log('Is Merit BMI higher? ' + meritHigherBMI1)


// For test data 2

let nutjobMass2 = 95;
let nutjobHeight2 = 1.88;
let nutjobBMI2 = nutjobMass2 / (nutjobHeight2 * nutjobHeight2);
console.log(nutjobBMI2);

let meritMass2 = 85;
let meritHeight2 = 1.76;
let meritBMI2 = meritMass2 / (meritHeight2 * meritHeight2);
console.log(meritBMI2);

let meritHigherBMI2 = (meritBmi2 > nutjobBmi2);
console.log('Is Merit BMI higher? ' + meritHigherBMI2)
