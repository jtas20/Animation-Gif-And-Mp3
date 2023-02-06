const body = document.querySelector("body");
const imgBomb = document.querySelector('.bomb-img');
const btnAcionar = document.querySelector(".btn-bomb");
const audioBomb = document.querySelector("audio");
const bombContainer = document.querySelector('.bomb-container');
const btnCancel = document.querySelector('.btn-cancel');

btnAcionar.addEventListener('click', function(){
    cronometro();
})

var Entercliked = 0;

function ativarEnter(){
    Entercliked = Entercliked + 1;
    if(Entercliked == 1){
        cronometro();
    }else{
        
    }
}

document.addEventListener('keypress', function(e){
    if(e.which == 13){
        ativarEnter();
    }
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
    body.style.backgroundColor = 'rgb(255, 255, 255)'
    audioBomb.play();

    bombContainer.innerHTML = `
        <img src="gif/20230204_225511679.gif" class="bomb-explosed"></img>
    `

    waitEnd();
}

function cronometro(){
    let btnAcionar = document.querySelector(".btn-bomb");
    btnAcionar.style.display = 'none';

    let contagem = document.querySelector(".contagem-bomb");
    let num = 11;
    function cronometroAltere(){
        if(num > 1){
            num = num - 1
            contagem.style.display = 'flex';
            contagem.style.color = 'red';
            contagem.textContent = num;
        }else{
            ativarBomba();
        }
    }

setInterval(cronometroAltere, 1000);
}