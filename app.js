let listOfDrawNumbers = [];
let maxNumber = 10; 
let secretNumber = generateRandomNumber();
console.log(secretNumber); 

function showText(tag, text) {
    let location = document.querySelector(tag); 
    location.innerHTML = text; 
    responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate:1.} ); 
}

function showInitialMessage() {
showText('h1', 'Jogo do numero secreto');
showText('p', 'Escolha um numero entre 1 e 10');
}
showInitialMessage(); 

let attempts = 1;
function checkAttempt() {
    let tryNumber = document.querySelector('input').value; 
     
    if(tryNumber == secretNumber) {
        let attemptWord = attempts > 1 ? 'tentativas' : 'tentativa'; 
        let attemptMessage = `Voce descobriu o numero secreto com ${attempts} ${attemptWord}`
        
        showText('h1', 'Acertou!'); 
        showText('p', attemptMessage); 
        document.getElementById('reiniciar').removeAttribute('disabled'); 
        
    } else {
        if(tryNumber > secretNumber) {
            showText('p', 'O numero secreto é menor');
        } else {
            showText('p', 'O numero secreto  é maior'); 
        }
        attempts++;
        cleanAttempt(); 
    }    
}

function generateRandomNumber() {
    let numeroEscolhido =  parseInt(Math.random() * maxNumber + 1); 
    let quantidadeDeElementosNaLista = listOfDrawNumbers.length; 

    if(quantidadeDeElementosNaLista == maxNumber) {
        listOfDrawNumbers = [];
    }
    
    if(listOfDrawNumbers.includes(numeroEscolhido)) {
        return generateRandomNumber(); 
    
    } else {
        listOfDrawNumbers.push(numeroEscolhido); 
        console.log(listOfDrawNumbers);
        return numeroEscolhido; 
    }
}

function cleanAttempt() {
    tryNumber = document.querySelector('input'); 
    tryNumber.value = '';
}

function restartGame() {
    secretNumber = generateRandomNumber(); 
    cleanAttempt(); 
    attempts= 1; 
    showInitialMessage(); 
    document.getElementById('reiniciar').setAttribute('disabled', true); 
}