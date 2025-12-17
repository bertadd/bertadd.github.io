//mcr trivia//
const mcrmessages = [
    "Bassist Mikey Way came up with the name after spotting the title Ecstasy: Three Tales of Chemical Romance by Irvine Welsh while working at Barnes & Noble. His brother Gerard added the “My,” resulting in the distinctive name “My Chemical Romance”.",
    "Gerard Way decided to form the band in 2001 after witnessing the tragic events of 9/11. Their first song, “Skylines and Turnstiles,” was written about his emotional response to the attack.",
    "Before settling on its final concept, the album was originally titled The Rise and Fall of My Chemical Romance. The iconic track “Welcome to the Black Parade” was initially called “The Five of Us Are Dying” before being reworked.",
    "During filming of the 'Famous Last Words' video in 2006, Gerard Way injured his ankle, and drummer Bob Bryar suffered severe burns (second- and third-degree), even developing gangrene due to proximity to pyrotechnics.",
    "The band’s style draws from a wide range of artists—from the theatrical rock of Queen to punk legends like Black Flag, Misfits, and metal acts like Iron Maiden. They’ve also cited post-punk bands such as The Cure, Joy Division, Bauhaus, and Siouxsie and the Banshees as inspirations."
];

function getRandomMessage() {
    const index = Math.floor(Math.random() * mcrmessages.length);
    return mcrmessages[index];
}

document.getElementById("mcrtrivia").addEventListener("click", function() {
    try {
        const message = getRandomMessage();
        alert(message); // Simple popup
    } catch (error) {
        console.error("Error showing popup:", error);
    }
});