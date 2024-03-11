function init() {
    const buttonEl = document.getElementById("bu");
    buttonEl.disabled = true;
    let cardEl = [];
    let count = 0;
    let turn = 1;
    let cardsPlayed = [];
    let player1Hand = [];
    let player2Hand = [];
    let cardHand = [];
}

//Function to choose a number from the deck of cards and returns that number
function chooseCard(){
    let cardNumber = 0;
    let guess = true;
    while(guess){
        cardNumber = Math.floor(Math.random() * 96);
        if(!cardsPlayed.includes(cardNumber)){
            cardsPlayed.push(cardNumber);
            return cardNumber;
        }
    }
}

init();

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
for(i = 1; i <= 6; i++){
    cardHand.push(document.getElementById(`card${i}`));
}

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

for( let i = 1; i <= 2; i++){
    for(let j = 0; j < 6; j++){
        `player${i}Hand`.push(cardEl[chooseCard()]);
    }
}




