var input


var chama = setTimeout(() => {
    while(true){
    input = prompt("O 'Bom velhinho' Olha fixamente para ele e pergunta: Kleber...Kleber... Você quer vir comigo? O QUE VOCÊ FAZ? 1-Não 2-Vamos nessa");
    if (input ==1){
       return window.location.href="../continue2/index.html"

    } else if (input ==2) {
        return window.location.href="../kleberMorto/index.html"
    } else {
        break;
    }
   
}
}, 3000); 

