//top trivia//
const topmessages = [
    "They made history on the Billboard charts: Twenty One Pilots became the first alternative band to have two singles, “Stressed Out” and “Ride”, simultaneously in the top five of the Billboard Hot 100 in 2015.",
    "They’ve used symbols and costumes with meaning: In the early years, the duo performed wearing ski masks and later Tyler painted his neck and hands black (with red armbands) to embody the character ‘Blurryface’—a personification of his insecurities and self-doubts.",
    "Their album art features family: The cover of their album Vessel features Tyler and Josh’s paternal grandfathers, unique personal choice to honor their families.",
    "Josh Dun started on trumpet, Tyler almost played college basketball: Before becoming their iconic drummer, Josh first learned trumpet and is largely self-taught on drums. Meanwhile, Tyler Joseph was once a point guard on his high school basketball team and even had a scholarship offer before choosing music instead.",
    "Their name comes from a moral dilemma in a play: The band took their name from Arthur Miller’s All My Sons, about a man who knowingly shipped faulty airplane parts, leading to the deaths of 21 pilots. Tyler Joseph chose it as a reminder to consistently make morally sound decisions.",
];

function getRandomMessage() {
    const index = Math.floor(Math.random() * topmessages.length);
    return topmessages[index];
}

document.getElementById("toptrivia").addEventListener("click", function() {
    try {
        const message = getRandomMessage();
        alert(message); // Simple popup
    } catch (error) {
        console.error("Error showing popup:", error);
    }
});



