console.log("alive");

const planets = [
    "Earth.png", "sun.png", "neptune .png", "moon.png", "Earth.png", "sun.png", "neptune .png", "moon.png"
]

var  cardpicked = [];
var  cardids = [];

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

function flip() {
    var source = this.getAttribute('src');  
    var id1 = this.getAttribute('id');
    console.log(id1);
    console.log(cardids)

    cardids.push(id1);
    cardpicked.push(source);

    if (source[0] === source[1]) {
        console.log("we have found a match");
        score++;
        document.getElementById("score").innerHTML = score;
        var y = document.getElementById(cardids[0]);
        var z = document.getElementById(cardids[1]);
        y.removeEventListener('click', flip);
        z.removeEventListener('click', flip);
    }
    if (cardids.length > 2) {
        console.log("thearrayisfull");
        var images = document.querySelectorAll("img");
        setTimeout(2000);
        for (let y = 0; y < images.length; y++) {
            console.log(images[y]);
            if (images[y].getAttribute('src') != "whitesquare.png") {
                images[y].setAttribute('src', "whitesquare.png");
                console.log("Changed images back.");
            }
        }
        cardids.length = 0;
        cardpicked.length = 0;
    }
}

settingupgrid();
