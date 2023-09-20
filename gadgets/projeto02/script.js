
// * VERIFICANDO SE LOCAL STORAGE ESTÁ CRIADO, CASO CONTRÁRIO CRIA E INICIA COM DADOS BÁSICOS
window.addEventListener('load', () => {

    // * RESGATAR UM ITEM DA localStorage
    const sUsuBdd = localStorage.getItem("bd_usuarios");
    const sPrdBdd = localStorage.getItem("bd_produtos");
    const sCliBdd = localStorage.getItem("bd_clientes");

    // * REMOVER VALOR DO LOCALSTORAGE
    if (!sUsuBdd) {

        localStorage.setItem('bd_usuarios', '[{"usuidd": "1","usunam": "RAFAEL FALCO","usuema": "rfalcox@gmail.com","ususen": "q1W@zaXS","dtanas": "19730817"},{"usuidd": "2","usunam": "LUIS HENRIQUE FALCO","usuema": "lfalcox@gmail.com","ususen": "XXas#@56","dtanas": "20070414"},{"usuidd": "3","usunam": "YASMIN FALCO","usuema": "yfalcox@gmail.com","ususen": "23@!qwXZ","dtanas": "20070414"},{"usuidd": "4","usunam": "ZORAMI FALCO","usuema": "zfalcox@gmail.com","ususen": "AZsx@!21","dtanas": "19730207"}]');

        console.log(bd_usuarios);
    }

    if (!sPrdBdd) {

        localStorage.setItem('bd_produtos', '[{"prdidd": "1","prddsc": "PRODUTO 00001","prdqtd": "1000","prdval": "50,00"},{"prdidd": "2","prddsc": "PRODUTO 00002","prdqtd": "200","prdval": "10,00"},{"prdidd": "3","prddsc": "PRODUTO 00003","prdqtd": "3000","prdval": "30,00"},{"prdidd": "4","prddsc": "PRODUTO 00004","prdqtd": "40","prdval": "1,00"}]');

        console.log(bd_produtos);
    }

    if (!sCliBdd) {

        localStorage.setItem('bd_clientes', '[{"cliidd": "1","clinam": "RAFAEL FALCO","cliema": "rfalcox@gmail.com","cliend": "Rua Primitiva Vianco, 446","cliest": "SP"},{"cliidd": "2","clinam": "LUIS HENRIQUE FALCO","cliema": "lfalcox@gmail.com","cliend": "Rua Antonio Agú, 556","cliest": "SP"},{"cliidd": "3","clinam": "YASMIN FALCO","cliema": "yfalcox@gmail.com","cliend": "Avenida dos Autonomistas, 885","cliest": "SP"},{"cliidd": "4","clinam": "ZORAMI FALCO","cliema": "zfalcox@gmail.com","cliend": "Avenida Santo Antonio, 987","cliest": "SP"}]');

        console.log(bd_clientes);
    }

    // *FUNÇÃO PARA LIMPAR LOCAL STORAGE E RE-INICIAR
    function limpaDados() {
        localStorage.removeItem("bd_clientes");
        localStorage.removeItem("bd_produtos");
        localStorage.removeItem("bd_usuarios");
    }

});



console.log(sUsuBdd);
console.log(sPrdBdd);
console.log(sCliBdd);

// * REMOVER VALOR DO LOCALSTORAGE
if (!sUsuBdd) {
    localStorage.removeItem("bd_usuarios");

    localStorage.setItem('bd_usuarios', '[{"usuidd": "1","usunam": "RAFAEL FALCO","usuema": "rfalcox@gmail.com","ususen": "q1W@zaXS","dtanas": "19730817"},{"usuidd": "2","usunam": "LUIS HENRIQUE FALCO","usuema": "lfalcox@gmail.com","ususen": "XXas#@56","dtanas": "20070414"},{"usuidd": "3","usunam": "YASMIN FALCO","usuema": "yfalcox@gmail.com","ususen": "23@!qwXZ","dtanas": "20070414"},{"usuidd": "4","usunam": "ZORAMI FALCO","usuema": "zfalcox@gmail.com","ususen": "AZsx@!21","dtanas": "19730207"}]');

    console.log(bd_usuarios);
}
if (!sPrdBdd) {
    localStorage.removeItem("bd_produtos");

    localStorage.setItem('bd_produtos', '[{"prdidd": "1","prddsc": "PRODUTO 00001","prdqtd": "1000","prdval": "50,00"},{"prdidd": "2","prddsc": "PRODUTO 00002","prdqtd": "200","prdval": "10,00"},{"prdidd": "3","prddsc": "PRODUTO 00003","prdqtd": "3000","prdval": "30,00"},{"prdidd": "4","prddsc": "PRODUTO 00004","prdqtd": "40","prdval": "1,00"}]');

    console.log(bd_produtos);
}
if (!sCliBdd) {
    localStorage.removeItem("bd_clientes");

    localStorage.setItem('bd_clientes', '[{"cliidd": "1","clinam": "RAFAEL FALCO","cliema": "rfalcox@gmail.com","cliend": "Rua Primitiva Vianco, 446","cliest": "SP"},{"cliidd": "2","clinam": "LUIS HENRIQUE FALCO","cliema": "lfalcox@gmail.com","cliend": "Rua Antonio Agú, 556","cliest": "SP"},{"cliidd": "3","clinam": "YASMIN FALCO","cliema": "yfalcox@gmail.com","cliend": "Avenida dos Autonomistas, 885","cliest": "SP"},{"cliidd": "4","clinam": "ZORAMI FALCO","cliema": "zfalcox@gmail.com","cliend": "Avenida Santo Antonio, 987","cliest": "SP"}]');

    console.log(bd_clientes);
}



