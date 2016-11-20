# Rastrear Pedido Correios
Funções php e javascript para pegar informações de um objeto postado pelos Correios.

No arquivo RastrearPedido.php você encontra as chamadas principais aos demais arquivos necessários. 

# ARQUIVO FUNCTIONS.PHP

Este arquivo possui uma função que solicita como argumento o código do objeto a ser rastreado, ela faz uma requisição ao link de consulta dos correios que retorna uma página html como resposta. 
A função rastrear() retira somente a tabela com as informações do andamento do objeto, e renderiza essa tabela.

# ARQUIVO FUNCTION.JS

Neste arquivo vc encontra a função que faz a parte díficil, ela pega somente os dados dentro da tabela e transforma-os em um objeto JSON, que é retornado pela função.
Ainda neste arquivo existe um redirecionamento para a página response.php que devolve os dados em um array para ser manipulado no php.

<h1>Usar como web service</h1>
Para usar estes arquivos como web service é necessário configurar no arquivo function.js a seguinte linha:

 <pre> window.location.href = 'http://meudominio.com.br/response.php?objetos='+pageToJson(); </pre>
  
Basta colocar o caminho para o arquivo response.php que estará no servidor.
A aplicação que usará o web service deve fazer uma requisição HTTP GET para o arquivo principal <pre>RastrearPedido.php?codigo=PN123456789BR </pre> com o código do objeto como parâmetro na url.

Caso não altere o código da página response.php terá como reorno m array com as informações do andamento do objeto.
