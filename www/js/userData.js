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
 
 function addEntry() {
    // Parse any JSON previously stored in allEntries
    var date = Date();
	var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    if(existingEntries == null) existingEntries = ["",""];
    //var entryDate = document.getElementById("entryDate").value;
    var entryText = document.getElementById("userText").value;
    var entry = {
        "date": date,
        "text": entryText
    };
    localStorage.setItem("entry", JSON.stringify(entry));
    // Save allEntries back to local storage
    existingEntries.push(entry);
    localStorage.setItem("allEntries", JSON.stringify(existingEntries));
	//display date as a test:
};

function retrieveEntries() {
var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
for(i=0; i<existingEntries.length; i++){
var textbox3 = document.getElementById('textbox3');
textbox3.value=(existingEntries[i]);
};
};

function clearEntries(){
localStorage.removeItem("allEntries");
};
