// comece a criar a sua função add na linha abaixo
function add(a,b){
    return a+b
}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(a,b){
    let result = 0;
    for(let i = 0; 0<b; i++){
        result += add(a, result)
    }
    return result
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(x,n){
    let expo = x;
    for(let i = 1; i != n; i++){
        expo = multiply(expo, x);
    }
    return expo
}
// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
    function factorial(a){
        let result = 1;
        for(let i = 1; i > 0; i--){
            result = multiply(i, result);
        }
        return result
    }

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(num){
    let fibona = [0]
    let adi = 1
    for(let i = 0; i <= num; i = add(i, 1)){
        fibona.push(add(fibona[i], adi))
        adi = fibona[i]
    }
    return fibona[i]
}

// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
