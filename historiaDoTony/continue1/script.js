var input


var chama = setTimeout(() => {
    while(true){
    input = prompt("Hora do acerto de contas menó O QUE VOCÊ FAZ? 1-Toma seu remédio 2-Taca uma pedra nele");
    if (input ==1){
       return window.location.href="../derrota/index.html"

    } else if (input ==2) {
        return window.location.href="../continue2/index.html"
    } else {
        break;
    }
   
}
}, 3000); 