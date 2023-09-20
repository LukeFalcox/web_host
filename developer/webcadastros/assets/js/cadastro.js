const form = document.getElementById('register-form');//Aqui pega o campo da pagina 
localStorage.setItem('Usuarios', '[{"Nome": "Luis ","Sobrenome": "Falco","Email": "lfalcox@gmail.com","Senha": "q1W@zaXS"}]')
form.addEventListener("submit", (e) => {//aqui cria uma função onde assim que o botao de enviar for clicado ele realizara a função
    //essse codigo faz que a pagina nao recarregue
    e.preventDefault();
    
    const Name = document.getElementById("Name").value;//Aqui pega o campo do nome e atribui a uma variavel
    const lastname = document.getElementById("lastname").value;//Aqui pega o campo do sobrenome e atribui a uma variavel
    const email = document.getElementById("email");//Aqui pega o campo do email e atribui a uma variavel
    const password= document.getElementById("password").value;//Aqui pega o campo da senha e atribui a uma variavel 
    let usuarios = new Array();
   
     //Verificação se a propriedade no localStorage
    if(localStorage.hasOwnProperty("Usuarios")){
        //Aqui Ira Recuperar os valores das propriedade usuario do localStorage
        //Converte de String para Object
        usuarios = JSON.parse(localStorage.getItem("Usuarios"));
    }
    //Adiciona as coisas no array
   usuarios.push({"Nome":Name,"Sobrenome":lastname,"Email":email,"Senha":password})
    //Salva no localStorage
    let Var1 = email.value
    localStorage.setItem("Usuarios",JSON.stringify(usuarios));
    window.location.href = "./principal.html";   
    
});
