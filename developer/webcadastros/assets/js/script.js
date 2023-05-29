//Crie Um array JavaScript
// - e Dentro desse array crie um objeto onde guarde as informações do cliente Feito
// - Assim que criado faça ele guardar novas informações Feito
//Quando um novo Cliente se registrar peça para ele criar um objeto automaticamente Feito
const form = document.getElementById('register-form');

form.addEventListener("submit", (e) => {
    //essse codigo faz que a pagina nao recarregue
    e.preventDefault();

    const Name = document.getElementById("Name").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const password= document.getElementById("password").value;
    //Os valores estao rodando

    //Array de objeto
    let usuarios = new Array();
    //Verificação se a propriedade no localStorage
    if(localStorage.hasOwnProperty("usuarios")){
        //Aqui Ira Recuperar os valores das propriedade usuario do localStorage
        //Converte de String para Object
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }
    //Adiciona as coisas no objeto
    usuarios.push({Name,lastname,email,password});


    //Salva no localStorage
    localStorage.setItem("usuarios",JSON.stringify(usuarios));
    console.log(localStorage)
})