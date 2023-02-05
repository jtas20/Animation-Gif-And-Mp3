const body = document.querySelector("body");
const imgBomb = document.querySelector('.bomb-img');
const btnAcionar = document.querySelector(".btn-bomb");
const audioBomb = document.querySelector("audio");
const bombContainer = document.querySelector('.bomb-container');

btnAcionar.addEventListener('click', function(){
    cronometro();
})

function waitEnd(){
    let sizeMp3 = document.querySelector('audio');

    if(sizeMp3.currentTime > 33.000000){
        window.location.href = 'index.html';
    }else{
        
    }
}

function ativarBomba(){
    imgBomb.style.display = "none"
    btnAcionar.style.display = "none"
    body.style.backgroundColor = 'white'
    audioBomb.play();

    bombContainer.innerHTML = `
        <img src="gif/20230204_225511679.gif" class="bomb-explosed"></img>
    `

    waitEnd();
}

function cronometro(){
    let btnAcionar = document.querySelector(".btn-bomb");
    let num = 11;
    function cronometroAltere(){
        if(num > 1){
            num = num - 1
            btnAcionar.style.color = 'red';
            btnAcionar.textContent = num;
        }else{
            ativarBomba();
        }
    }

setInterval(cronometroAltere, 1000);
}