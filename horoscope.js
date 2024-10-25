// script.js

// Pre-defined horoscope messages
const horoscopes = {
    "aries": "Aries: You're ready to conquer the world! Just remember, a nap is also a valid form of conquering.",
    "taurus": "Taurus: Indulge in some snacks today; the universe approves of your snack choices!",
    "gemini": "Gemini: Today is perfect for talking to yourself—it's cheaper than therapy!",
    "cancer": "Cancer: Feeling a little crabby? Maybe it's time to treat yourself to some chocolate!",
    "leo": "Leo: It's your time to shine! But don't forget your shades; you don’t want to blind anyone!",
    "virgo": "Virgo: Your organization skills are off the charts. Go ahead and color-code your snacks!",
    "libra": "Libra: Seeking balance? Consider having dessert before dinner—it’s all about priorities!",
    "scorpio": "Scorpio: Your mysterious aura is attracting attention. Just don't reveal all your secrets at once!",
    "sagittarius": "Sagittarius: Adventure is calling! Just make sure you don’t forget your GPS this time.",
    "capricorn": "Capricorn: Hard work pays off! But remember, procrastination also has its rewards—like extra naps!",
    "aquarius": "Aquarius: Embrace your quirks; they make you uniquely you. Just don’t forget to wash your socks!",
    "pisces": "Pisces: Let your imagination run wild! Just make sure it doesn’t lead you to the cookie jar again!"
};

// Handle form submission
document.getElementById('horoscopeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const signInput = document.getElementById('signInput').value.toLowerCase().trim();
    const resultElement = document.getElementById('horoscopeResult');

    // Check if the sign exists in our horoscope object
    if (horoscopes[signInput]) {
        resultElement.textContent = horoscopes[signInput]; // Display the corresponding message
    } else {
        resultElement.textContent = "Please enter a valid zodiac sign!"; // Display error message
    }
});
