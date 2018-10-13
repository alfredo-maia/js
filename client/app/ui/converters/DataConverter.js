//"app/ui/converters/DateConverter.js"  

class DataCoverter {

    paraTexto(data) {
        return data.getDate() + '/'
            + data.getMonth() + '/'
            + data.getFullYear()
    }

    paraData(texto) {
        return new Date(...texto.split('/').map((item, indice) => {
            return item - (indice % 2);
        }))
    }
}