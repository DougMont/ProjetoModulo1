var input


var chama = setTimeout(() => {
    while(true){
    input = prompt("Klebinho ouve um baruho estranho no meio da noite e corre para sala, ao chegar lá, ele encontra o 'Bom velhinho' O QUE VOCÊ FAZ? 1-Grita 2-Fica Parado");
    if (input ==1){
       return window.location.href="./kleberMorto/index.html"
    } else if (input ==1) {
        alert(`vc digitou ${input}`)
        break;
    } else {
        break;
    }
   
}
}, 1000); 

chama()

// //ou

// var input = prompt("digite 1");
// while (input != 1){
//     input = prompt("Input inválido. Digite 1")
// }
// alert(`vc digitou ${input}`)

// COISA 2
// var numero, contator = 0;
// numero = prompt("Digite 1 ou 2");
// if ((numero < 2) || (numero > 1));
// }
// else{
//     while (contador <= numero){
//         document.write(contador + "<br/>")
//         contador++
//     }
// }
