const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaotrocarTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    

  /*
    if (body.classList.contains("modo-escuro")) {
        body.classList.remove("modo-escuro");
        imagemBotaotrocarTema.setAttribute("src", "./imagens/sun.png");

    }
    else {
        body.classList.add("modo-escuro");
        imagemBotaotrocarTema.setAttribute("src", "./imagens/moon.png");
    }
  */

    body.classList.toggle("modo-escuro");
    
});