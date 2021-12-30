/*

ATIVIDADE: VALIDAÇÃO DE ERROS POR TIPO

O objetivo é que a função receba um array e retorne ele caso o seu tamanho
corresponda ao número enviado como parâmetro na função.
Caso contrário, um erro será lançado.

- Crie uma função que recebe um array e um número
- Realize as seguintes validações:
    - Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
    - Se o array não for do tipo 'object', lance um erro do tipo TypeError
    - Se o número não for do tipo 'number', lance um erro do tipo TypeError
    - Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError

- Utilize a declaração try...catch
- Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof

*/

function validaArray(array, num) {
    try {

        if(!array && !num) throw new ReferenceError("Envie os parâmetros");

        if(typeof array !== 'object') throw new TypeError("Array precisa ser do tipo object.");

        if(typeof num !== 'number') throw new TypeError("Numero precisa ser do tipo number.");

        if(array.length !== num) throw RangeError("Tamanho inválido!");

        return array;
    
    } catch(e) {

        if(e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError.");
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError.");
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError.");
            console.log(e.message);
        } else {
            console.log("Tipo de erro não esperado: ", e);
        }
    }
}

console.log(validaArray([1, 2, 3, 4, 5], 5));