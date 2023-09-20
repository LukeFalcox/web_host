const nome  = document.querySelector('#lastname');
const senha  = document.querySelector('#password');
const form = document.querySelector('#form');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    let p4 = 0
    let p0 = ""
    let p1 = nome.value
    let p2 = senha.value
    fetch("./assets/json/dados.json").then((response) => {
        response.json().then((jsonLst) => {
            jsonLst.usuarios.map((_usuario) => {

                /// LOCALIZA O USUÁRIO DIGITADO
                p0 = jsonLst.usuarios.find(usus => usus.Nome === p1)

            })

            console.log(p0)

            if (p4) {
                p4 = p2.localeCompare(p0.Senha)
                if (p4 == 0) {
                    alert("1-Usuário Válido! Seja bem vindo.")
                    window.location.href = "./Cadastro.html";
                } else {
                    alert("2-Senha inválida. Tente novamente!")
                    window.location.href = "./Tela.html";
                }
            } else {
                alert("3-Usuário não localizado. Verifique!")
                window.location.href = "./Tela.html";
            }
        })
    })
})
