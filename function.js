 /*
 function greeting() {
  return "Hello How Are You ??";
}

console.log(greeting());

// grettings all user

/* function All_User() {
   return ['hello','hi'];x
}
*/
/*
let [x, y] = All_User();
console.log(x);
console.log(y);

let harshil = console.log("Hello World");
console.log(harshil);

// user grettings

function User_1() {
  return "Hello Haribhai";
}
console.log(User_1());

function User_2() {
  return "Hello Jay";
}
console.log(User_2());

function User_3() {
  return "Hello Utsav";
}
console.log(User_3());

function User_4() {
  return "Hello Parth";
}
console.log(User_4());

function User_5() {
  return "Hello Ravi";
}
console.log(User_5());

function User_6() {
  return "Hello Sujal";
}
console.log(User_6());

function User_7() {
  return "Hello Sahdev";
}
console.log(User_7());

function User_8() {
  return "Hello Nikunj";
}
console.log(User_8());

function User_9() {
  return "Hello Kapil";
}
console.log(User_9()); 

function User_10() {
  return "Hello Jatin";
}
console.log(User_10());

// sum of two , three and four  , five nummber

function sum_2(a, b) {
  return a + b;
}
console.log(sum_2(10, 20));

function sum_3(a, b, c) {
  return a + b + c;
}
console.log(sum_3(10, 20, 20));

function sum_4(a, b, c, d) {
  return a + b + c + d;
}
console.log(sum_4(10, 10, 10, 10));

function sum_5(a, b, c, d, e) {
  return a + b + c + d + e;
}
console.log(sum_5(10, 20, 320, 0, 39));

// substracion of two , three , four and five number

function Sub_2(a, b) {
  return a - b;
}
console.log(Sub_2(20, 10));

function Sub_3(a, b, c) {
  return a - b - c;
}
console.log(Sub_3(100, 90, 1));

function Sub_4(a, b, c, d) {
  return a - b - c - d;
}
console.log(Sub_4(100, 10, 10, 10));

function Sub_5(a, b, c, d, e) {
  return a - b - c - d - e;
}
console.log(sum_5(900, 90, 20, 99, 9));

// multiplication two number , three number and four number

function Mul_2(a, b) {
  return a * b;
}

console.log(Mul_2(10, 10));

function Mul_3(a, b, c) {
  return a * b * c;
}
console.log(Mul_3(10, 10, 10));

function Mul_4(a, b, c, d) {
  return a * b * c * d;
}
console.log(Mul_4(10, 20, 30, 40));

function Mul_5(a, b, c, d, e) {
  return a * b * c * d * e;
}
console.log(Mul_5(10, 20, 40, 40, 0));

// div of two three four and five numer

function Div_2(a, b) {
  return a / b;
}
console.log(Div_2(102, 2));

function Div_3(a, b, c) {
  return a / b / c;
}

console.log(Div_3(900, 10, 10));

function Div_4(a, b, c, d) {
  return a / b / c / d;
}
console.log(Div_4(900, 7, 3, 7));

function Div_5(a, b, c, d, e) {
  return a / b / c / d / e;
}
console.log(Div_5(890, 3, 29, 13, 4));

// module of two three four number

function Mod_2(a, b) {
  return a % b;
}
console.log(Mod_2(102, 51));

function Mod_3(a, b, c) {
  return (a % b) % c;
}

console.log(Mod_3(90, 8, 7));

function Mod_4(a, b, c, d) {
  return ((a % b) % c) % d;
}
console.log(Mod_4(900, 80, 39, 28));

function Mod_5(a, b, c, d, e) {
  return (((a % b) % c) % d) % e;
}
console.log(Mod_5(190, 31, 37, 7, 5));
*/

// check  if a number is odd or even in JavaScript



function IsOdd_Even(number) {
    if(number % 2 == 0)
      {
        console.log(number,'is odd number');
      }
    else if(number == 0)
      {
        console.log(number,'is zero');
      }
    else
    {
      console.log(number,'is even number');
    }
}

IsOdd_Even(10);

// find  the largest of three number

function Find_LargeNumber(num1,num2,num3) {
  if(num1 > num2 && num1 > num3)
    {
      console.log(num1,'is big number');
    }
    else if(num2 > num1 && num2 > num3)
      {
        console.log(num2,'is big number');
      }
    else
    {
      console.log(num3,'is big number');
    }
}
Find_LargeNumber(10,20,30);

// check leap year or not

function Check_LeapYear(year) {
    if( year % 4 ==0 && year % 100 != 0)
      {
        console.log(year,'is leap year');
      }
    else
    {
      console.log(year,'is not leap year');
    }
}


// check number is not or number

function Valid_Number(number_check) {
    if(isNaN(number_check))
      {
        console.log(number_check,'is not a number');
      }
    else 
    {
      console.log(number_check,'is a number');
    }
}

Valid_Number('xys');


// 9. Find the grade for input marks


function Find_Pr(name,marks) {
    if(marks >= 90 && marks <=100)
      {
        console.log(name,'Anf Your Grade is',marks);
      }
    else if(marks >=80 && marks  < 90)
      {
        console.log(name,'And Your Grade is',marks);
      }
       
}