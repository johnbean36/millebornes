const buttonEl = document.getElementById("bu");
buttonEl.disabled = true;
let cardEl = [];
let count = 0;
let turn = 1;
let cardsPlayed = [];
let player1Hand = [];
let player2Hand = [];
let cardHand = [];
let player1Go = false;
let player2Go = false;
let player1Accident = false;
let player1OutOfGas = false;
let player1FlatTire = false;
let player1SpeedLimit = false;
let player1DrivingAce = false;
let player1FuelTruck = false;
let player1PunctureProof = false;
let player1EmergencyVehicle = false;
let player2Accident = false;
let player2OutOfGas = false;
let player2FlatTire = false;
let player2SpeedLimit = false;
let player2DrivingAce = false;
let player2FuelTruck = false;
let player2PunctureProof = false;
let player2EmergencyVehicle = false;
let handIndex = 0;

const HANDSIZE = 6;
const DECKSIZE = 99;

function init() {
    buttonEl = document.getElementById("bu");
    buttonEl.disabled = true;
    cardEl = [];
    count = 0;
    turn = 1;
    cardsPlayed = [];
    player1Hand = [];
    player2Hand = [];
    cardHand = [];
}

//Removes the clicked card from the players hand
function removeFromHand(cardIndex){
    handIndex = player1Hand.indexOf(cardIndex);
    player1Hand.splice(handIndex, 1);
}

//Function to choose a number from the deck of cards and returns that number
function chooseCard(){
    let cardNumber = 0;
    let guess = true;
    while(guess){
        cardNumber = Math.floor(Math.random() * DECKSIZE);
        if(cardsPlayed.length === DECKSIZE){
            return;
        }
        else if(!cardsPlayed.includes(cardNumber)){
            cardsPlayed.push(cardNumber);
            return cardNumber;
        }
    }
}



//Numbers of each type of card in Mille Bornes
const cardNumbers = {
    mile25: 10,
    mile50: 10,
    mile75: 10,
    mile100: 12,
    mile200: 4,
    accident: 3,
    outOfGas: 3,
    flatTire: 3,
    stop: 5,
    speedLimit: 4,
    repairs: 6,
    gasoline: 6,
    spareTire: 6,
    go: 14,
    drivingAce: 1,
    fuelTruck: 1,
    punctureProof: 1,
    emergencyVehicle: 1
};



//Cached elements
for(i = 1; i <= HANDSIZE; i++){
    cardHand.push(document.getElementById(`card${i}`));
}

divEl = document.getElementById("hand");

//Creating img objects to put card images into
for( i in cardNumbers){
    for(a = 0; a < cardNumbers[i]; a++){
        cardEl.push(document.createElement('img'))
    }
}

//Setting the image attribute for the playing cards
for (i = 0; i < cardNumbers['mile25']; i++){
    cardEl[i].setAttribute('src', './images/25.png');
}
count += cardNumbers['mile25'];
for (i = count; i < (cardNumbers['mile50'] + count); i++){
    cardEl[i].setAttribute('src', './images/50mile.png');
}
count += cardNumbers['mile50'];
for (i = count; i < (cardNumbers['mile75'] + count); i++){
    cardEl[i].setAttribute('src', './images/75mile.png');
}
count += cardNumbers['mile75'];
for (i = count; i < (cardNumbers['mile100'] + count); i++){
    cardEl[i].setAttribute('src', './images/100mile.png');
}
count += cardNumbers['mile100'];
for (i = count; i < (cardNumbers['mile200'] + count); i++){
    cardEl[i].setAttribute('src', './images/200mile.png');
}
count += cardNumbers['mile200'];
for (i = count; i < (cardNumbers['accident'] + count); i++){
    cardEl[i].setAttribute('src', './images/accident.png');
}
count += cardNumbers['accident'];
for (i = count; i < (cardNumbers['outOfGas'] + count); i++){
    cardEl[i].setAttribute('src', './images/out_of_gas.png');
}
count += cardNumbers['outOfGas'];
for (i = count; i < (cardNumbers['flatTire'] + count); i++){
    cardEl[i].setAttribute('src', './images/flattire.png');
}
count += cardNumbers['flatTire'];
for (i = count; i < (cardNumbers['stop'] + count); i++){
    cardEl[i].setAttribute('src', './images/stop_card.jpg');
}
count += cardNumbers['stop'];
for(i = count; i < (cardNumbers['speedLimit'] + count); i++){
    cardEl[i].setAttribute('src', './images/speed_limit.png');
}
count += cardNumbers['speedLimit'];
for ( i = count; i < (cardNumbers['repairs'] + count); i++){
    cardEl[i].setAttribute('src', './images/repairs.png');
}
count += cardNumbers['repairs'];
for ( i = count; i < (cardNumbers['gasoline'] + count); i++){
    cardEl[i].setAttribute('src', './images/gasoline.png');
}
count += cardNumbers['gasoline'];
for (i = count; i < (cardNumbers['spareTire'] + count); i++){
    cardEl[i].setAttribute('src', './images/spare-tire.png');
}
count += cardNumbers['spareTire'];
for (i = count; i < (cardNumbers['go'] + count); i++){
    cardEl[i].setAttribute('src', './images/greenlight.png');
}
count += cardNumbers['go'];
cardEl[count].setAttribute('src', './images/driving_ace.png');
count += 1;
cardEl[count].setAttribute('src', './images/fueltruck.png');
count += 1;
cardEl[count].setAttribute('src', './images/puncture_proof.png');
count += 1;
cardEl[count].setAttribute('src', './images/emergency_vehicle.png');

for ( i = 0; i < DECKSIZE; i++){
    cardEl[i].setAttribute('draggable', true);
    cardEl[i].addEventListener('dragstart', (e) => {
        console.log("hello");
    });
}

for( let i = 1; i <= 2; i++){
    for(let j = 0; j < HANDSIZE; j++){
        if(i === 1){
            player1Hand.push(cardEl[chooseCard()]);
        }
        else if(i === 2){
            player2Hand.push(cardEl[chooseCard()]);
        }
    }
}

divEl.addEventListener('click', (e) => {
    const cardIndex = cardEl.indexOf(e.target);
    if (turn === 1){
        if(cardIndex >= 82 && cardIndex <= 95){
            player1Go = true;
            removeFromHand(cardEl(cardIndex));
            turn = 2;
            for (let i =0; i < HANDSIZE; i++){
                cardHand[i].removeChild();
            }
            for (let i = 0; i < HANDSIZE; i++){
                cardHand[i].appendChild(player2Hand[i]);
            }
        }
        else if(cardIndex >= 0 && cardIndex <= 45){
            if(player1Go === false){
                console.log("Play a Go card first");
            }
        }
        else if(cardIndex >= 46 && cardIndex <= 48){
            accidentL = document.getElementById('p2a');
            accidentL.setAttribute('src', './images/lighton.png');
            player2Accident = true;
            removeFromHand(cardEl(cardIndex));
            turn = 2;
            for (let i =0; i < HANDSIZE; i++){
                cardHand[i].removeChild();
            }
            for (let i = 0; i < HANDSIZE; i++){
                cardHand[i].appendChild(player2Hand[i]);
            }
        }
        else if(cardIndex >= 49 && cardIndex <= 51){
            gasL = document.getElementById('p2o');
            gasL.setAttribute('src', './images/lighton.png');
            player2OutOfGas = true;
            removeFromHand(cardEl(cardIndex));
            turn = 2;
        }
        else if(cardIndex >= 52 && cardIndex <= 54){
            flatL = document.getElementById('p2fl');
            flatL.setAttribute('src', './images/lighton.png');
            player2FlatTire = true;
            removeFromHand(cardEl(cardIndex));
            turn = 2;
        }
        else if(cardIndex >= 60 && cardIndex <= 63){
            limitL = document.getElementById('p2s');
            limitL.setAttribute('src', './images/lighton.png');
            player2SpeedLimit = true;
            removeFromHand(cardEl(cardIndex));
            turn = 2;
        }
        else if(cardIndex === 96){
            ace = document.getElementById('p1ac');
            ace.setAttribute('src', './images/lighton.png');
            Player1DrivingAce = true;
            removeFromHand(cardEl(cardIndex));
            turn = 2;
        }
        else if(cardIndex === 97){
            fuelT = document.getElementById('p1f');
            fuelT.setAttribute('src', './images/lighton');
            player1FuelTruck = true;
            removeFromHand(cardEl(cardIndex));
            turn = 2;
        }
        else if(cardIndex === 98){
            punture = document.getElementById('p1t');
            puncture.setAttribute('src', './images/lighton');
            player1PunctureProof = true;
            removeFromHand(cardEl(cardIndex));
            turn = 2;
        }
        else if(cardIndex === 99){
            EV = document.getElementById('p1ev');
            EV.setAttribute('src', './images/lighton.png');
            player1EmergencyVehicle = true;
            removeFromHand(cardEl(cardIndex));
            turn = 2;
        }
    }
    else if (turn === 2){
        for (let i =0; i < HANDSIZE; i++){
            cardHand[i].removeChild();
        }
        for (let i = 0; i < HANDSIZE; i++){
            cardHand[i].appendChild(player2Hand[i]);
        }
        if(cardIndex >= 82 && cardIndex <= 95){
            player2Go = true;
            removeFromHand(cardEl(cardIndex));
            turn = 1;
        }
        else if(cardIndex >= 0 && cardIndex <= 45){
            if(player2Go === false){
                console.log("Play a Go card first");
            }
        }
        else if(cardIndex >= 46 && cardIndex <= 48){
            accidentL = document.getElementById('p1a');
            accidentL.setAttribute('src', './images/lighton.png');
            player1Accident = true;
            removeFromHand(cardEl(cardIndex));
            turn = 1;
        }
        else if(cardIndex >= 49 && cardIndex <= 51){
            gasL = document.getElementById('p1o');
            gasL.setAttribute('src', './images/lighton.png');
            player1OutOfGas = true;
            removeFromHand(cardEl(cardIndex));
            turn = 1;
        }
        else if(cardIndex >= 52 && cardIndex <= 54){
            flatL = document.getElementById('p1fl');
            flatL.setAttribute('src', './images/lighton.png');
            player1FlatTire = true;
            removeFromHand(cardEl(cardIndex));
            turn = 1;
        }
        else if(cardIndex >= 60 && cardIndex <= 63){
            limitL = document.getElementById('p1s');
            limitL.setAttribute('src', './images/lighton.png');
            player1SpeedLimit = true;
            removeFromHand(cardEl(cardIndex));
            turn = 1;
        }
        else if(cardIndex === 96){
            ace = document.getElementById('p2ac');
            ace.setAttribute('src', './images/lighton.png');
            Player2DrivingAce = true;
        }
        else if(cardIndex === 97){
            fuelT = document.getElementById('p2f');
            fuelT.setAttribute('src', './images/lighton');
            player2FuelTruck = true;
            removeFromHand(cardEl(cardIndex));
            turn = 1;
        }
        else if(cardIndex === 98){
            punture = document.getElementById('p2t');
            puncture.setAttribute('src', './images/lighton');
            player2PunctureProof = true;
            removeFromHand(cardEl(cardIndex));
            turn = 1;
        }
        else if(cardIndex === 99){
            EV = document.getElementById('p2ev');
            EV.setAttribute('src', './images/lighton.png');
            player2EmergencyVehicle = true;
            removeFromHand(cardEl(cardIndex));
            turn = 1;
        }
    }
});

//divEl.addEventListener('dragstart', (e) => {
//    console.log("");
//});

for (let i = 0; i < HANDSIZE; i++){
    cardHand[i].appendChild(player1Hand[i]);
}
