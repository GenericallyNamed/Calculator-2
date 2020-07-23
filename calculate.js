var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var btn0 = document.getElementById("btn0");
var btnPoint = document.getElementById("btnPoint");
var btnLP = document.getElementById("btnLParenthesis");
var btnRP = document.getElementById("btnRParenthesis");

var btnMultiply = document.getElementById("btnMultiply");
var btnDivide = document.getElementById("btnDivide");
var btnAdd = document.getElementById("btnPlus");
var btnSubtract = document.getElementById("btnMinus");
var btnSolve = document.getElementById("btnSolve");

var btnBackspace = document.getElementById("btnBack");

var inputField = document.getElementById("inputField");
var outputField = document.getElementById("outputBox");


$("#inputField").on('input change keyup paste', function() {
    console.log("input detected?? ");
    updateOutput();
});

function updateOutput() {
    console.log("input detected!");
    var inputReceived = inputField.value;
    try {
        var finalResult = eval(inputReceived);
        console.log("the result is:" + eval(inputReceived));
        if (finalResult === undefined || finalResult === null) {
            outputField.innerText = "result is either undefined or null! bad!";
            outputField.classList.add("errorText");
        }
        else {
            outputField.innerText = finalResult;
            outputField.classList.remove("errorText");
        }
        
    }
    catch(error) {
        outputField.innerText = "error! i'm sad ):";
        outputField.classList.add("errorText");
    }
}


btnSolve.addEventListener("click", function() {
    console.log("attempting to solve . . .");
    solve();
});

btnBackspace.addEventListener("click", function() {
    backKey();
});



function solve() {
    console.log("attempting to solve . . .");
    var inputReceived = inputField.value;
    console.log(inputReceived);
    try {
        var finalResult = eval(inputReceived);
        console.log("the result is:" + eval(inputReceived));
        if (finalResult === undefined || finalResult === null) {
            outputField.innerText = "error! stupid ass";
            outputField.classList.add("errorText");
        }
        else {
            inputField.value = finalResult;
            outputField.innerText = "";
        }
        
    }
    catch(error) {
        outputField.innerText = "wat am i to do w/ this? dum dum";
        outputField.classList.add("errorText");
    }

}


function fetchMouseX(c) {
    
    var offset = $(c).offset.left;
    var x = event.pageX - offset;
    console.log("x value=" + x + " offset value=" + offset);
    return x;
}

function fetchMouseY(c) {
    var y = event.pageY - $(c).offset.top;
    return y;
}

function ripple(c, rgb) {
    console.log("this is within the ripple loop: " + c, rgb)
    var x = event.pageX - $(c).offset().left;
    var y = event.pageY - $(c).offset().top;
    console.log(x + " " + y);
    var rippleObject = document.createElement("DIV");
    $(c).append(rippleObject);
    rippleObject.style.left = `calc(${x}px - 12.5px)`;
    rippleObject.style.top = `calc(${y}px - 12.5px)`;
    rippleObject.style.backgroundColor = rgb;
    rippleObject.style.zIndex = 1;
    rippleObject.classList.add("rippleEffect");
    return;
}

// Function to create event listener for btn input and ripple effect. Finds elements by class-name.

var btnsToEnable =  document.getElementsByClassName("addInputBtn");

for (var i = 0; i < btnsToEnable.length; i++) {
    
    var currentElement = btnsToEnable[i];
    let btnNameID = currentElement.getAttribute('idName');
    let btnID = currentElement.id;
    console.log("Creating input button. button ID = " + btnID + " and ID name = " + btnNameID);
    btnsToEnable[i].addEventListener('mousedown', function() {
        enterInput(currentElement.getAttribute('idName'), btnID);
    });
}

var rippleBtns = document.getElementsByClassName("addRippleBtn");

for (var i = 0; i < rippleBtns.length; i++) {
    var currentElement = rippleBtns[i];
    let btnNameID = currentElement.getAttribute('idName');
    let rippleColor =  currentElement.getAttribute('rippleColor');
    console.log("Creating ripple button. ripple color = " + rippleColor + " and ID name = " + btnNameID);
    currentElement.addEventListener('mousedown', ripple, btnNameID, rippleColor);
    console.log(currentElement.id + " is the element! adding click event listener!!");
    rippleBtns[i].addEventListener('mousedown', function() {
        ripple(btnNameID, rippleColor);
        console.log("lol a click happened!");
    });
}

$("#inputField").on('focusout', function() {
    $("#inputField").focus();
})

function enterInput(c, b) {
    console.log("button pressed. ID = " + c + ".");

    var buttonRetrived = document.getElementById(b);
    var inputField = document.getElementById("inputField");
    inputField.focus();
    document.getElementById("inputField").focus();
    var inputValue = inputField.value;
    console.log("inputValue = " + inputValue);
    var inputEndPos = inputValue.length;
    console.log("inputLength = " + inputEndPos);
    var cursorStart = $('#inputField').prop('selectionStart');
    var cursorEnd = $('#inputField').prop('selectionEnd');
    var currentBtn = $(c);
    var btnValue = currentBtn.value;
    var textBefore = $('#inputField').val().substring(0, cursorStart);
    var textAfter = $('#inputField').val().substring(cursorEnd, inputEndPos);
    var textToInput = buttonRetrived.getAttribute('value');
    var newCursorPos = cursorStart + 1;
    $('#inputField').val(textBefore + textToInput + textAfter);
    console.log("DEBUG: INPUTFIELD FOCUSED!!");
    inputField.setSelectionRange(newCursorPos, newCursorPos);
    updateOutput();
    console.log("DEBUG: cursorStart=" + cursorStart + " cursorEnd=" + cursorEnd);
    

}

function backKey() {
    var inputField = $('#inputField');
    var textField = document.getElementById("inputField");
    var inputValue = inputField.val();
    console.log(inputValue);
    var inputEndPos = inputValue.length;
    var cursorStart = inputField.prop('selectionStart');
    var cursorEnd = inputField.prop('selectionEnd');
    var textBefore = inputField.val().substring(0,cursorStart);
    var textAfter = inputField.val().substring(cursorEnd, inputEndPos);
    
    if (cursorStart == cursorEnd) {
        var removedCharacter = inputField.val().substring(0, cursorStart-1);
        inputField.val(removedCharacter + textAfter);
        textField.setSelectionRange(cursorStart-1, cursorStart-1);
        updateOutput();
    }
    else {
        inputField.val(textBefore + textAfter);
        textField.setSelectionRange(cursorStart,cursorStart);
        updateOutput();
        return;
    }
    console.log("test124235423252");


}