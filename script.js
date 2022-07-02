let play = document.querySelector("#play");
let pause = document.querySelector("#pause");
let stop = document.querySelector("#stop");
let breakSection = document.querySelector("#break");
let workSection = document.querySelector("#work");
var interval;
var intervalSegundo = timer;
function startTimer(duration, display) {
    var timer = duration, minutos, segundos;
    interval= setInterval(function () {
        minutos = parseInt(timer / 60, 10);
        segundos = parseInt(timer % 60, 10);
        minutos = minutos < 10 ? "0" + minutos : minutos;
        segundos = segundos < 10 ? "0" + segundos : segundos;
        display.textContent = minutos + ":" + segundos;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);

}
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 250 * i);
    });
  }


  const titulo = document.querySelector('h1');
  typeWriter(titulo);


start =  function () {
    clearInterval(interval)

    var duration = 60 * 25 // Converter para segundos
        display = document.querySelector('#timer'); // selecionando o timer
     startTimer(duration, display);// iniciando o timer
     document.body.style.backgroundColor = '#87ceeb';
       
}

     





cinco  =  function () {
    clearInterval(interval);
    
    var duration = 60 * 5; // Converter para segundos
        display = document.querySelector('#timer'); // selecionando o timer
      
      startTimer(duration, display)// iniciando o timer
  
document.body.style.backgroundColor = '#ffdb28';

}


function botão(){
   setTimeout(function(){
    alert('Pausado'),5})

     }


    
    

    
    


play.onclick=start;
pause.onclick=cinco;
stop.onclick=botão;










