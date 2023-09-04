function fizzBuzz(entrada) {

   if (typeof entrada !== 'number') {
      return "Não é um número";
   }

   let resultado ="";

   if (entrada % 3 === 0) {
      resultado += "Fizz";
   }
   
   if (entrada % 5 === 0) {
      resultado += "Buzz";
   }
   return resultado ||entrada;
}   

console.log(fizzBuzz(7));