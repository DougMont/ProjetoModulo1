var input


var chama = setTimeout(() => {
    while(true){
    input = prompt("Noel havia percebido nosso heroi e correu para surpreendê-lo ao abrir a porta com um RETÃO NA CARA de Dollynho. O QUE VOCÊ FAZ? 1-Desvia 2-Na cara Não!");
    if (input ==1){
       return window.location.href="../continue2/index.html"

    } else if (input ==2) {
        return window.location.href="../DollynhoDerrota/index.html"
    } else {
        break;
    }
   
}
}, 3000); 