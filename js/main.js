/*
**SELEÇÃO DOS ELEMENTOS HTML DE MANEIRA INDIVIDUAL**

document.querySelector('.tecla_pom').onclick = playSoundPom;
document.querySelector('.tecla_clap').onclick = playSoundClap;
*/

/*
 **LAÇO DE REPET. CRIADO COM WHILE
let counter = 0;
while (counter < 9) {
    keyList[counter].onclick = playClapSound;
    counter++;
}
*/

// **SELEÇÃO DOS ELEMENTOS JS DE MANEIRA COLETIVA, INSERIDAS DENTRO DE UMA CONST**
const keyList = document.querySelectorAll('.tecla');

// **FUNÇÃO PARA TOCAR OS SONS DE FORMA DINÂMICA
function playSound(audioSelector) {
    const element = document.querySelector(audioSelector);

    if (element === null) {
        console.log('O elemento inserido não é válido.')
    }

    if (element != null && element.localName === 'audio') {
            element.play();
    }

}

// LAÇO DE REPET. CRIADO COM O FOR
for (let i = 0; i < keyList.length; i++) {

    const keys = keyList[i];
    const instruments = keys.classList[1];
    const idAudio = `#som_${instruments}`;

    keys.onclick = function () {
        playSound(idAudio);
    }

    keys.onkeydown = function (pressed) {
        if (pressed.code === 'Space' || pressed.code === 'Enter') {
            keys.classList.add('ativa');
        }

    }

    keys.onkeyup = function () {
        keys.classList.remove('ativa');
    }
}
