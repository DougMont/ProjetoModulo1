var input


var chama = setTimeout(() => {
    while(true){
    input = prompt("Nosso heroi fez uma oferta irresistivel para Noel.-KOE PAI, ovo te dar 20% da minha empresa se tu deixar eu roba as crianças com você. E AGORA NOEL? 1-Blz, vou limpar meu nome do Serasa 2-20% de 0 é nada");
    if (input ==1){
       return window.location.href="../vitoria/index.html"

    } else if (input ==2) {
        return window.location.href="../DollynhoDerrota/index.html"
    } else {
        break;
    }
   
}
}, 3000); 