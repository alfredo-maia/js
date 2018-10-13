//client/app/app.js

//Criar instância do controler

let controller = new NegociacaoController();

//Associando evento do formulário ao metodo do controlle

/* Esse código foi otimizado porque passamos o método para segundo paramentro
   de addEventListener(nomedoevento, função)
document.querySelector('.form').addEventListener ('submit', function(event){
    controller.adciona(event);
})
*/

document.querySelector('.form').addEventListener('submit', 
            controller.adciona.bind(controller));
