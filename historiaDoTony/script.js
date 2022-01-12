var input


var chama = setTimeout(() => {
    while(true){
    input = prompt("Tonynho tem uma doença grave e não ganhou o que pediu em sua carta pro papai noel.Sinto muito, tonynho :( O QUE VOCÊ FAZ? 1-Aceita 2-Vingança");
    if (input ==1){
       return window.location.href="./derrota/index.html"

    } else if (input ==2) {
        return window.location.href="./continue1/index.html"
    } else {
        break;
    }
   
}
}, 3000); 