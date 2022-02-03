console.log("alive");

const planets = [
    "Earth.png", "sun.png", "neptune .png", "moon.png", "Earth.png", "sun.png", "neptune .png", "moon.png"
]

var  cardpicked = [];
var cardids = [];
var names = [];

let score = 0;
var randomizedarray = planets.sort((a, b) => 0.5 - Math.random());

function settingupgrid() {
    console.log(randomizedarray);
    for (let i = 0; i < randomizedarray.length; i++) {
        console.log("creatinggrid");
        var newimg  = document.createElement('img');
        console.log(randomizedarray[i]);
        newimg.setAttribute('src', randomizedarray[i]);
        newimg.setAttribute('id', (i + 1));
        newimg.setAttribute('name', randomizedarray[i]);
        newimg.addEventListener('click', flip);
        document.getElementById("grid").appendChild(newimg);
        var abc = document.querySelectorAll("img");
        for (let x = 0; x < abc.length; x++) {
            setTimeout(function() {
                abc[x].setAttribute('src', "quesitonmark.png");
            }, 3000)
        }
    }
}

// Push cards selected to cardpicked array, and if there are two items in the array, then clear the array.
// If the two cards are the same, then proceed to both delete the cards from the array, as well as to delete the 

function flip() {
    let source = this.getAttribute('src');
    let id = this.getAttribute('id');
    let actualsource = this.getAttribute('name');

    this.setAttribute('src', actualsource);

    cardids.push(id);
    cardpicked.push(source);
    names.push(actualsource);
    console.log(cardids);

    if (names[0] === names[1]) {
        console.log("we have found a match");
        score++;
        document.getElementById("score").innerHTML = score;
        console.log(score);
        var y = document.getElementById(cardids[0]);
        var z = document.getElementById(cardids[1]);
        y.removeEventListener('click', flip);
        z.removeEventListener('click', flip);
        setTimeout(function() {
           y.remove();
           z.remove();
        }, 2000)
        cardids.length = 0;
        names.length = 0;
        console.log(cardids);
    }
    if (cardids.length > 2) {
        console.log("thearrayisfull");
        var images = document.querySelectorAll("img");
        setTimeout(2000);
        for (let y = 0; y < images.length; y++) {
            if (images[y].getAttribute('src') !="quesitonmark.png") {
                images[y].setAttribute('src', "quesitonmark.png");
                console.log("Changed images back.");
            }
        }
        cardids.length = 0;
        names.length = 0;
        cardpicked.length = 0;
    }
}

settingupgrid();
