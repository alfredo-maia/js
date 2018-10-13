class NegociacaoController {

    //Criando construtor para otmizar a performace
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }
    //adicionar metódo de adição
    adciona(event) {


        //Cancelando a submissão do formulário 
        event.preventDefault();

        /*Modo sem otimização de código
        let inputData = document.querySelector('#data');
        let inputQuantidade = document.querySelector('#quantidade');
        let inputValor = document.querySelector('#valor');
        */

        /* Forma que o Matheus resolveu
        let $ = (argumento) => {
            return document.querySelector(argumento);
        };
        */

        //Forma do Livro
        //A função bind matém a função querySelector dentro do contexto de document
        //let $ = document.querySelector.bind(document);
        /*
        //Código otimizado        
        let inputData = $('#data');
        let inputQuantidade = $('#quantidade');
        let inputValor = $('#valor');
        */

        /*

        //Testes realizado no controller
        SS
        //Imprimindo valores afim de teste
        console.log('Data: ' + inputData.value);
        console.log('Quantidade: ' + inputQuantidade.value);
        console.log('Valor: ' + inputValor.value);

        //Especificando o tipo, o retorno é uma string
        console.log(typeof (inputData.value));
        console.log(typeof (inputQuantidade.value));
        console.log(typeof (inputValor.value));
        */
        //Convertendo para tipos especcificos
        //console.log(typeof (this._inputData.value));
        //console.log(typeof (parseInt(this._inputQuantidade.value)));
        //console.log(typeof (parseFloat(this._inputValor.value)));

        //Criando nossa negociação
        
        let negociacao = new Negociacao(
           /* new Date(this._inputData.value), Errado porque dá pau quando passo uma string
                    
                    var data = new Date (['year','mon','day']); 
                        -> Funciona passando esse paramêtros
                         
                    *********** Exemplo de uso de join
                     dataString = '2016-12-11'; lista = dataString.split('-'); // separou os números 
                    lista = lista.join(',') // juntou os números usando vírgula como separador 
                    console.log(lista);

                    Criando data de outra forma:   
            */        
            // Um forma de resolver a entrada 
            //new Date(this._inputData.value.split('-')),
            //Outra forma de resolver
            //new Date(this._inputData.value.replace(/-/g , ',')), Usando um expressão regular
            //Mais um forma de receber a data ainda fica com erro no mês
            //new Date (...this._inputData.value.split('-')),
            //Solução quase definitiva definitiva
            /*
            new Date (...this._inputData.value
                          .split('-').map( function(item, indice){
                                    if (indice == 1) {
                                        return item - 1;
                                    }

                                    return item;

                          }))    ,
            this._inputQuantidade,
            this._inputValor
            */

         /*
         new Date (...this._inputData.value
                         .split('-')
                          .map( function (item, indice){
                              return item - indice % 2;
                          })
                                                )
        );
        */

        //Usando arrow fuctions
        //Data
        new Date (...this._inputData.value
                         .split('-')
                         .map( (item, indice) => {
                                return item - indice % 2
                         }))                                    ,
        //Quantidade
        this._inputQuantidade.value                                   ,
        this._inputValor.value
        )
        //Criando data de outra forma
        //new Date (['year','mon','day'])
        console.log(negociacao.dataFormatada);
        
        alert('Negociação Incluída!')
    }
}