var input


var chama = setTimeout(() => {
    while(true){
    input = prompt("Escolha uma opção O QUE VOCÊ FAZ? 1-Voltar 2-Só olha");
    if (input ==1){
       return window.location.href="../ProjetoModulo1/index.html"

    } else if (input ==2) {
        return window.location.href="../ProjetoModulo1/index.html"
    } else {
        break;
    }
   
}
}, 3000); 