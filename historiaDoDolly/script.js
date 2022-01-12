var input


var chama = setTimeout(() => {
    while(true){
    input = prompt("Dollynho estava voltando de um longo dia de trabalho quando olhou por sua janela e percebeu que estava sendo roubado. O QUE VOCÊ FAZ? 1-Entrar em casa 2-Voltar mais tarde");
    if (input ==1){
       return window.location.href="./continue1/index.html"

    } else if (input ==2) {
        return window.location.href="./DollynhoDerrota/index.html"
    } else {
        break;
    }
   
}
}, 3000); 