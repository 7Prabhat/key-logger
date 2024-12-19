const logDiv = document.getElementById("log");      // seleting the div with id 'log'
const stateDiv = document.getElementById("state");      // seleting the div with id 'state'
const startBtn = document.getElementById("startbtn");       // selecting the button with id 'startbtn'
const stopBtn = document.getElementById("stopbtn");     // selecting the button with id 'stopbtn'

startBtn.addEventListener("click", ()=>{        // adds 'click' event listener after which the arrow function will be called
    document.addEventListener("keydown", handleDown);       // adds 'keydown' event listener, to which 'handleDown' Function will be called
    document.addEventListener("keyup", handleUp);       // adds 'keyup' event listener, to which 'handleUp' Function will be called
    startBtn.disabled = true;       // this line disables the stop button once it's pressed
    stopBtn.disabled = false;       // this line is intended to enable the stop button
})

stopBtn.addEventListener("click", ()=>{         // adds 'click' event listener after which the arrow function will be called
    document.removeEventListener("keydown", handleDown);        // adds 'keydown' event listener, to which 'handleDown' Function will be called
    document.removeEventListener("keyup", handleUp);        // adds 'keyup' event listener, to which 'handleUp' Function will be called
    logDiv.textContent = "";
    stateDiv.textContent = "";
    stopBtn.disabled = true;        // this line disables the start button once it's pressed
    startBtn.disabled = false;      // this line is intended to enable the start button
})

// handleDown() is an event handler for a keydown event, where 'e' is an object taken as a parameter
function handleDown(e){
    logDiv.textContent = `Key ${e.key} is Pressed`; //this displays a message that includes the key that was pressed
    stateDiv.textContent = `Key is Pressed Down`; //The textContent of stateDiv is updated to display the static message
}       // this block handles the keydown event

// handleUp() is an event handler for a keydown event, where 'e' is an object taken as a parameter
function handleUp(e){
    logDiv.textContent = `Key ${e.key} is Released`; //this displays a message that includes the key that was released
    stateDiv.textContent = `Key is Release Up` //The textContent of stateDiv is updated to display the static message
}       // this block handles the keyup event (from line 23-32)

//context: 'e'is the event object automatically passed to the event handler when a keydown/keyup event is triggered. This object contains details about the event, such as which key was pressed.