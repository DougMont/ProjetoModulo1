var input


var chama = setTimeout(() => {
    while(true){
    input = prompt("O 'Bom velhinho' Olha fixamente para ele e pergunta: Kleber...Kleber... Você quer vir comigo? O QUE VOCÊ FAZ? 1-Grita 2-Fica Parado");
    if (input ==1){
       return window.location.href="./kleberMorto/index.html"

    } else if (input ==2) {
        return window.location.href="./continue1/index.html"
    } else {
        break;
    }
   
}
}, 3000); 