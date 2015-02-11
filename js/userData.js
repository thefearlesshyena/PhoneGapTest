var foo = 109


function myfunction() { 
var first = document.getElementById("textbox1").value;
 var second = document.getElementById("textbox2").value; 
var answer =parseFloat(first)+parseFloat(second);

var textbox3 = document.getElementById('textbox3');
textbox3.value=answer;
 } 

 
 function userStore(one, two)  {
 localStorage.setItem("bar", foo);
 }
 
 function userRetrieve() {
 var foo = localStorage.getItem("bar");
 var textbox3 = document.getElementById('textbox3');
textbox3.value=foo;
 }
 