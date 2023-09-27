function calcularPontosCarteira(velocidade) {
   const limiteVelocidade = 70;
   const excessoVelocidade = velocidade - limiteVelocidade;

   if(excessoVelocidade > 0) {
      const pontos = Math.floor(excessoVelocidade/5);
      if(pontos > 12) {
         return 'Carteira Suspensa.';
      } else {
         return `${pontos} Pontos na carteira.`;
      }
   } else {
      return 'Nenhum ponto na carteira.';
   }
}

console.log(calcularPontosCarteira(130));