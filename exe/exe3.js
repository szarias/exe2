function imc(peso , altura){
    let resultado = peso / (altura * altura);

    if (resultado <= 24.9) {
        return "Peso normal"
    };
    else if (resultado >=25 && resultado <= 29.9) {
        return "Sobrepeso"
    }
    else if (resultado >=30 && resultado <= 34,9) {
        return "Obesidade grau I"
    }
    else if (resultado >=35 && resultado <= 39,9) {
        return "Obesidade grau II"
    }
    else (resultado >= 40); {
        return "Obesidade grau III"
    }
    
        
    
}
console.log(imc(80 , 1.80).toFixed(2));
console.log(imc(64 , 1.77).toFixed(2));
console.log(imc(81 , 1.83).toFixed(2));
console.log(imc(70 , 1.77).toFixed(2));
console.log(imc(82 , 1.83).toFixed(2));



