const listaLivros = require('./array');
const trocarLugar = require('./encontraMenores');

function quickSorte(array, esquerda, direita){
    if(array.length > 1){
        let indiceAtual = particiona(array, esquerda, direita);
        if (esquerda < indiceAtual - 1 ){
            quickSorte(array, esquerda, indiceAtual - 1);
        }
        if(indiceAtual < direita ){
            quickSorte(array, indiceAtual, direita);
        }
    }
    
    return array
}

function particiona(array,esquerda,direita){
    let pivo = array[Math.floor((esquerda + direita) / 2 )]
    let atualEsquerda = esquerda ; //0
    let atualDireita = direita; //10

    while (atualEsquerda <= atualDireita){
        while (array[atualEsquerda].preco < pivo.preco){
            atualEsquerda++
        }
        while(array[atualDireita].preco > pivo.preco){
            atualDireita--
        }

        if(atualEsquerda <= atualDireita){
            trocarLugar(array, atualEsquerda, atualDireita);
            atualEsquerda ++;
            atualDireita --;
        }
    }
    return atualEsquerda;
}

console.log(quickSorte(listaLivros, 0, listaLivros.length - 1))