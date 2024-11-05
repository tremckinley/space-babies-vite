const guessNames = [
    {
        "name": "Alice",
        "gender": "girl",
        "popularity": "Top 10",
        "country": "England",
        "meaning": "Noble",
        "celebrity": "Alice in Wonderland, a beloved character"
    },
    {
        "name": "Bob",
        "gender": "boy",
        "popularity": "Top 50",
        "country": "England",
        "meaning": "Gift of God",
        "celebrity": "Bob Marley, a famous reggae musician"
    },
    {
        "name": "Charlie",
        "gender": "boy",
        "popularity": "Top 20",
        "country": "Germany",
        "meaning": "Free Man",
        "celebrity": "Charlie Chaplin, a silent film legend"
    },
    {
        "name": "Diana",
        "gender": "girl",
        "popularity": "Top 100",
        "country": "Latin",
        "meaning": "Divine, Heavenly",
        "celebrity": "Princess Diana, a beloved British royal"
    },
    {
        "name": "Ethan",
        "gender": "boy",
        "popularity": "Top 25",
        "country": "Hebrew",
        "meaning": "Strong, Enduring",
        "celebrity": "Ethan Hawke, an Academy Award-nominated actor"
    },
    {
        "name": "Fiona",
        "gender": "girl",
        "popularity": "Top 75",
        "country": "Scotland",
        "meaning": "Fair, White",
        "celebrity": "Fiona Apple, a Grammy-winning singer-songwriter"
    },
    {
        "name": "George",
        "gender": "boy",
        "popularity": "Top 30",
        "country": "Greek",
        "meaning": "Farmer, Earthworker",
        "celebrity": "George Clooney, an Academy Award-winning actor"
    },
    {
        "name": "Hannah",
        "gender": "girl",
        "popularity": "Top 20",
        "country": "Hebrew",
        "meaning": "Grace, Favor",
        "celebrity": "Hannah Montana, a famous fictional character"
    },
    {
        "name": "Isaac",
        "gender": "boy",
        "popularity": "Top 40",
        "country": "Hebrew",
        "meaning": "Laughter",
        "celebrity": "Isaac Newton, a renowned physicist"
    },
    {
        "name": "Julia",
        "gender": "girl",
        "popularity": "Top 60",
        "country": "Latin",
        "meaning": "Youthful, Downy",
        "celebrity": "Julia Roberts, an Academy Award-winning actress"
    },
    {
        "name": "Kevin",
        "gender": "boy",
        "popularity": "Top 80",
        "country": "Irish",
        "meaning": "Kind, Gentle",
        "celebrity": "Kevin Hart, a famous comedian and actor"
    },
    {
        "name": "Luna",
        "gender": "girl",
        "popularity": "Top 15",
        "country": "Latin",
        "meaning": "Moon",
        "celebrity": "Luna Lovegood, a beloved character from Harry Potter"
    },
    {
        "name": "Michael",
        "gender": "boy",
        "popularity": "Top 10",
        "country": "Hebrew",
        "meaning": "Who is like God?",
        "celebrity": "Michael Jordan, a legendary basketball player"
    },
    {
        "name": "Nina",
        "gender": "girl",
        "popularity": "Top 90",
        "country": "Spanish",
        "meaning": "Little Girl",
        "celebrity": "Nina Simone, a famous singer and musician"
    },
    {
        "name": "Oscar",
        "gender": "boy",
        "popularity": "Top 35",
        "country": "Irish",
        "meaning": "Spear of God",
        "celebrity": "Oscar Wilde, a famous playwright and poet"
    },
    {
        "name": "Penelope",
        "gender": "girl",
        "popularity": "Top 25",
        "country": "Greek",
        "meaning": "Weaver",
        "celebrity": "Penelope Cruz, an Academy Award-winning actress"
    },
    {
        "name": "Quinn",
        "gender": "unisex",
        "popularity": "Top 50",
        "country": "Irish",
        "meaning": "Wisdom, Chief",
        "celebrity": "Quinn Fabray, a character from the TV show Glee"
    },
    {
        "name": "Ryan",
        "gender": "boy",
        "popularity": "Top 15",
        "country": "Irish",
        "meaning": "Little King",
        "celebrity": "Ryan Reynolds, a famous actor"
    },
    {
        "name": "Sophia",
        "gender": "girl",
        "popularity": "Top 5",
        "country": "Greek",
        "meaning": "Wisdom",
        "celebrity": "Sophia Loren, a famous actress"
    },
    {
        "name": "Thomas",
        "gender": "boy",
        "popularity": "Top 50",
        "country": "Aramaic",
        "meaning": "Twin",
        "celebrity": "Thomas Edison, a famous inventor"
    },
    {
        "name": "Ursula",
        "gender": "girl",
        "popularity": "Top 200",
        "country": "Latin",
        "meaning": "Little Bear",
        "celebrity": "Ursula K. Le Guin, a famous author"
    },
    {
        "name": "Victor",
        "gender": "boy",
        "popularity": "Top 75",
        "country": "Latin",
        "meaning": "Conqueror",
        "celebrity": "Victor Hugo, a famous author"
    },
    {
        "name": "Wendy",
        "gender": "girl",
        "popularity": "Top 150",
        "country": "English",
        "meaning": "Friend",
        "celebrity": "Wendy Darling, a character from Peter Pan"
    },
    {
        "name": "Xander",
        "gender": "boy",
        "popularity": "Top 100",
        "country": "Greek",
        "meaning": "Defender of the People",
        "celebrity": "Xander Cage, a character from the movie xXx"
    },
    {
        "name": "Yara",
        "gender": "girl",
        "popularity": "Top 300",
        "country": "Arabic",
        "meaning": "Small Butterfly",
        "celebrity": "Yara Shahidi, a famous actress"
    },
    {
        "name": "Zachary",
        "gender": "boy",
        "popularity": "Top 45",
        "country": "Hebrew",
        "meaning": "The Lord Remembers",
        "celebrity": "Zachary Levi, a famous actor"
    },
    {
        "name": "Ava",
        "gender": "girl",
        "popularity": "Top 3",
        "country": "Latin",
        "meaning": "Life",
        "celebrity": "Ava Gardner, a famous actress"
    },
    {
        "name": "Liam",
        "gender": "boy",
        "popularity": "Top 1",
        "country": "Irish",
        "meaning": "Strong-Willed Warrior",
        "celebrity": "Liam Neeson, a famous actor"
    },
    {
        "name": "Mia",
        "gender": "girl",
        "popularity": "Top 10",
        "country": "Latin",
        "meaning": "Mine",
        "celebrity": "Mia Farrow, a famous actress"
    },
    {
        "name": "Noah",
        "gender": "boy",
        "popularity": "Top 2",
        "country": "Hebrew",
        "meaning": "Rest, Comfort",
        "celebrity": "Noah Centineo, a famous actor"
    },
    {
        "name": "Olivia",
        "gender": "girl",
        "popularity": "Top 1",
        "country": "Latin",
        "meaning": "Olive Tree",
        "celebrity": "Olivia Wilde, a famous actress"
    },
    {
        "name": "James",
        "gender": "boy",
        "popularity": "Top 5",
        "country": "Hebrew",
        "meaning": "Supplanter",
        "celebrity": "James Cameron, a famous director"
    },
    {
        "name": "Emily",
        "gender": "girl",
        "popularity": "Top 12",
        "country": "Latin",
        "meaning": "Rival",
        "celebrity": "Emily Dickinson, a famous poet"
    },
    {
        "name": "Aiden",
        "gender": "boy",
        "popularity": "Top 20",
        "country": "Irish",
        "meaning": "Little Fire",
        "celebrity": "Aiden Turner, a famous actor"
    },
    {
        "name": "Chloe",
        "gender": "girl",
        "popularity": "Top 25",
        "country": "Greek",
        "meaning": "Blooming",
        "celebrity": "Chloe Grace Moretz, a famous actress"
    },
    {
        "name": "Benjamin",
        "gender": "boy",
        "popularity": "Top 6",
        "country": "Hebrew",
        "meaning": "Son of the Right Hand",
        "celebrity": "Benjamin Franklin, a famous inventor and statesman"
    },
    {
        "name": "Grace",
        "gender": "girl",
        "popularity": "Top 15",
        "country": "Latin",
        "meaning": "Grace",
        "celebrity": "Grace Kelly, a famous actress and princess"
    },
    {
        "name": "Henry",
        "gender": "boy",
        "popularity": "Top 30",
        "country": "German",
        "meaning": "Ruler of the Household",
        "celebrity": "Henry Cavill, a famous actor"
    },
    {
        "name": "Isabella",
        "gender": "girl",
        "popularity": "Top 5",
        "country": "Hebrew",
        "meaning": "Devoted to God",
        "celebrity": "Isabella Rossellini, a famous actress"
    },
    {
        "name": "Jacob",
        "gender": "boy",
        "popularity": "Top 10",
        "country": "Hebrew",
        "meaning": "Supplanter",
        "celebrity": "Jacob Tremblay, a famous actor"
    }
]

export {guessNames}