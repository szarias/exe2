//function classificação(idade){
//    if(idade <= 5){
//        return "Ele é um Bebe";
//   }
//    else if(idade >=6 && idade <=14){
//        return "Ele é uma Criança";
//    }
//    else if(idade >=14 && idade <=17){
//       return "Ele é um Adolescente";
//    }
//    else if(idade >=18 && idade <=60){
//        return "Ele é um Adulto";
//    }
//    else if(idade >=60 && idade <=80){
//        return "Ele é um Idoso";
//    }
//   else{
//        return "Ele é um veio";}
//    }
//console.log(classificação(17)); //<---- Digitar idade

//-------------------------------------------------------//

//function CalcularImposto(salario){
//    let aliquota;
//    if (salario >=0 && salario <=1100){
//        return aliquota = 0.05;
//    }
//    else if (salario >=1100 && salario <=2500){
//        return aliquota = 0.1;
//    }
//    else {
//        return aliquota = 0.15;
//    }
//}
//
//const valorSalario = 3777;
//const valorBeneficios = 400;
//const valorImposto = CalcularImposto(valorSalario) * valorSalario;
//console.log(valorImposto);
//const salarioFinal = valorSalario - valorImposto + valorBeneficios;
//console.log(salarioFinal);

//calcula imposto do salario e adiciona bonus

//-------------------------------------------------------------------//

const entradas = [8, 30, 4, 8, 20, 9, 10, 15, 1];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}
const N = gets();
let MaiorNumeroPar = 0;
let MenorNumeroImpar = 0;

for (let i = 0; i < N; i++) {
    const numero = parseInt (gets());
    if(numero % 2 === 0){
        if(numero > MaiorNumeroPar){
            MaiorNumeroPar = numero;
        }
        }
    else{
        if(MenorNumeroImpar === 0){
            MenorNumeroImpar = numero;
        }else if(numero < MenorNumeroImpar){
            MenorNumeroImpar = numero;
        }
    }
}
console.log(`Maior número par: `+ MaiorNumeroPar);
console.log(`Menor número Impar: `+ MenorNumeroImpar);