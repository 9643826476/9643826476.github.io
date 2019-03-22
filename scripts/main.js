var myImage = document.querySelector('img');

myImage.onclick = function() 
{
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/please-do-not-turn-off-this-computer.png') {
      myImage.setAttribute ('src','images/business-card-Ziyyara.jpg');
    } else {
      myImage.setAttribute ('src','images/please-do-not-turn-off-this-computer.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome , ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

/*var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var clicked = document.querySelector('html');
clicked.onclick = function()
{alert('Ouch! Stop poking me!')}
*/

