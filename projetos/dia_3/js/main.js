const inputs = document.querySelectorAll('.controls input');



inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

function handleUpdate() {
    const suffix = this.dataset.sizing || ''; //dataset retorna tudo o que tem "data-" no elemento html, no caso data-sizing
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); //pega property com nome name e coloca valor + sufixo
}


