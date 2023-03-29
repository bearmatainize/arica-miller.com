const questions = [
    {
        question: "What was the first commercially successful video game?",
        answer1: "Space Invaders",
        answer2: "Pac-Man",
        answer3: "Galaga",
        answer4: "Pong",
        correctAnswer: "answer4"
    },

    {
        question: "What is the best selling videogame of all time?",
        answer1: "Minecraft",
        answer2: "Wii Sports",
        answer3: "Original Super Mario Bros",
        answer4: "Grand Theft Auto V",
        correctAnswer: "answer1"
    },

    {
        question: "What is the highest-selling gaming console to date?",
        answer1: "Wii",
        answer2: "Playstation 2",
        answer3: "Nintendo DS",
        answer4: "Xbox 360",
        correctAnswer: "answer2"
    },

    {
        question: "What food was the character Pac Man modeled after?",
        answer1: "Pizza",
        answer2: "Cake",
        answer3: "Cheese",
        answer4: "Pie",
        correctAnswer: "answer1"
    },

    {
        question: "In the original arcade version of Donkey Kong, what was the name of the character that would later be known as Mario?",
        answer1: "Jump Man",
        answer2: "Plumber",
        answer3: "Luigi",
        answer4: "Hammer Man",
        correctAnswer: "answer1"
    },

    {
        question: "What was the first video game character to have a balloon featured in the Macy’s Thanksgiving Day Parade?",
        answer1: "Pikachu",
        answer2: "Mario",
        answer3: "Crash",
        answer4: "Sonic the Hedgehog",
        correctAnswer: "answer4"
    },

    {
        question: "What year was the first virtual reality headset created?",
        answer1: "1995",
        answer2: "1990",
        answer3: "2001",
        answer4: "2008",
        correctAnswer: "answer1"
    },

    {
        question: "What popular dining franchise is the founder of Atari also responsible for?",
        answer1: "Pizza Hut",
        answer2: "Dominos",
        answer3: "Sbarro",
        answer4: "Chuck E Cheese",
        correctAnswer: "answer4"
    },

    {
        question: "What are the paintings in Minecraft modeled after?",
        answer1: "Counterstrike maps",
        answer2: "Real paintings",
        answer3: "Developers' surroundings",
        answer4: "Different countires' landscapes",
        correctAnswer: "answer2"
    },

    {
        question: "In Minecraft, what real-life animals portrayed the sound effects of the ghast enemies?",
        answer1: "Dog",
        answer2: "Fox",
        answer3: "Opossum",
        answer4: "Cat",
        correctAnswer: "answer4"
    },

    {
        question: "What is the name of the first video game to be played in outer space?",
        answer1: "Starcraft",
        answer2: "Pong",
        answer3: "Space Invaders",
        answer4: "Star Wars: Rogue Squadron",
        correctAnswer: "answer1"
    },

    {
        question: "What United States president was asked (and declined) to voice the in-game president character in Fallout 3?",
        answer1: "Ronald Reagan",
        answer2: "George W. Bush",
        answer3: "George H.W. Bush",
        answer4: "Bill Clinton",
        correctAnswer: "answer4"
    },

    {
        question: "What is the name of the planet that is home to the game “Gears of War?”",
        answer1: "Reach",
        answer2: "Sera",
        answer3: "Alrest",
        answer4: "Planet 4546B",
        correctAnswer: "answer2"
    },

    {
        question: "What time period was L.A. Noire modeled after?",
        answer1: "1940s",
        answer2: "1960s",
        answer3: "1920s",
        answer4: "1890s",
        correctAnswer: "answer1"
    },

    {
        question: "What American car manufacturer inspired the cars in Fallout 3?",
        answer1: "Jeep",
        answer2: "Cadillac",
        answer3: "Chevy",
        answer4: "Ford",
        correctAnswer: "answer4"
    },

    {
        question: "What band has made more sales off of its Guitar Hero album than any of its actual recorded albums?",
        answer1: "Metallica",
        answer2: "Guns N' Roses",
        answer3: "Aerosmith",
        answer4: "Foo Fighters",
        correctAnswer: "answer3"
    },

    {
        question: "What video game franchise does Rooster Teeth use for their show “Red vs. Blue?”",
        answer1: "Counter Strike",
        answer2: "Halo",
        answer3: "Minecraft",
        answer4: "Garry's Mod",
        correctAnswer: "answer2"
    },

    {
        question: "When Google created a playable Pac Man game for its homepage in 2010, how many hours of gameplay did it see from the collective internet?",
        answer1: "1 million",
        answer2: "3 million",
        answer3: "5 million",
        answer4: "10 million",
        correctAnswer: "answer3"
    },

    {
        question: "The Obama campaign paid for in-game advertising in what game?",
        answer1: "Burnout Paradise",
        answer2: "Grand Theft Auto IV",
        answer3: "Call of Duty: World at War",
        answer4: "FIFA 09",
        correctAnswer: "answer1"
    },

    {
        question: "What year was the Nintendo Entertainment System (NES) released in America?",
        answer1: "1985",
        answer2: "1986",
        answer3: "1988",
        answer4: "1989",
        correctAnswer: "answer2"
    }

]

let shuffledQuestions = questions //array to hold shuffled questions

function handleQuestions() {
    //function to shuffle questions and push to shuffledQuestion array
    let currentIndex = shuffledQuestions.length, randomIndex;

    //While there remain elements to shuffle
    while (currentIndex != 0) {
        //Pick a random element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        //Swap it with the current element
        [shuffledQuestions[currentIndex], shuffledQuestions[randomIndex]] = [shuffledQuestions[randomIndex], shuffledQuestions[currentIndex]];
    }
    indexNumber = 0
    nextQuestion(0)
}

//function for displaying next question in the array to dom
function nextQuestion(index) {
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("answer-one-label").innerHTML = currentQuestion.answer1;
    document.getElementById("answer-two-label").innerHTML = currentQuestion.answer2;
    document.getElementById("answer-three-label").innerHTML = currentQuestion.answer3;
    document.getElementById("answer-four-label").innerHTML = currentQuestion.answer4;
}

function revealAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctAnswer //gets current Question's answer
    const answers = document.getElementsByName("answer"); //gets all elements in dom with name of 'answer' (in this the radio inputs)
    let correctAnswer = null

    answers.forEach((answer) => {
        if (answer.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctAnswer = answer.labels[0].id
        }
    })

    answers.forEach((answer) => {
        document.getElementById(correctAnswer).style.backgroundColor = "limegreen"
    })
}

function nextQuestionPress() {
    indexNumber++
    const answers = document.getElementsByName("answer");
    answers.forEach((answer) => {
        document.getElementById(answer.labels[0].id).style.backgroundColor = ""
    })
    nextQuestion(indexNumber)
}