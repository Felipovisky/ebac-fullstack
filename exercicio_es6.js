
const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Bruno", nota: 5 },
  { nome: "Carla", nota: 7 },
  { nome: "Daniel", nota: 4 },
  { nome: "Eduardo", nota: 6 }
];

const alunosAprovados = (lista) => lista.filter(aluno => aluno.nota >= 6);

console.log(alunosAprovados(alunos));
