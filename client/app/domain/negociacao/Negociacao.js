//Domínio da Negociação

class Negociacao {

    constructor(_data, _quantidade, _valor){
        //this._data = data; //data atula - Atualização de segurança
        /*
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        //Congelando tos os atributos do Objeto
        Object.freeze(this);

        --> Podemos substituir todas essas atibuições por uma apenas
            usando o Object Assign: :)
        */
        //Copiando para a instância this o valor das novas propriedades

        /*Usando Object Assign no construtor do Objeto
        Object.assign(this, {_data: new Date(data.getTime()) , 
                             _quantidade: quantidade         , 
                             _valor: valor});
        //Congelando o valor do objeto
        Object.freeze(this);
        */
        
        /*
        Object.assign(this, {_data: new Date(_data.getTime()) ,
                             _quantidade: _quantidade         ,
                             _valor: valor 
        });
        Object.freeze(this);
        
        Convencionalmete para melhor entendimento do código definimos que toda
        variável que for modificada antes do código não sera embutida dentro da
        do método Object Assing
        */

        //Show de Bola
        Object.assign(this,{_quantidade: _quantidade    ,
                            _valor: _valor});
        this._data = new Date(_data.getTime());
        Object.freeze(this);
        
    }

    get volume (){
        return this._quantidade * this._valor;
    }

    get data (){
        //return this._data;
        //Programação defensiva dessa forma eu retorno uma cópia e não o valor original
        return new Date(this._data.getTime());
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor (){
        return this._valor;
    }
}