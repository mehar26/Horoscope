// horoscope.js

// Pre-defined horoscope messages with multiple options for each sign
// horoscope.js

// Dark humor horoscope messages with a "hopeless future" theme
const horoscopes = {
    "aries": [
        "Aries: Charging headfirst into the future! Too bad it's a dead-end.",
        "Aries: You’re unstoppable… until you realize there’s no glory at the finish line.",
        "Aries: So much energy and nowhere to use it—welcome to your life, Aries.",
        "Aries: Go boldly into the unknown! Just know it probably won’t work out.",
        "Aries: You were meant to shine, but the bulb’s already burned out.",
        "Aries: Destiny calls, but the phone’s been disconnected. Sorry.",
        "Aries: The world is yours to conquer… for all the good that’ll do.",
        "Aries: You’re a natural-born leader, just leading the way into the void.",
        "Aries: Full speed ahead! Too bad the road ends in oblivion.",
        "Aries: Ambition is your thing, but the future looks… less than promising."
    ],
    "taurus": [
        "Taurus: Stability is your strength, but the ground beneath you is crumbling.",
        "Taurus: Comfort in chaos? Great, because chaos is all that’s left.",
        "Taurus: Strong as a bull… standing in a field of regrets.",
        "Taurus: Keep your head down and push forward. Straight into the abyss.",
        "Taurus: Good news—you’re a rock. Bad news—it’s a sinking ship.",
        "Taurus: Life’s a marathon, but the finish line just vanished.",
        "Taurus: Slow and steady wins the race… to nowhere.",
        "Taurus: You crave security, but look around. Does this look secure?",
        "Taurus: Hard work pays off, they say. But who’s still paying?",
        "Taurus: You’re solid, dependable, and completely stuck in a dead end."
    ],
    "gemini": [
        "Gemini: Two paths, two choices, both lead to an empty parking lot.",
        "Gemini: Quick-witted and curious—shame there’s nothing worth learning anymore.",
        "Gemini: You crave excitement. Too bad life’s looking like a blank screen.",
        "Gemini: Today, explore your options… even if none are promising.",
        "Gemini: Dual nature? Great! Twice the chance of disappointment.",
        "Gemini: Keep the conversation going… with yourself, forever.",
        "Gemini: The future is wide open, but you’ll probably get bored with it.",
        "Gemini: You’re a chameleon, blending right into the bleakness ahead.",
        "Gemini: Variety is the spice of life. Too bad all options are bland.",
        "Gemini: Decision-making is key. Too bad all choices lead nowhere special."
    ],
    "cancer": [
        "Cancer: Cling to comfort, because that’s all you’re getting.",
        "Cancer: Today, retreat into your shell—nothing out there worth seeing.",
        "Cancer: Feelings are deep, just like the hole you’re falling into.",
        "Cancer: The future’s uncertain… so go ahead and panic preemptively.",
        "Cancer: Homebody by choice? Great, since there’s no reason to leave.",
        "Cancer: Embrace your vulnerability, and maybe stockpile some tissues.",
        "Cancer: The tides are turning… and bringing nothing good with them.",
        "Cancer: Emotionally equipped for a bleak future. Handy, right?",
        "Cancer: Nurture your dreams—they’ll need all the help they can get.",
        "Cancer: You're sensitive, and life is about to feel extra prickly."
    ],
    "leo": [
        "Leo: The spotlight’s all yours… but the stage is deserted.",
        "Leo: Your confidence is unparalleled. Shame there’s no one left to impress.",
        "Leo: Shining bright! Unfortunately, it’s just you and the darkness.",
        "Leo: Lead the way, even if it’s just straight off the edge.",
        "Leo: Your kingdom awaits. Just one minor issue: it’s deserted.",
        "Leo: You’re unstoppable! Just with nowhere left to go.",
        "Leo: Today, the world’s your stage—too bad it’s the end credits.",
        "Leo: You’re on fire, Leo! But this is looking like the end of the line.",
        "Leo: Go big! The bigger the dreams, the louder the echo in the void.",
        "Leo: Time to shine. But who are we kidding, it’s lights out."
    ],
    "virgo": [
        "Virgo: You’ve planned for everything. Except this outcome.",
        "Virgo: Perfectionist? Good. You’ll need those standards to handle disappointment.",
        "Virgo: Today, embrace the details—they’re all that’s left to obsess over.",
        "Virgo: Organized? Great. Now organize your hopes and dreams into the trash.",
        "Virgo: You’ve double-checked the future. Yep, still a disaster.",
        "Virgo: All that effort to get everything just right. Pity it’s all wrong.",
        "Virgo: Precision is your strength, but the future is one big mess.",
        "Virgo: You’ve left no stone unturned. Too bad it’s all rubble now.",
        "Virgo: Hope for the best, plan for the worst—guess which one’s here?",
        "Virgo: You’re ready for anything… except, well, this."
    ],
    "libra": [
        "Libra: Seeking balance? The scales are broken, friend.",
        "Libra: Today, chase harmony in a world that’s falling apart.",
        "Libra: Beauty is fleeting, especially when the future looks this bleak.",
        "Libra: Decisions are tough—lucky for you, none of them matter anymore.",
        "Libra: Charm your way through today, just don’t expect results.",
        "Libra: Balance is key. Too bad the ground is crumbling underfoot.",
        "Libra: Find your inner peace… and hold onto it for dear life.",
        "Libra: The future may be bleak, but at least you’ll go down with style.",
        "Libra: You’ll find harmony, but it’ll only last as long as the last echo.",
        "Libra: Love and harmony? Maybe in the next lifetime."
    ],
    "scorpio": [
        "Scorpio: The dark future calls, and you’re already dressed for the occasion.",
        "Scorpio: Embrace the mystery… of why things keep going wrong.",
        "Scorpio: You’re ready for the apocalypse. Good, because it’s en route.",
        "Scorpio: Passion is key—but even passion can’t fix what’s coming.",
        "Scorpio: Trust issues? Valid, considering where this is headed.",
        "Scorpio: The universe keeps secrets. You’re about to learn a few you won’t like.",
        "Scorpio: The truth is out there, but maybe you’d rather not know.",
        "Scorpio: Darkness ahead? Finally, something you’re comfortable with.",
        "Scorpio: Secrets and shadows await. Perfect for someone like you.",
        "Scorpio: Intense as ever, but intensity won’t fix this future."
    ],
    "sagittarius": [
        "Sagittarius: Adventure calls! Too bad it’s a one-way trip.",
        "Sagittarius: Embrace the journey, even if it’s a cliffhanger ending.",
        "Sagittarius: Boundless optimism—until reality says otherwise.",
        "Sagittarius: Freedom is key, but there’s nothing left to be free of.",
        "Sagittarius: The road ahead is open… straight into the unknown.",
        "Sagittarius: You love a good story, but this one’s a tragic comedy.",
        "Sagittarius: Find meaning in the chaos, or at least, try to.",
        "Sagittarius: Your wanderlust is strong, even if there’s nowhere left to go.",
        "Sagittarius: There’s always tomorrow… or maybe not this time.",
        "Sagittarius: Life’s an adventure, but the map just went blank."
    ],
    "capricorn": [
        "Capricorn: Success awaits… only in your dreams.",
        "Capricorn: You’re climbing the ladder… to nowhere.",
        "Capricorn: Hard work pays off. But probably not soon.",
        "Capricorn: Keep hustling! Not that it’ll change anything.",
        "Capricorn: You’re disciplined, but life’s about to throw that out the window.",
        "Capricorn: All roads lead to success… unless they don’t.",
        "Capricorn: Achievement unlocked: ‘High Effort, Low Reward.’",
        "Capricorn: You’re focused and driven, right to the end of the road.",
        "Capricorn: Keep building your empire. Even if it’s made of sand.",
        "Capricorn: The future’s in your hands. Too bad it’s slipping away."
    ],
    "aquarius": [
        "Aquarius: Change the world? At this point, you’ll be lucky to change your socks.",
        "Aquarius: Free spirit? Good. You’ll need that flexibility soon.",
        "Aquarius: Your ideas are revolutionary… just in time for the collapse.",
        "Aquarius: Embrace the future, even if it’s a train wreck.",
        "Aquarius: The world needs your vision, but don’t expect miracles.",
        "Aquarius: Inventive and imaginative—pity there’s no hope left to innovate.",
        "Aquarius: Fight for a better tomorrow! Just, you know, maybe don’t count on it.",
        "Aquarius: Lead the way, even if there’s no one left to follow.",
        "Aquarius: Future-proofing? Great, if only the future were proofed.",
        "Aquarius: Forward-thinking, but the path forward looks bleak."
    ],
    "pisces": [
        "Pisces: Dream big! Though dreams are all that’s left.",
        "Pisces: Embrace your intuition. It’s already telling you things won’t end well.",
        "Pisces: Sensitivity and empathy in a world that’s falling apart? Good luck.",
        "Pisces: Dive deep… just watch out for those dark, murky waters.",
        "Pisces: Your imagination is boundless, unlike the grim future.",
        "Pisces: You believe in fairy tales. Pity they’re all nightmares now.",
        "Pisces: Look to the stars for guidance… but they’re flickering.",
        "Pisces: Compassion is your strength, even if there’s no one to save.",
        "Pisces: Embrace the mystery of life, especially the messy ending.",
        "Pisces: Today, let your dreams lead. Just don’t be shocked when they’re dashed."
    ]
};


// Handle form submission
document.getElementById('horoscopeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const signInput = document.getElementById('signInput').value.toLowerCase().trim();
    const resultElement = document.getElementById('horoscopeResult');

    // Check if the sign exists in our horoscope object
    if (horoscopes[signInput]) {
        // Select a random message from the array for the entered sign
        const randomMessage = horoscopes[signInput][Math.floor(Math.random() * horoscopes[signInput].length)];
        resultElement.textContent = randomMessage; // Display the random message
    } else {
        resultElement.textContent = "Please enter a valid zodiac sign!"; // Display error message
    }
});
