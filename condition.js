let User_Age = 19;

if (User_Age >= 18) {
  console.log("You can Vote");
} else {
  console.log("You Can Not Vote");
}

let Traffic_Light = "red";

if (Traffic_Light == "red") {
  console.log("Please Stop !!");
} else if (Traffic_Light == "green") {
  console.log("Please GO !!");
} else if (Traffic_Light == "yellow") {
  console.log("Slow Ahead !!");
} else {
  console.log("Please Enter Right Choice");
}

// Write a program that checks if a number is even or odd.

let Check_Number = 10;

if (Check_Number % 2 == 0) {
  console.log("This number is odd", Check_Number);
} else if (Check_Number == 0) {
  console.log("number is nautral", Check_Number);
} else {
  console.log("this number is even", Check_Number);
}

// let User_LoggedIN = true;
// let Course_Purchased = true;

// User_LoggedIN ? console.log('you have teach'  ):console.log('you dont have teach');

// Write a program that determines whether a given number is positive or negative.

let Number = 0;

if (Number > 0) {
  console.log(Number, " is positive");
} else if (Number == 0) {
  console.log(Number, "is zero");
} else if (Number < 0) {
  console.log(Number, "is negetive");
}

// Write a program to determine the greater of two numbers.

let Nummber1 = 10;
let Nummber2 = 90;

if (Nummber1 > Nummber2) {
  console.log(Nummber1, "is big number");
} else {
  console.log(Nummber2, "is big number");
}

//  Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

let User_Age1 = 18;

if (User_Age1 < 12) {
  console.log("Your Ticket Price is 5 Rupess");
} else if (User_Age >= 12 && User_Age1 < 18) {
  console.log("Your Tikcet Price is 10 Rupees");
} else if (User_Age1 >= 18 && User_Age1 < 60) {
  console.log("Your Ticket Price is 20 Rupees");
} else if (User_Age1 >= 60) {
  console.log("Your Ticket Price is 15 Rupees");
}

// check leap year or not

let Current_Year = 2024;

if (Current_Year % 4 == 0 && Current_Year % 100 != 0) {
  console.log(Current_Year, "is leap year");
} else {
  console.log(Current_Year, "is not leap year");
}

// Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0

let Purchase_Ammount = 190;

if (Purchase_Ammount >= 100) {
  console.log("Your discount Ammount is 20 Rupees");
} else if (Purchase_Ammount >= 50) {
  console.log("Your Discount Ammount is 10 Rupees");
} else {
  console.log("Your Discounti IS Zero");
}

// Write a program that greets the user based on the time of day. Display good morning, good afternnon or good evening based on the time of day when you run the code.

// Write a simple number guessing game. Provide a secret number and a guess. Based on those numbers give players clues if their guess is higher, lower or correct.

let Secret_Number = 90;
let Guess_Number = 18;

if (Secret_Number == Guess_Number) {
  console.log("Congrauation Your Guess Number Is Right");
} else if (Secret_Number > Guess_Number) {
  console.log("Your Guess Is Higher");
} else {
  console.log("Your Guess is Lower");
}

// Write a program that calculates the Body Mass Index (BMI) and categorizes it. The formula for BMI is: weight / (height * height).

let User_Height = 5;
let User_Logged = true;
let User_Weight = 90;
let BMI = User_Weight / (User_Height * User_Height);

if (BMI >= 18.5) {
  console.log("You Are Unweighted Range");
} else if (BMI > 18.5 && BMI <= 24.9) {
  console.log("You Are Healthy Weight Range");
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log("You Are in OverWeighted Range");
} else if (BMI >= 30) {
  console.log("You Are in obese Rang");
}

// Write a program that greets the user based on the time of day. Display good morning, good afternnon or good evening based on the time of day when you run the code.

var currentHour = new Date().getHours();
console.log(currentHour);

if (currentHour < 12) {
  console.log("Good Morning Sir..");
} else if (currentHour < 18) {
  console.log("Good Afternoon Sir..");
} else {
  console.log("Good Evening Sir..");
}

// switch case in ffunction

function checkDay(day) {
  switch (day) {
    case 1:
      console.log("Sunday");
      break;

    case 2:
      console.log("Monday");
      break;

    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;
    default:
      console.log("You Entered Wrong CHoice");
      break;  
  }
}
checkDay(10);
checkDay(3);
checkDay(1);


// 

  