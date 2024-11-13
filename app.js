const numerosOriginal = [];
const geracoesOriginal = [];

const numerosOtimizado = [];
const geracoesOtimizado = [];

function gerarNumerosProfessor() {
  while (numerosOriginal.length < 6) {
    let aleatorio = Math.floor(Math.random() * 60 + 1);
    geracoesOriginal.push(aleatorio);

    if (!numerosOriginal.includes(aleatorio)) {
      numerosOriginal.push(aleatorio);
    }
  }
}

//Nesta otimizada eu coloquei para o Math.random gerar números até 600.
//Caso o número for maior que 60 ele irá dividir por 10 e usar o Math.floor para não dar números decimais.
//Com isso o tempo de execução do programa ficou mais rápido pois com uma maior quantidade de números a chance deles se repetirem e o processo ser reiniciado é menor.
function gerarNumerosOtimizado() {
  while (numerosOtimizado.length < 6) {
    let aleatorio = Math.floor(Math.random() * 600 + 1);

    geracoesOtimizado.push(aleatorio);

    if (numerosOtimizado.includes(aleatorio)) {
      continue;
    } else {
      const divisao =
        aleatorio > 60
          ? numerosOtimizado.push(Math.floor(aleatorio / 10))
          : numerosOtimizado.push(aleatorio);
    }
  }
}

console.log("\n\n");
console.time("Tempo Original");
gerarNumerosProfessor();
console.timeEnd("Tempo Original");

console.log("Gerações: " + numerosOriginal.length, numerosOriginal);
console.log("Números: " + numerosOriginal.length, numerosOriginal);

console.log("\n\n");
console.time("Tempo Otimizado");
gerarNumerosOtimizado();
console.timeEnd("Tempo Otimizado");

console.log("Gerações: " + geracoesOtimizado.length, geracoesOtimizado);
console.log("Números: " + numerosOtimizado.length, numerosOtimizado);
