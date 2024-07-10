// student total marks check fail , pasas or not pass

let total_mark = 30;

if (total_mark <= 30)  
{
  console.log("you are failed");
}
else if (total_mark >= 50 && total_mark <= 60)
{
  console.log("your grad is D", "your total mark is ", total_mark);
} 
/*
else  {
  console.log('My Name Is Harshil Thummar And I am Live In Surat Gujarat I Have Dokne My Graduation From PP SAVANI UNIVERSITY Now I am Working As a Software Developer ( FullStack Developer...!!!)');
}*/
else if (total_mark > 60 && total_mark <= 70)
{
  console.log("your grade is C", "your total mark is ", total_mark);
} 
else if (total_mark > 70 && total_mark <= 80) 
{
  console.log("your grade is B", "your total marks is", total_mark);
} else if (total_mark > 80 && total_mark < 100) 
{
  console.log("your grade is A++", "your total marks is", total_mark);
}
