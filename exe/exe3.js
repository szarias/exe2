function imc(peso , altura){
    let resultado = peso / (altura * altura);

    if (imc <= 24.9) {
        return "Peso normal"
    };
    else if (imc >=25 && imc <= 29.9) {
        return "Sobrepeso"
    }
    else if (imc>=30 && imc<= 34,9) {
        return "Obesidade grau I"
    }
    else if (imc >=35 && imc <= 39,9) {
        return "Obesidade grau II"
    }
    else (imc >= 40); {
        return "Obesidade grau III"
    }
    
        
    
}
console.log(imc(80 , 1.80).toFixed(2));
console.log(imc(64 , 1.77).toFixed(2));
console.log(imc(81 , 1.83).toFixed(2));
console.log(imc(70 , 1.77).toFixed(2));
console.log(imc(82 , 1.83).toFixed(2));



