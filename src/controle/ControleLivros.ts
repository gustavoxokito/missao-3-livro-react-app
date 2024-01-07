import Livro from "../modelo/Livro";

const livros: Array<Livro> = [
    new Livro(1, 1, 'Harry Potter e a Pedra Filosofal', 'Resumo - (A série abrange vários gêneros, como fantasia, vida escolar e passagem entre a infância e a juventude (com elementos de mistério, suspense, aventura e romance), sendo que a história tem muitos significados e referências culturais.[4] De acordo com Rowling, o tema principal é a morte.[5] Há também muitas outras temáticas na série, como preconceito e corrupção.[6])', ['J. K. Rowling']),
    new Livro(2, 2, 'Os Vingadores', 'Resumo - Diferente de outras equipes do universo Marvel, os Vingadores receberam reconhecimento oficial do governo, quase desde o início com autoridade aceita internacionalmente durante a maior parte de sua história.', ['Stan Lee, Jack Kirby']),
    new Livro(3, 3, 'O Senhor dos Anéis', 'Resumo - O "Um Anel" é o elemento central da saga. No anel, em inscrições no alfabeto Tengwar com versos na língua proibida de Mordor, pode-se ler: "Um Anel que a todos rege, Um Anel para achá-los, Um Anel que a todos traz, para na escuridão atá-los".', ['J. R. R. Tolkien'])
];

class ControleLivro {
    obterLivros(): Array<Livro> {
        return livros;
    }

    incluir(novoLivro: Livro): void {
        const novoCodigo = Math.max(...livros.map(l => l.codigo)) + 1;
        novoLivro.codigo = novoCodigo;
        livros.push(novoLivro);
    }

    excluir(codigo: number): void {
        const index = livros.findIndex(l => l.codigo === codigo);
        if (index !== -1) {
            livros.splice(index, 1);
        }
    }
}

export default ControleLivro;
