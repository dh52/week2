//var first_name = "Dan"; two forward //slashes mean single line comment
/* Block Comment */

var first_name = "Dan";

var last_name = "Haugen";

var greeting = "hello";

var message1 = "dont forget";

var message2 = "milk";

var favoriteQuote = "\"Four Score...\"";

var goodbye = "see you later";

//use single quotes if you have a lot of illegal characters

//bad variable names (errors)
//var first name = "";
//var 2first_name = "";
//keywords var time number math 

//operators
// "=" asigns values
// "+=" ( concatenation assignment operator, with strings) adds to whatever the variable currently has

//output variables to the console!
/*console.log(greeting);
console.log(first_name);
console.log(last_name);
console.log(message1);
console.log(message2);
console.log(favoriteQuote);
console.log(goodbye); */

//console.log(greeting + " " + first_name + " " + last_name + " " + message1 + " " + message2 + " " + favoriteQuote + " " + goodbye);

//my quote "Looking around at all of you, you *hard-working*  Iowa families, you farm families and teachers and *teamsters* and cops and cooks, you rock 'n' rollers and *holy rollers* . All of you who work so hard, you full-time  *moms*, you with the hands that rock the cradle. You all make the world go round. And now our cause is one."

//"How about the rest of us? Right-wingin', bitter-clingin', proud clingers of our *guns* , our God, and our religions and our Constitution. Tell us that we're not *red* enough? Yeah, coming from the establishment."

//sarah *palin*

//static words
var static_words1 = "Looking around at all of you, you ";
var static_words2 = " Iowa families, you farm families and teachers and ";
var static_words3 = " and cops and cooks, you rock 'n' rollers and ";
var static_words4 = ". All of you who work so hard, you full-time ";
var static_words5 = ", you with the hands that rock the cradle. You all make the world go round. And now our cause is one. How about the rest of us? Right-wingin', bitter-clingin', proud clingers of our ";
var static_words6 = ", our God, and our religions and our Constitution. Tell us that we're not ";
var static_words7 = "enough? Yeah, coming from the establishment. Sarah ";


//create a variable that is used as a referrence to your form button
//we use the unique ID attribute to do this
var button = document.getElementById("submit");

//then we add the ability to have a mouse click fire off a function when clicked on
document.addEventListener("click", onClick, false);

function onClick(evt)
{
  evt.preventDefault(evt);//stops the form from submiting
  //by preventing its default action
  
  //forms
  var element1 = document.getElementById("form1").elements.item(0).value;
  var element2 = document.getElementById("form1").elements.item(1).value;
  var element3 = document.getElementById("form1").elements.item(2).value;
  var element4 = document.getElementById("form1").elements.item(3).value;
  var element5 = document.getElementById("form1").elements.item(4).value;
  var element6 = document.getElementById("form1").elements.item(5).value;
  var element7 = document.getElementById("form1").elements.item(6).value;
  console.log(static_words1 + element1 + static_words2 + element2 + static_words3 + element3 + static_words4 + element4 + static_words5 + element5 + static_words6 + element6 + static_words7 + element7);
}
      
