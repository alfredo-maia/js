class NegociacaoController {
    //adicionar metódo de adição
    adciona(event){
        //Cancelando a submissão do formulário 
        event.preventDefault();

        alert('Chamando a ação do controller');
    }
}