class Forca {
  constructor(palavraSecreta) {
    this.palavraSecreta = palavraSecreta;
    console.log(palavraSecreta)
  }

  letrasChutadas = [];
  vidas = 6;
  palavra = [];
  acertouPalavra = false;
  letrasCorretas = [];

  chutar(letra) {
    if (letra.length > 1) {
      return;
    } else if (this.letrasChutadas.includes(letra)) {
      return;
    } else {
      this.letrasChutadas.push(letra);
      this.verificarLetras(letra);
    }
  }

  verificarLetras(letra) {
    if (this.palavraSecreta.includes(letra)) {
      letrasCorretas.push(letra);
    } else {
      this.vidas -= 1;
    }
    mostrarLetrasDescobertas();
  }

  mostrarLetrasDescobertas() {

  }

  buscarEstado() {
    if (vidas === 0) {
      return "perdeu";
    } else if (vidas > 0 && acertouPalavra) {
      return "ganhou";
    }
    return "aguardando chute";
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: [], // Deve conter todas as letras chutadas
          vidas: 6, // Quantidade de vidas restantes
          palavra: [] // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
