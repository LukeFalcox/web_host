const input = document.querySelector('#arquivo');//Aqui cria as variaveis
const preview = document.querySelector('#preview');//Aqui cria as variaveis
const btnDownload = document.querySelector('#download');//Aqui cria as variaveis

console.log(input);

//Quando o usuario colocar um arquivo ativa a function
input.addEventListener('change', function () {
    const arquivo = this.files[0];//aqui determina a variavel que recebe o arquivo que o usuario colocou e come da pos 0
    const leitor = new FileReader();//aqui cria um objeto que le o arquivo *IMPORTANTE

//Quando o conteudo for lido ativa essa function
    leitor.addEventListener('load',function () {
        console.log(leitor.result);//Aqui mostra o resultado lido do arquivo 
        preview.value = leitor.result;// Aqui mostra na textarea o arquivo lido
    });
//Aqui ele verifica se existe um arquivo e tenta le-lo
    if (arquivo) {
        leitor.readAsText(arquivo);
    }
});
//Aqui é onde começa o download
const download = function () {
    const a = document.createElement('a');//aqui cria uma variavel que recebe um elemento htlm que é criado
    a.style = 'display: none';//aqui nao exibe a tag html
    document.body.appendChild(a);//aqui atribui o elemento html na pagina
    return function (conteudo,nomeArquivo) { //aqui retorna uma 2 função 
        const blob = new Blob([conteudo, {type:'octet/stream'}])//aqui ele transforma o dado em um dado bruto
        console.log(blob)
        const url = window.URL.createObjectURL(blob);//aqui cria a url que disponibiliza a url para download
        a.href = url;//aqui atribui a url para um link
        a.download = nomeArquivo;//aqui atribui o nome do arquivo no link
        a.click();//aqui automatiza o click no js
        window.URL.revokeObjectURL(url);//aqui remove a url
    }
}

btnDownload.addEventListener('click',function () {
    download()(preview.value, 'dados.json')
    
})
