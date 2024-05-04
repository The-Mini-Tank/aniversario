var cliques = 0;
var imagem = document.getElementById("imagem");
var texto = document.getElementById("texto");

imagem.addEventListener("click", function() {
    cliques++;
    if (cliques >= 3) {
        texto.style.display = "block";
        imagem.style.display = "none"; // Faz a imagem desaparecer
    }
});
