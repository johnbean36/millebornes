let cardEl = [];
let count = 0;
let turn = 1;
let cardsPlayed = [];
const playerHand = []
playerHand[0] = [];
playerHand[1] = [];
let cardHand = [];
let playerGo = [];
playerGo[0] = false;
playerGo[1] = false;
let playerAccident = [];
playerAccident[0] = false;
playerAccident[1] = false;
let playerOutofGas = [];
playerOutofGas[0] = false;
playerOutofGas[1] = false;
let playerFlatTire = [];
playerFlatTire[0] = false;
playerFlatTire[1] = false;
let playerSpeedLimit = [];
playerSpeedLimit[0] = false;
playerSpeedLimit[1] = false;
let playerDrivingAce = [];
playerDrivingAce[0] = false;
playerDrivingAce[1] = false;
let playerFuelTruck = [];
playerFuelTruck[0] = false;
playerFuelTruck[1] = false;
let playerPunctureProof = [];
playerPunctureProof[0] = false;
playerPunctureProof[1] = false;
let playerEmergencyVehicle = [];
playerEmergencyVehicle[0] = false;
playerEmergencyVehicle[1] = false;
let handIndex = 0;
let playerRoundDistance = [];
playerRoundDistance[0] = 0;
playerRoundDistance[1] = 0;
let playerRoundScore = [];
playerRoundScore[0] = 0;
playerRoundScore[1] = 0;
let playerTotalScore = [];
playerTotalScore[0] = 0;
playerTotalScore[1] = 0;
let winner = false;
let playerDistance200 = [];
playerDistance200[0] = 0;
playerDistance200[1] = 0;
let pSafety = [];
pSafety[0] = 0;
pSafety[1] = 0;


let handsize = 6;
const DECKSIZE = 106;

//Function to reset variables for next round
function init() {
    buttonEl = document.getElementById("bu");
    buttonEl.disabled = true;
    cardEl = [];
    count = 0;
    turn = 1;
    cardsPlayed = [];
    playerHand[0] = [];
    playerHand[1] = [];
    cardHand = [];
    playerGo[0] = false;
    playerGo[1] = false;
    playerAccident[0] = false;
    playerAccident[1] = false;
    playerOutofGas[0] = false;
    playerOutofGas[1] = false;
    playerFlatTire[0] = false;
    playerFlatTire[1] = false;
    playerSpeedLimit[0] = false;
    playerSpeedLimit[1] = false;
    playerDrivingAce[0] = false;
    playerDrivingAce[1] = false;
    playerFuelTruck[0] = false;
    playerFuelTruck[1] = false;
    playerPunctureProof[0] = false;
    playerPunctureProof[1] = false;
    playerEmergencyVehicle[0] = false;
    playerEmergencyVehicle[1] = false;
    playerRoundScore[0] = 0;
    playerRoundScore[1] = 0;
    playerRoundScore[0] = 0;
    playerRoundScore[1] = 0;
    playerDistance200[0] = 0;
    playerDistance200[1] = 0;
    pSafety[0] = 0;
    pSafety[1] = 0;
}

//Cached elements
for(i = 1; i <= handsize; i++){
    cardHand.push(document.getElementById(`card${i}`));
}
const divEl = document.getElementById("hand");
const p1rsLabel = document.getElementById('p1rs');
const p2rsLabel = document.getElementById('p2rs');
const pMessage = document.getElementById('tips');
const discard = document.getElementById('discard');
const p1go = document.getElementById('p1go');
const p2go = document.getElementById('p2go');
const buttonEl = document.getElementById("bu");
buttonEl.disabled = true;

//Removes the clicked card from the players hand
function removeFromHand(cardIndex, player){
   handIndex = player.indexOf(cardIndex);
   player.splice(handIndex, 1);
}

//Functions

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

//checks to see if the player has any hazards
function checkHazard(player){
    if(player === 1){
        a = 0;
    }
    else if(player === 2){
        a = 1;
    }
    if (playerAccident[a]){
        return true;
    }
    else if(playerOutofGas[a]){
        return true;
    }
    else if(playerFlatTire[a]){
        return true;
    }
}

//clears the cards from the divs
function clearHand(){
    for( let i = 0; i < handsize; i++){
        cardHand[i].removeChild(cardHand[i].firstChild);
    }
}
function newHand(player){
    if(player === 1){
        for (let i = 0; i < cardHand.length; i++) {
            cardHand[i].appendChild(playerHand[0][i]);
        }
    }
    else if(player === 2){
        for (let i = 0; i < cardHand.length; i++) {
            cardHand[i].appendChild(playerHand[1][i]);
        }
    }

}

//function to calculate the winner based on their score
function determineWinner(){
    //calculate player 1 round score
    playerRoundScore[0] = playerRoundDistance[0];
    if(playerRoundDistance[0] == 1000){
        playerRoundScore[0] += 400;
    }
    playerRoundScore[0] += (pSafety[0] * 100);
    if(pSafety[0] === 4){
        playerRoundScore[0] += 300;
    }
    if(playerDistance200[0] === 0){
        playerRoundScore[0] += 300;
    }
    if(playerRoundDistance[1] === 0){
        playerRoundScore[0] += 500;
    }
    //Calculate player 2 round score
    playerRoundScore[1] = playerRoundDistance[1];
    if(playerRoundDistance[1] === 1000){
        playerRoundScore[1] += 400;
    }
    playerRoundScore[1] += (pSafety[1] * 100);
    if(pSafety[1] === 4){
        playerRoundScore[1] += 300;
    }
    if(playerDistance200[1] === 0){
        playerRoundScore[1] += 300;
    }
    if(playerRoundDistance[0] === 0){
        playerRoundScore[1] += 500;
    }
    if(playerRoundScore[0] >= playerRoundScore[1]){
        playerMsg("Player 1 has won the round!");
        init();
    }
    else if(playerRoundScore[1] >= playerRoundScore[0]){
        playerMsg("Player 2 has won the round!");
        init();
    }
    if(playerRoundScore[0] >= 5000){
        playerMsg("Player 1 has won");
    }
    else if(playerRoundScore[1] >= 5000){
        playerMsg("Player 2 has won")
    }
}

//sets a message for the player
function playerMsg(message){
    pMessage.innerText = message;
}

function nCardsPlayed(){
    if(cardsPlayed.length === DECKSIZE){
        winner = true;
        determineWinner();
    }
}

//Adds a card to the players hand
function addCardToHand(){
    if(turn === 1){
        playerHand[0].push(cardEl[chooseCard()]);
    }
    else if(turn === 2){
        playerHand[1].push(cardEl[chooseCard()]);
    }
}

//When a Go card is played this function is called
function goCard(cardIndex){
    let a = 0;
    let pGo;
    if(turn === 1){
        a = 0;
        pGo = document.getElementById("p1go");
    }
    else if(turn === 2){
        a = 1;
        pGo = document.getElementById("p2go");
    }
    if(playerGo[a] === true){
        playerMsg("Go card has already been played");
        return;
    }
    else if(checkHazard(turn)){
        playerMsg("Clear the hazard first");
        return;
    }
    else{
        playerGo[a] = true;
        pGo.setAttribute("src", "./images/lighton.png");
        removeFromHand(cardEl[cardIndex], playerHand[a]);
        nCardsPlayed();
        addCardToHand();
        if (turn === 1){
            turn = 2;
        }
        else if( turn === 2){
            turn = 1;
        }
        clearHand();
        newHand(turn);
        playerMsg(`Player ${turn}'s Turn`);
        return;
    }
}

//When a mile card is played this function is called
function mileCard(cardIndex, mile){
    let a = 0;
    let prsLabel;
    if(turn === 1){
        a = 0;
        prsLabel = document.getElementById('p1rd');
    }
    else if(turn === 2){
        a = 1;
        prsLabel = document.getElementById('p2rd');
    }
    if(!checkHazard(turn) && playerGo[a]){
        if((playerRoundDistance[a] + mile) > 1000){
            playerMsg("Distance will be greater than 1000");
            return;
        }
        if(playerSpeedLimit[a] && mile > 50){
            playerMsg("Play an End of Limit card");
            return;
        }
        playerRoundDistance[a] += mile;
        if(mile === 200){
            playerDistance200[a] += 1;
        }
        prsLabel.innerText = playerRoundDistance[a];
        nCardsPlayed();
        if(playerRoundDistance[a] === 1000){
            winner = true;
            determineWinner();
            return;
        }
        removeFromHand(cardEl[cardIndex], playerHand[a]);
        addCardToHand();
        if(turn === 1){
            turn = 2;
        }
        else if(turn === 2){
            turn = 1;
        }
        clearHand();
        newHand(turn);
        playerMsg(`Player ${turn}'s Turn`);
        return;
    }
    else{
        if(!playerGo[a]){
            playerMsg("Play a Go card first");
            return;
        }
        else if(checkHazard(turn)){
            playerMsg("Play a remedy first");
            return;
        }
    }
}

//when a hazard is played this function is called
function hazardCard(cardIndex, hazardS){
    let hazard = 0;
    let a = 0;
    let b = 0;
    let hazardEl;

    if(turn === 1){
        a = 0;
        hazard = 2;
        b = 1;
        if(hazardS === "accident"){
            hazardEl = document.getElementById('p2a');
        }
        else if(hazardS === "flattire"){
            hazardEl = document.getElementById('p2fl');
        }
        else if(hazardS === "outofgas"){
            hazardEl = document.getElementById('p2o');
        }
        go = document.getElementById('p2go');
    }
    else if(turn === 2){
        a = 1;
        hazard = 1;
        b = 0;
        if(hazardS === "accident"){
            hazardEl = document.getElementById('p1a');
        }
        else if(hazardS === "flattire"){
            hazardEl = document.getElementById('p1fl');
        }
        else if(hazardS === "outofgas"){
            hazardEl = document.getElementById('p1o');
        }
        go = document.getElementById('p1go');
    }
    if(checkHazard(hazard)){
        playerMsg(`Player ${hazard} already has a hazard`);
        return;
    }
    if(hazardS === "accident"){
        if(playerDrivingAce[b]){
            playerMsg(`Player ${hazard} has Driving Ace`);
            return;
        }
        playerAccident[b] = true;
    }
    else if(hazardS === "flattire"){
        if(playerPunctureProof[b]){
            playerMsg(`Player ${hazard} has Fuel Truck`);
            return;
        }
        playerFlatTire[b] = true;
    }
    else if(hazardS === 'outofgas'){
        if(playerFuelTruck[b]){
            playerMsg(`Player ${hazard} has Fuel Truck`);
            return;
        }
        playerOutofGas[b] = true;
    }
    playerGo[b] = false;
    hazardEl.setAttribute('src', './images/lighton.png');
    go.setAttribute('src', './images/light.png');
    nCardsPlayed();
    removeFromHand(cardEl[cardIndex], playerHand[a]);
    addCardToHand();
    if(turn === 1){
        turn = 2;
    }
    else if(turn === 2){
        turn = 1;
    }
    clearHand();
    newHand(turn);
    playerMsg(`Player ${turn}'s Turn`);
    return;
}

//When a Safety card is played this function is called
function safetyS(cardIndex, safety){
    let a = 0;
    let hazardEl;
    let hazard;
    if(turn === 1){
        a = 0;
        b = 1;
        if(safety === "ace"){
            hazardEl = document.getElementById('p1ac');
            acc = document.getElementById('p1a');
        }
        else if(safety === "proof"){
            hazardEl = document.getElementById('pp1');
            acc = document.getElementById('p1fl');
        }
        else if(safety === "gas"){
            hazardEl = document.getElementById('p1t');
            acc = document.getElementById('p1o');
        }
        else if(safety === "ev"){
            hazardEl = document.getElementById('p1ev')
            go = document.getElementById('p1go');
            speed = document.getElementById('p1s');
        }
    }
    else if(turn === 2){
        a = 1;
        b = 0;
        if(safety === "ace"){
            hazardEl = document.getElementById('p2ac');
            acc = document.getElementById('p2a');
        }
        else if(safety === "proof"){
            hazardEl = document.getElementById('pp2');
            acc = document.getElementById('p2fl');
        }
        else if(safety === "fueltruck"){
            hazardEl = document.getElementById('p2t');
            acc = document.getElementById('p2o');
        }
        else if(safety === "ev"){
            hazardEl = document.getElementById('p2ev')
            go = document.getElementById('p2go');
            speed = document.getElementById('p2s');
        }
    }
    if(safety === "ace"){
        playerDrivingAce[a] = true;
        playerAccident[a] = false;
        acc.setAttribute('src', '/images/light.png');
        hazardEl.setAttribute('src', './images/lighton.png');
    }
    else if(safety === "proof"){
        playerPunctureProof[a] = true;
        playerFlatTire[a] = false;
        acc.setAttribute('src', './images/light.png');
        hazardEl.setAttribute('src', './images/lighton.png');
    }
    else if(safety === 'fueltruck'){
        playerFuelTruck[a] = true;
        playerOutofGas[a] = false;
        acc.setAttribute('src', './images/light.png');
        hazardEl.setAttribute('src', './images/lighton.png');
    }
    else if(safety === 'ev'){
        playerEmergencyVehicle[a] = true;
        playerGo[a] = true;
        go.setAttribute('src', './images/lighton.png');
        speed.setAttribute('src', './images/light.png');
        hazardEl.setAttribute('src', './images/lighton.png');
    }
    pSafety[a] += 1;
    nCardsPlayed();
    removeFromHand(cardEl[cardIndex], playerHand[a]);
    addCardToHand(turn);
    if(turn === 1){
        turn = 2;
    }
    else if(turn === 2){
        turn = 1;
    }
    clearHand();
    newHand(turn);
    playerMsg(`Player ${turn} Turn`);
    return;
}

//When a stop card is played this function is called
function stop(cardIndex){
    let hazard = 0;
    let a = 0;
    let b = 0;
    let accidentL;
    if (turn === 1){
        a = 0;
        hazard = 2;
        b = 1;
        accidentL = document.getElementById('p2go');
    }
    else if(turn === 2){
        a = 1;
        hazard = 1;
        b = 0;
        accidentL = document.getElementById('p1go');
    }
    if(checkHazard(hazard)){
        playerMsg(`Player ${hazard} already has a hazard`);
        return;
    }
    else if(playerEmergencyVehicle[b]){
        playerMsg(`Player ${hazard} has Emergency Vehicle`);
        return;
    }
    else if(!playerGo[b]){
        playerMsg(`Player ${b} doesn't have a go card`);
        return;
    }
    playerGo[b] = false;
    accidentL.setAttribute('src', './images/light.png');
    nCardsPlayed();
    removeFromHand(cardEl[cardIndex], playerHand[a]);
    addCardToHand();
    if(turn === 1){
        turn = 2;
    }
    else if(turn === 2){
        turn = 1;
    }
    clearHand();
    newHand(turn);
    playerMsg(`Player ${turn}'s Turn`);
    return;
}

//When a speed limit card is played this function is called
function speedLimit(cardIndex){
    let a = 0;
    let b = 1;
    let hazard;
    let limitL;
    if (turn === 1){
        a = 0;
        b = 1;
        hazard = 2;
        limitL = document.getElementById('p2s');
    }
    else if(turn === 2){
        a = 1;
        b = 0;
        hazard = 1;
        limitL = document.getElementById('p1s');
    }
    if(playerSpeedLimit[b]){
        playerMsg(`Player ${hazard} already has a speed limit`);
        return;
    }
    else if(playerEmergencyVehicle[b]){
        playerMsg(`Player ${hazard} has Emergency Vehicle`);
        return;
    }
    limitL.setAttribute('src', './images/lighton.png');
    playerSpeedLimit[b] = true;
    nCardsPlayed();
    removeFromHand(cardEl[cardIndex], playerHand[a]);
    addCardToHand();
    if(turn === 1){
        turn = 2;
    }
    else if(turn === 2){
        turn = 1;
    }
    clearHand();
    newHand(turn);
    playerMsg(`Player ${turn} Turn`);
    return;
}

//This function is played when a repairs card is clicked
function repairs(cardIndex){
    let a = 0;
    let ace;
    if(turn === 1){
        a = 0;
        ace = document.getElementById('p1a');
    }
    else if(turn === 2){
        a = 1;
        ace = document.getElementById('p2a');
    }
    if(!playerAccident[a]){
        playerMsg("You didn't have an accident");
        return;
    }
    ace.setAttribute('src', './images/light.png');
    playerAccident[a] = false;
    nCardsPlayed();
    removeFromHand(cardEl[cardIndex], playerHand[a]);
    addCardToHand();
    if(turn === 1){
        turn = 2;
    }
    else if(turn === 2){
        turn = 1;
    }
    clearHand();
    newHand(turn);
    playerMsg(`Player ${turn} Turn`);
    return;
}

//This function is called when a gas card is clicked
function gasoline(cardIndex){
    let a = 0;
    let gas;
    if(turn === 1){
        a = 0;
        gas = document.getElementById('p1o');
    }
    else if(turn === 2){
        a = 1;
        gas = document.getElementById('p2o');
    }
    if(!playerOutofGas[a]){
        playerMsg("You aren't out of gas");
        return;
    }
    gas.setAttribute('src', './images/light.png');
    playerOutofGas[a] = false;
    nCardsPlayed();
    removeFromHand(cardEl[cardIndex], playerHand[a]);
    addCardToHand();
    if(turn === 1){
        turn = 2;
    }
    else if(turn === 2){
        turn = 1;
    }
    clearHand();
    newHand(turn);
    playerMsg(`Player ${turn} Turn`);
    return;
}

//This function is called when a spare tire is clicked
function spareTire(cardIndex){
    let a = 0;
    let tire;
    if(turn === 1){
        a = 0;
        tire = document.getElementById('p1fl');
    }
    else if(turn === 2){
        a = 1;
        tire = document.getElementById('p2fl');
    }
    if(!playerFlatTire[a]){
        playerMsg("You don't have a flat tire");
        return;
    }
    tire.setAttribute('src', './images/light.png');
    playerFlatTire[a] = false;
    nCardsPlayed();
    removeFromHand(cardEl[cardIndex], playerHand[a]);
    addCardToHand();
    if(turn === 1){
        turn = 2;
    }
    else if(turn === 2){
        turn = 1;
    }
    clearHand();
    newHand(turn);
    playerMsg(`Player ${turn} Turn`);
    return;
}

//If the player has a speed limit active it removes their speed limit
function endOfSpeed(cardIndex){
    let a = 0;
    let b = 0;
    let limitL;
    if (turn === 1){
        a = 0;
        b = 1;
        limitL = document.getElementById('p1s');
    }
    else if(turn === 2){
        a = 1;
        b = 0;
        limitL = document.getElementById('p2s');
    }
    if(!playerSpeedLimit[a]){
        playerMsg("Player doesn't have a speed limit");
        return;
    }
    limitL.setAttribute('src', './images/light.png');
    playerSpeedLimit[a] = false;
    nCardsPlayed();
    removeFromHand(cardEl[cardIndex], playerHand[a]);
    addCardToHand();
    if(turn === 1){
        turn = 2;
    }
    else if(turn === 2){
        turn = 1;
    }
    clearHand();
    newHand(turn);
    playerMsg(`Player ${turn} Turn`);
    return;
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
    emergencyVehicle: 1,
    endOfSpeedLimit: 6
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
count += 1;
for(i = count; i < ((cardNumbers['endOfSpeedLimit']) + count); i++){
    cardEl[i].setAttribute('src', './images/end_of_speedlimit.png');
}

//to detect when a card is dragged and then sends the value of i, which in this case
//represents the index of the card in the deck, to be caught by the drop function
for (let i = 0; i < DECKSIZE; i++){
    cardEl[i].setAttribute('draggable', true);
    cardEl[i].addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', i);
    });
}

//Stops the default behavior of the browser to prevent dropping of dragged objects
discard.addEventListener('dragover', function(e){
    e.preventDefault();
})


//A drop event listener that receives the data from the dragstart event listener.
//The data received from the dragover even listener is in a text form and has to be
//typecasted to an integer to represent the index of the card.  Then it is sent to
//the removeFromHand function to remove that card from the players hand.

discard.addEventListener('drop', function(e){
    e.preventDefault();
    let dCardIndex = parseInt(e.dataTransfer.getData("text/plain"));
    let dCard = cardEl[dCardIndex];
    if(turn === 1){
        removeFromHand(dCard, playerHand[0]);
        addCardToHand();
        turn = 2;
        clearHand();
        newHand(2);
        playerMsg("Player 2's turn");
    }
    else if(turn === 2){
        removeFromHand(dCard, playerHand[1]);
        addCardToHand();
        turn = 1;
        clearHand();
        newHand(1);
        playerMsg("Player 1's turn");
    }
})

//Randomly selection cards to place in the players hand
for( let i = 1; i <= 2; i++){
    for(let j = 0; j < handsize; j++){
        if(i === 1){
            playerHand[0].push(cardEl[chooseCard()]);
        }
        else if(i === 2){
            playerHand[1].push(cardEl[chooseCard()]);
        }
    }
}



//Event listener to listen for a card to be clicked, identifies which card is clicked and then executes the card logic for that card
divEl.addEventListener('click', (e) => {
    const cardIndex = cardEl.indexOf(e.target);
    if(winner){
        return;
    }
    clearHand();
    newHand(turn);
    if(cardIndex >= 82 && cardIndex <= 95){  //Go cards
        goCard(cardIndex);
    }
    else if(cardIndex >= 0 && cardIndex <= 9){  //25 mile cards
        mileCard(cardIndex, 25);
    }
    else if(cardIndex >= 10 && cardIndex <= 19){  //50 mile cards
        mileCard(cardIndex, 50);
    }
    else if(cardIndex >= 20 && cardIndex <= 29){  //75 mile cards
        mileCard(cardIndex, 75);
    }
    else if(cardIndex >= 30 && cardIndex <= 41){    //100 mile cards
        mileCard(cardIndex, 100);
    }
    else if(cardIndex >= 42 && cardIndex <= 45){   //200 mile cards
        mileCard(cardIndex, 200);
    }
    else if(cardIndex >= 46 && cardIndex <= 48){    //accident cards
        hazardCard(cardIndex, "accident");
    }
    else if(cardIndex >= 49 && cardIndex <= 51){    //out of gas
        hazardCard(cardIndex, "outofgas");
    }
    else if(cardIndex >= 52 && cardIndex <= 54){    
        hazardCard(cardIndex, "flattire");
    }
    else if(cardIndex >= 55 && cardIndex <= 59){
        stop(cardIndex);
    }
    else if(cardIndex >= 60 && cardIndex <= 63){
        speedLimit(cardIndex);
    }
    else if(cardIndex >= 64 && cardIndex <= 69){
        repairs(cardIndex);
    }
    else if(cardIndex >= 70 && cardIndex <= 75){
        gasoline(cardIndex);
    }
    else if(cardIndex >= 76 && cardIndex <= 81){
        spareTire(cardIndex);
    }
    else if(cardIndex === 96){
        safetyS(cardIndex, "ace");
    }
    else if(cardIndex === 97){
        safetyS(cardIndex, "fueltruck");
    }
    else if(cardIndex === 98){
        safetyS(cardIndex, "proof");
    }
    else if(cardIndex === 99){
        safetyS(cardIndex, "ev");
    }
    else if(cardIndex >= 100 && cardIndex <= 105){
        endOfSpeed(cardIndex);
    }
});

//Initialize the first hand of cards
for (let i = 0; i < handsize; i++) {
    cardHand[i].appendChild(playerHand[0][i]);
}

//Button to reset the game
buttonEl.addEventListener('click', () => {
    init();
    playerTotalScore[0] = 0;
    playerTotalScore[1] = 0;
    buttonEl.setAttribute('disabled', true);
})
