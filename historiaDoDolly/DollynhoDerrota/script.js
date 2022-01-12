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
