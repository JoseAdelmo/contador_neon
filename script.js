const value = document.getElementById('value');
const maisBotao = document.getElementById('mais');
const menosBotao = document.getElementById('menos');
const resetBotao = document.getElementById('reset');

const atualizarValor = () => {
    value.innerHTML = count;
};

let count = 0;
let intervaloId = 0;

maisBotao.addEventListener('mousedown', () => {
     intervaloId = setInterval(() => {
        count += 1;
        atualizarValor();
     }, 100)
});

menosBotao.addEventListener('mousedown', () => {
    intervaloId = setInterval(() => {
       count -= 1;
       atualizarValor();
    }, 100)
});

resetBotao.addEventListener('click', () => {
       count = 0;
       atualizarValor();
});

document.addEventListener('mouseup', () => clearInterval(intervaloId));