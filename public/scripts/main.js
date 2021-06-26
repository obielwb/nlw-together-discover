import Modal from './modal.js'

const modal = Modal();

// Pegar todos os botões que possuem a classe check
const checkButtons = document.querySelectorAll(".action a.check");

checkButtons.forEach(button => {
    // adicionar a escuta
    button.addEventListener(('click'), event => {
        modal.open()
    })
})