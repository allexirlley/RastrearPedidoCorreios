    $(function(){


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
            var jsonText = "{";
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
        //console.log(pageToJson())
        window.location.href = 'http://localhost/gerarpdf/rastreiaPedido/response.php?objetos='+pageToJson();
       
    })