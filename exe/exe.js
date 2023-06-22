let preço = 77;
let fp1 = "7";


//if(fp1 === "Débito"){
 //   console.log("10% de desconto");
//}
//else if(fp1 === "Dinheiro"){
//   console.log("15% de desconto");
//}
//else if(fp1 === "Pix"){
//    console.log("15% de desconto");
//}
//else if(fp1 === "2 parcelas"){
//    console.log("Preço de etiqueta");
//}
//else{
//    console.log("Preço de etiqueta + 10% de juros");
//}

//<os 2 funcionam igual>

switch (fp1) {
    case "Débito":
        console.log("10% de desconto")
        break;
    case "Dinheiro":
        console.log("15% de desconto")
        break;
    case "Pix":
        console.log("15% de desconto")
        break;
    case "2 parcelas":
        console.log("Preço de etiqueta")
        break; 
    default:
        console.log("Preço de etiqueta + 10% de juros")
        break;
}