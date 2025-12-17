//ptv trivia//
const ptvmessages = [
    "The name Pierce the Veil comes from a song by their previous band, Before Today. The phrase symbolizes the idea of getting straight to the root of an issue and eliminating it, an ethos they carry through their music.",
    "Brothers Vic and Mike Fuentes founded the band in 2006 in San Diego, following the dissolution of their earlier band, Before Today (formerly Early Times). They recorded their debut album entirely as a duo before recruiting Jaime Preciado (bass) and Tony Perry (lead guitar) in 2007.",
    "Their sound blends post-hardcore with Latin-infused melodies, including flamenco-inspired guitar passing and Spanish lines, earning them the unofficial label “Mexicore”",
    "The 2023 song “So Far So Fake” gained momentum via a viral TikTok dance challenge, propelling it to #1 on Billboard’s Alternative Airplay chart in 2025, over two years after its release.",
    "While on tour, guitarist Tony Perry, bassist Jaime Preciado, and the band’s manager surprisingly turned their tour van into an in-vehicle battlefield using Nerf guns—complete with Disneyland-style foam wars. Vic Fuentes got so fed up with the dart pelting that he'd rip them in half when they hit him."
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