class NegociacaoController {
    //adicionar metódo de adição
    adciona(event){
        //Cancelando a submissão do formulário 
        event.preventDefault();

        let inputData = document.querySelector('#data');
        let inputQuantidade = document.querySelector('#quantidade');
        let inputValor = document.querySelector('#valor');

        //Imprimindo valores afim de teste
        console.log('Data: ' + inputData.value);
        console.log('Quantidade: ' + inputQuantidade.value);
        console.log('Valor: ' + inputValor.value);

        //Especificando o tipo, o retorno é uma string
        console.log(typeof(inputData.value));  
        console.log(typeof(inputQuantidade.value));
        console.log(typeof(inputValor.value));

        //Convertendo para tipos especcificos
        console.log(typeof(inputData.value));  
        console.log(typeof(parseInt(inputQuantidade.value)));
        console.log(typeof(parseFloat(inputValor.value)));
    }
}