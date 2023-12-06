function alterarStatus(id) {
    let jogo = document.getElementById(`game-${id}`);
    let imagem = jogo.querySelector(".dashboard__item__img");
    let botao = jogo.querySelector(".dashboard__item__button");
    let texto = jogo.querySelector(".dashboard__item__button").textContent;

    if (texto == "Alugar") {
        botao.textContent = "Devolver";
        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
    } else {
        botao.textContent = "Alugar";
        imagem.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return");
    }
}

