console.log("alive");

const planets = [
    "Earth.png", "sun.png", "neptune .png", "moon.png", "Earth.png", "sun.png", "neptune .png", "moon.png"
]

var  cardpicked = [];

let score = 0;

var randomizedarray = planets.sort((a, b) => 0.5 - Math.random());

function settingupgrid() {
    console.log(randomizedarray);
    for (let i = 0; i < randomizedarray.length; i++) {
        console.log("creatinggrid");
        var newimg  = document.createElement('img');
        console.log(randomizedarray[i]);
        newimg.setAttribute('src', randomizedarray[i]);
        newimg.addEventListener('click', flip);
        document.getElementById("grid").appendChild(newimg);
    }
}

// Push cards selected to cardpicked array, and if there are two items in the array, then clear the array.
// If the two cards are the same, then proceed to both delete the cards from the array, as well as to delete the 

function flip() {
    let id = this.getAttribute('src');
    cardpicked.push(id);
    console.log(cardpicked);
    if (cardpicked[0] === cardpicked[1]) {
        console.log("we have found a match");
        score++;
        document.getElementById("score").innerHTML = score;
        console.log(score);
    }
    if (cardpicked.length === 2) {
        console.log("thearrayisfull");
        cardpicked = [];
    }
}

settingupgrid();