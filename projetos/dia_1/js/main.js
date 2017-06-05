// evento de keydown adicionado aos listeners da window
window.addEventListener('keydown', playSound);

function playSound(e){
       // dentro de evento, fica armazenado qual keycode foi pressionado

        //seleciona todos os element audio com "data-key=evento.keyCode"
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

        //se for alguma tecla sem ser as apresentadas na tela, sai da função
        if (!audio)
            return;

        //seleciona o elemento com class key com "data-key=evento.keyCode"
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

        //adiciona a classe playing (que tm efeitos para quando a tecla é pressionada) no elemento pressionado
        key.classList.add('playing')
        // caso seja pressionada alguma tecla mapeada, começa a tocar do zero
        // caso não houvesse currentTime = 0, teria que esperar áudio até final para poder tocar novamente
        audio.currentTime = 0;
        audio.play();
}

//pega todos os elementos com classe key
const keys = document.querySelectorAll('.key');

// cria listener com transitionend (transição da key de borda normal para borda amarela)
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    //remove a classe playing no final da transição
    this.classList.remove('playing');
}
