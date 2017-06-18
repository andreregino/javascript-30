const panels = document.querySelectorAll('.panel');

function toggleOpen () {
    this.classList.toggle('open')
}

function toggleActive (e) {
    //console.log(e.propertyName) -> pega o que foi trocado quando acabou a transição,no caso o tamanho da letra e do flex

    if (e.propertyName === 'flex-grow') // para a propriedade flex-grow, ou seja, aumenta da coluna
        this.classList.toggle('open-active') //tira ou coloca a classe open active, que traz as letras do topo e do rodapé
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
