// Definição da classe Aluno
class Aluno {
    constructor(nome, matricula) {
      this.nome = nome;
      this.matricula = matricula;
      this.cursos = [];
    }
  
    inscreverCurso(curso) {
      this.cursos.push(curso);
      console.log(`${this.nome} se inscreveu no curso de ${curso.titulo}.`);
    }
  }
  
  // Definição da classe Professor
  class Professor {
    constructor(nome, disciplina) {
      this.nome = nome;
      this.disciplina = disciplina;
    }
  }
  
  // Definição da classe Curso
  class Curso {
    constructor(titulo, professor) {
      this.titulo = titulo;
      this.professor = professor;
      this.aulas = [];
    }
  
    adicionarAula(aula) {
      this.aulas.push(aula);
      console.log(`Aula adicionada ao curso de ${this.titulo}.`);
    }
  }
  
  // Definição da classe Aula
  class Aula {
    constructor(titulo, horario) {
      this.titulo = titulo;
      this.horario = horario;
    }
  }
  
  // Definição da classe Escola
  class Escola {
    constructor() {
      this.alunos = [];
      this.professores = [];
      this.cursos = [];
    }
  
    matricularAluno(aluno) {
      this.alunos.push(aluno);
      console.log(`${aluno.nome} foi matriculado na escola.`);
    }
  
    contratarProfessor(professor) {
      this.professores.push(professor);
      console.log(`O professor ${professor.nome} foi contratado para lecionar ${professor.disciplina}.`);
    }
  
    criarCurso(titulo, professor) {
      const curso = new Curso(titulo, professor);
      this.cursos.push(curso);
      console.log(`O curso de ${curso.titulo} foi criado.`);
      return curso;
    }
  }
  
  // Exemplo de uso:
  const minhaEscola = new Escola();
  
  // Criando alunos
  const aluno1 = new Aluno("João", "123456");
  const aluno2 = new Aluno("Maria", "654321");
  
  // Matriculando alunos na escola
  minhaEscola.matricularAluno(aluno1);
  minhaEscola.matricularAluno(aluno2);
  
  // Criando professores
  const professor1 = new Professor("Carlos", "Matemática");
  const professor2 = new Professor("Ana", "História");
  
  // Contratando professores
  minhaEscola.contratarProfessor(professor1);
  minhaEscola.contratarProfessor(professor2);
  
  // Criando curso de Matemática
  const cursoMatematica = minhaEscola.criarCurso("Matemática Básica", professor1);
  
  // Adicionando aulas ao curso de Matemática
  cursoMatematica.adicionarAula(new Aula("Aritmética", "Segunda-feira, 8:00"));
  cursoMatematica.adicionarAula(new Aula("Álgebra", "Quarta-feira, 10:00"));
  
  // Aluno se inscreve no curso de Matemática
  aluno1.inscreverCurso(cursoMatematica);
