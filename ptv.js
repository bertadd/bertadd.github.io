//ptv trivia//
const ptvmessages = [
    "Hello there! ",
    "Have a great day! ",
    "Keep up the good work! ",
    "You're awesome! ",
    "Stay positive and smile! "
];

function getRandomMessage() {
    const index = Math.floor(Math.random() * ptvmessages.length);
    return ptvmessages[index];
}

document.getElementById("ptvtrivia").addEventListener("click", function() {
    try {
        const message = getRandomMessage();
        alert(message); // Simple popup
    } catch (error) {
        console.error("Error showing popup:", error);
    }
});