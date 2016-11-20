    $(function(){

        /*
        *   Pega as informações da página e monta um array de objetos JSON
        *   @author Lucas Firmino
        *   @date 19/11/2016
        */
        function pageToJson(){
            
            var array = new Array();
            var novoArray = new Array();
            var texto = "";
            var objetos = $('tbody').children('tr').children('td');

            $.each(objetos, function(i, iten){
                if (i > 2) {
                    novoArray.push(iten); 
                }
            });
            $.each(novoArray, function(i, iten){
                if (i %  4 == 0) {
                     texto += "@"+iten.textContent//linha
                }else{
                    texto += "#"+iten.textContent//coluna
                }
            })

             var lista = texto.split('@');
             var response = new Array();
             $.each(lista, function(i, iten){
                if (i > 1) {
                    response.push({
                        "data" : iten.split('#')[0],
                        "origem" : iten.split('#')[1],
                        "status" : iten.split('#')[2],
                        "destino" : (iten.split('#')[3] == null) ? "" : iten.split('#')[3]
                    })
                }
             })

             return JSON.stringify(response);
        }
        
        /*
        *   Redireciona para uma página php, para ser manipulado como um array
        *   Aqui deve ser colocado a url para o arquivo response.php enviando como *parametro na url a chave objetos com o valor de retorno da função pageToJson()
        */
        window.location.href = 'http://localhost/gerarpdf/rastreiaPedido/response.php?objetos='+pageToJson();
       
    })