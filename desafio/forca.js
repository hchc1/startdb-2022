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
      this.letrasCorretas.push(letra);
    } else {
      this.vidas -= 1;
    }
    this.mostraLetrasDescobertas();
  }

  mostraLetrasDescobertas() {
    this.palavra = [];
    this.palavraSecreta.split('').forEach(letra => {
      if (!this.letrasCorretas.includes(letra)) {
        this.palavra.push('_');
      } else {
        this.palavra.push(letra);
      }
      return this.palavra;
    });
    this.acertou();
  }

  acertou() {
    const arrPalavra = this.palavraSecreta.split('');
    arrPalavra.every((letra, index) => letra === this.palavra[index])
      ? this.acertouPalavra = true : this.acertouPalavra = false;
  }

  buscarEstado() {
    if (this.vidas === 0) {
      return "perdeu";
    } else if (this.vidas > 0 && this.acertouPalavra) {
      return "ganhou";
    }
    return "aguardando chute";
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    this.mostraLetrasDescobertas();
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
