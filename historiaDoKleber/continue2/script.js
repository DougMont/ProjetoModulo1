var input


var chama = setTimeout(() => {
    while(true){
    input = prompt("O 'Bom Velhinho' Corre desesperado e Berrando com mil vozes em sua direção. O QUE VOCÊ FAZ? 1-Puxo o 38 do meu pai 2-ACORDAR!");
    if (input ==1){
       return window.location.href="../kleberMorto/index.html"

    } else if (input ==2) {
        return window.location.href="../vitoria/index.html"
    } else {
        break;
    }
   
}
}, 3000); 