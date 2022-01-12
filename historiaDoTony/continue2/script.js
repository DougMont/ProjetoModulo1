var input


var chama = setTimeout(() => {
    while(true){
    input = prompt("FELIZ NATAL! Diga olá para o meu amiguinho. O QUE VOCÊ FAZ? 1-Se esconde 2-Faz Matrix");
    if (input ==1){
       return window.location.href="../continue3/index.html"

    } else if (input ==2) {
        return window.location.href="../derrota/index.html"
    } else {
        break;
    }
   
}
}, 3000); 
