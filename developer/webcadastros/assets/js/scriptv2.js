const Email = document.querySelector("#email");//Aqui pega o campo do nome e atribui a uma variavel
const Senha = document.querySelector("#password");//Aqui pega o campo do sobrenome e atribui a uma variavel
const form = document.querySelector('#register-form');
localStorage.setItem('Usuarios', '[{"Email": "lukefalcox@gmail.com","Senha": "q1W@zaXS"}]')
form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  let Var1 = Email.value;
  let Var2 = Senha.value;
  const LstUsu = JSON.parse(localStorage.getItem('Usuarios'));
  if (LstUsu.length>0) {
    for (let I = 0; I < LstUsu.length; I++) {
        if (LstUsu[I].Email === Var1) {
            if (LstUsu[I].Senha === Var2) {
                let usuatv = `[{"Usuario": ,"Email": "${LstUsu[I].Email}",Senha": "${LstUsu[I].Senha}",}]`

                sessionStorage.setItem("usuatv", `${usuatv}`)  
                break;

            } else {

                console.log("Senha Inválida");
            }
        } else {
            console.log("Email Inválido");
        }
    }
  }
});
