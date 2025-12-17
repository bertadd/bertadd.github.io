function getRandomMessage() {
    const index = Math.floor(Math.random() * messages.length);
    return messages[index];
}

document.getElementById("toptrivia").addEventListener("click", function() {
    try {
        const message = getRandomMessage();
        alert(message); // Simple popup
    } catch (error) {
        console.error("Error showing popup:", error);
    }
});