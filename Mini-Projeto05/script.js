function verificarValores(quantidadeDeNumero) {
   for(let i = 0; i <= quantidadeDeNumero; i++) {
      if(i % 2 === 0) {
         console.log(`${i} Par.`); 
      } else {
         console.log(`${i} Impar.`);
      }
   }
}
verificarValores(20);