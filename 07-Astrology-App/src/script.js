const zodiacSings = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
]

// Based on Date, size 31
const compliments = [
    "You have such a warm and genuine smile.",
    "Your energy is so refreshing to be around.",
    "You make even ordinary moments feel special.",
    "You have a natural charm that’s impossible to ignore.",
    "Your positivity can brighten anyone’s day.",
    "You’re effortlessly cool and confident.",
    "You have an amazing sense of humor.",
    "You’re such a good listener — it’s rare and beautiful.",
    "You always know how to make people feel comfortable.",
    "You’re more talented than you realize.",
    "You have a way of making everything look easy.",
    "Your style is always on point.",
    "You have such a beautiful heart.",
    "You inspire others without even trying.",
    "You’re the kind of person people naturally trust.",
    "You make difficult things look simple.",
    "You’re glowing — literally and figuratively.",
    "You always bring out the best in people.",
    "You have a voice that’s so calming.",
    "You’re stronger than you think.",
    "You have a very kind and gentle soul.",
    "Your presence makes everything better.",
    "You have amazing taste — in everything.",
    "You’re full of creative ideas.",
    "You make people feel valued and heard.",
    "You radiate confidence in such a graceful way.",
    "You’re unforgettable — in the best way.",
    "You have a natural elegance about you.",
    "You’re truly one of a kind.",
    "You make life more beautiful just by being in it.",
    "You’re proof that good people still exist. 💫",
]

// size is 30
const recommendations = [
    "You should never stop believing in yourself.",
    "Take every failure as a lesson, not as a loss.",
    "Keep your circle small but your vision big.",
    "Start your day with gratitude, it changes everything.",
    "Learn something new every single day.",
    "Trust your journey, even when it doesn’t make sense.",
    "Always choose peace over drama.",
    "Take breaks — rest is part of progress.",
    "Don’t compare your Chapter 1 to someone else’s Chapter 20.",
    "Keep your promises, especially the ones you make to yourself.",
    "Celebrate small wins; they lead to big victories.",
    "Stay consistent — that’s the real magic.",
    "Speak kindly to yourself; you’re listening.",
    "Keep chasing improvement, not perfection.",
    "Surround yourself with people who inspire you.",
    "Don’t be afraid to start over — it’s a chance to do better.",
    "Listen more, speak less — wisdom comes in silence.",
    "Be proud of how far you’ve come.",
    "Forgive yourself for the mistakes you made while learning.",
    "Work hard in silence and let success make the noise.",
    "Choose kindness — it always comes back.",
    "Invest in yourself; you’re your best project.",
    "Take risks; comfort zones never made legends.",
    "Let go of what you can’t control.",
    "Be the reason someone smiles today.",
    "Keep learning — knowledge never goes out of style.",
    "Your time will come, just stay patient and focused.",
    "Focus on progress, not speed.",
    "Always remember: effort beats luck every time.",
    "Trust the timing of your life — it’s all unfolding perfectly."
];

// size is 20
const futurePredictions = [
    "You will achieve something big this year.",
    "You’ll travel to a place you’ve always dreamed of.",
    "You will meet someone who truly understands you.",
    "You’ll turn your passion into your career.",
    "You will become financially stable soon.",
    "You’ll make your family proud in ways you can’t imagine.",
    "You’ll discover a hidden strength within yourself.",
    "You will live the life you once prayed for.",
    "You’ll be surrounded by genuine people who care for you.",
    "You’ll experience love that feels effortless and pure.",
    "You will inspire others with your journey.",
    "You’ll heal from everything that once hurt you.",
    "You’ll find peace in your own company.",
    "You’ll achieve your goals one step at a time.",
    "You will surprise yourself with how far you go.",
    "You’ll laugh at the things that once made you cry.",
    "You’ll get an opportunity that changes everything.",
    "You’ll create something people will remember you for.",
    "You’ll become stronger, wiser, and happier than ever.",
    "You’ll finally feel proud of the person you’ve become."
];


const astroForm = document.querySelector("#astroForm")

function astroPredictions(e) {

    e.preventDefault()

    const name = document.querySelector("#name").value;

    const surname = document.querySelector("#surname").value;

    const day = parseInt(document.querySelector("#day").value);

    const month = parseInt(document.querySelector("#month").value);

    const year = parseInt(document.querySelector("#year").value);

    const text = `Hi ${name} ${surname} Your Zodiac sign is ${zodiacSings[month - 1]} ${compliments[day - 1]} ${recommendations[(year) % month]} ${futurePredictions[(name.length * surname.length) % 20]}`

    document.querySelector("#result").textContent = text;
}

astroForm.addEventListener("submit", astroPredictions)