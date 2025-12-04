// js/main.js

function updateGreeting() {
    const nameInput = document.getElementById("name").value;  
    const message = document.getElementById("survey-message");

    if (nameInput.trim() === "") {  
        message.innerHTML = "Tell me who you are so I know whose takes these are 👀";
    } else {
        message.innerHTML = "Thanks, " + nameInput + "! Can't wait to see your game opinions.";
    }
}

function handleSubmit(event) {
    event.preventDefault(); 

    const nameValue = document.getElementById("name").value;
    const message = document.getElementById("survey-message");

    if (nameValue.trim() === "") {
        message.innerHTML = "Survey submitted anonymously.";
    } else {
        message.innerHTML = "Survey submitted! Thanks, " + nameValue + ".";
    }

    return false;
}

function handleReset() {
    const message = document.getElementById("survey-message");
    message.innerHTML = "";  
}
