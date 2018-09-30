//Client/app/index.js

var campos = [
        document.querySelector('#data'),
        document.querySelector('#valor'),
        document.querySelector('#quantidade')
];

console.log(campos);

//Pegando a table body
var tbody = document.querySelector('table tbody');

//Associando a função de alerta ao evento submit
document.querySelector('.form').addEventListener('submit', function(event){
    //Cancelando a submissão do formulário
    event.preventDefault();
    //Criando um novo elemento
    var tr = document.createElement('tr');
    //Usando ForEach do Array para criar as tds
    campos.forEach(function(campo){
        //criando uma td vazia
        var td = document.createElement('td');
        //Atribuindo valor a td
        td.textContent = campo.value;
        //Adicionando td a tr
        tr.appendChild(td);
    });

    //Nova td que armazenará o volume da negociação
    var tdvolume = document.createElement('td');
    //As posições 1 e 2 armazenam o valor e a quantidade respectivamente
    tdvolume.textContent = campos[1].value * campos[2].value;
    //Adicionando a td que faltava a tr
    tr.appendChild(tdvolume);
    //Adicionando nossa tabela a tbody
    tbody.appendChild(tr);
    //Limpando o campo da data
    campos[0].value = '';
    //Limpando o campo quantidade
    campos[1].value = '';
    //Limpando o campo valor
    campos[2].value = '';
   //Adcionando focus no campo data
   campos[0].focus(); 
});
