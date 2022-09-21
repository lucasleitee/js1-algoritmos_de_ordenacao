
const livros = require('./lista_livros')

let maisBarato = 0;

for (let i = 0; i < livros.length; i++){
    if (livros[i].preco < livros[maisBarato].preco){
        maisBarato = i
    }
}

console.log(`o livro ${livros[maisBarato].titulo} é o mais barato e seu preço é ${livros[maisBarato].preco}`)