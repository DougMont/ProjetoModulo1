var input


var chama = setTimeout(() => {
    while(true){
    input = prompt("Koe menó, vem pegar seu presente, tava só zuando. O QUE VOCÊ FAZ? 1-Pega o Presente 2-Processa a empresa que fabricou ele");
    if (input ==1){
       return window.location.href="../derrota/index.html"

    } else if (input ==2) {
        return window.location.href="../vitoria/index.html"
    } else {
        break;
    }
   
}
}, 3000); 

