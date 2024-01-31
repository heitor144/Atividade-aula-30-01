// Definição da classe Livro
class Livro {
    constructor(titulo, autor, disponivel) {
      this.titulo = titulo;
      this.autor = autor;
      this.disponivel = disponivel;
    }
  }
  
  // Definição da classe Aluno
  class Aluno {
    constructor(nome, matricula) {
      this.nome = nome;
      this.matricula = matricula;
      this.livrosEmprestados = [];
    }
  
    emprestarLivro(livro) {
      if (livro.disponivel) {
        this.livrosEmprestados.push(livro);
        livro.disponivel = false;
        console.log(`O livro "${livro.titulo}" foi emprestado para ${this.nome}.`);
      } else {
        console.log(`Desculpe, o livro "${livro.titulo}" não está disponível no momento.`);
      }
    }
  
    devolverLivro(livro) {
      const index = this.livrosEmprestados.indexOf(livro);
      if (index !== -1) {
        this.livrosEmprestados.splice(index, 1);
        livro.disponivel = true;
        console.log(`O livro "${livro.titulo}" foi devolvido por ${this.nome}.`);
      } else {
        console.log(`Este livro não foi emprestado para ${this.nome}.`);
      }
    }
  }
  
  // Definição da classe Biblioteca
  class Biblioteca {
    constructor() {
      this.livros = [];
      this.alunos = [];
    }
  
    adicionarLivro(livro) {
      this.livros.push(livro);
    }
  
    adicionarAluno(aluno) {
      this.alunos.push(aluno);
    }
  }
  
  // Exemplo de uso:
  const minhaBiblioteca = new Biblioteca();
  
  // Criando alguns livros
  const livro1 = new Livro("Aventuras de Alice no País das Maravilhas", "Lewis Carroll", true);
  const livro2 = new Livro("O Hobbit", "J.R.R. Tolkien", true);
  const livro3 = new Livro("Harry Potter e a Pedra Filosofal", "J.K. Rowling", true);
  
  // Adicionando os livros à biblioteca
  minhaBiblioteca.adicionarLivro(livro1);
  minhaBiblioteca.adicionarLivro(livro2);
  minhaBiblioteca.adicionarLivro(livro3);
  
  // Criando um aluno
  const aluno1 = new Aluno("João", "123456");
  
  // Adicionando o aluno à biblioteca
  minhaBiblioteca.adicionarAluno(aluno1);
  
  // Aluno solicita empréstimo de um livro
  aluno1.emprestarLivro(livro1);
  
  // Tentativa de empréstimo de um livro indisponível
  aluno1.emprestarLivro(livro1);
  
  // Aluno devolve um livro
  aluno1.devolverLivro(livro1);