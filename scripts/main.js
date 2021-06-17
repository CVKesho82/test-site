const myHeading = document.querySelector('h1');
myHeading.textContent = 'CARMEN VINCENT KESHO!';

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bluebackground.jpg') {
      myImage.setAttribute('src','images/NC.jpg');
    } else {
      myImage.setAttribute('src','images/bluebackground.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}


    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Carmen is cool, ' + myName;
  }
}