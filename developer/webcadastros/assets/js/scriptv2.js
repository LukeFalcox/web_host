const input = document.querySelector('#envio')
const pont = document.querySelector('src')
input.addEventListener('change', (e) => function() {
  e.preventDefault();
  console.log(this.files);
  const arquivo = this.files[0];

  console.log(pont);
  console.log(arquivo3);
  const leito = new FileReader();
});
// e.preventDefault();
// //essse codigo faz que a pagina nao recarregue
// const Name = document.getElementById("Name").value;//Aqui ele ta pegando o valor do input onde se encontra o id Name
// const lastname = document.getElementById("lastname").value;//Aqui ele ta pegando o valor do input onde se encontra o id lastname
// const email = document.getElementById("email").value;//Aqui ele ta pegando o valor do input onde se encontra o id email
// const password= document.getElementById("password").value; //Aqui ele ta pegando o valor do input onde se encontra o id password
// let all = [Name,lastname,email,password]//Aqui ele ta colocando o valor em array e colocando na variavel all
// let obj = JSON.stringify(all);//aqui ele ta transformando o arquivo em objeto json
// console.log(all)
// console.log(obj)
