console.log("alive");

const planets = [
    "Earth.png", "sun.png", "neptune .png", "moon.png", "Earth.png", "sun.png", "neptune .png", "moon.png"
]

var  cardpicked = [];
var cardids = [];

let score = 0;

var randomizedarray = planets.sort((a, b) => 0.5 - Math.random());

function settingupgrid() {
    console.log(randomizedarray);
    for (let i = 0; i < randomizedarray.length; i++) {
        console.log("creatinggrid");
        var newimg  = document.createElement('img');
        console.log(randomizedarray[i]);
        newimg.setAttribute('src', randomizedarray[i]);
        newimg.setAttribute('id', randomizedarray[i]);
        newimg.addEventListener('click', flip);
        document.getElementById("grid").appendChild(newimg);
        var abc = document.querySelectorAll("img");
        for (let x = 0; x < abc.length; x++) {
            setTimeout(function() {
                abc[x].setAttribute('src', "whitesquare.png");
            }, 3000)
        }
    }
}

// Push cards selected to cardpicked array, and if there are two items in the array, then clear the array.
// If the two cards are the same, then proceed to both delete the cards from the array, as well as to delete the 

function flip() {
    let source = this.getAttribute('src');
    let id = this.getAttribute('id');

    this.setAttribute('src', id);

    cardids.push(id);
    cardpicked.push(source);
    console.log(cardids);

    if (cardids[0] === cardids[1]) {
        console.log("we have found a match");
        score++;
        document.getElementById("score").innerHTML = score;
        console.log(score);
        
    }
    if (cardids.length > 2) {
        console.log("thearrayisfull");
        var images = document.querySelectorAll("img");
        setTimeout(2000);
        for (let y = 0; y < images.length; y++) {
            if (images[y].getAttribute('src') != "whitesquare.png") {
                images[y].setAttribute('src', "whitesquare.png");
                console.log("Changed images back.");
            }
        }
        cardids = [];
    }
}

settingupgrid();
