/** 6.Escreva um algorítimo para imprimir o código e nome do aluno em 
uma única linha separados por vírgula. Não poderá existir vírgula no 
final do último nome, apenas entre os nomes.*/

const students = [
  { id: 1, nome: "João"},
  { id: 2, nome: "Pedro"},
  { id: 3, nome: "José"}
];

const result = students.map(student => (` ${student.id} ${student.nome}`)).join();

console.log(result);
