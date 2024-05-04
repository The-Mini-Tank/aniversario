var imagem = document.getElementById("imagem");
var texto = document.getElementById("texto");
var texto2 = document.getElementById("texto2");
var audio = document.getElementById("audio");
var cliques = 0;
var animacaoAtiva = false;

function mudarSrcTemporariamente(novoSrc, duracao) {
    var srcOriginal = imagem.src;
    imagem.src = novoSrc;

    setTimeout(function() {
        imagem.src = srcOriginal;
        animacaoAtiva = false;
    }, duracao);

    animacaoAtiva = true;
}

function mudarSrcDefinitivamente(novoSrc) {
    imagem.src = novoSrc;
}

imagem.addEventListener("click", function() {
    if (!animacaoAtiva && cliques < 3) {
        cliques++;
        if (cliques === 3) {
            mudarSrcDefinitivamente("gif_win.gif");
            texto.style.display = "block"; 
            texto2.style.display = "block";
            audio.volume = 0.4;
            audio.play();
            confetti();
        } else {
            mudarSrcTemporariamente("gif_click.gif", 1000); 
        }
    }
});
