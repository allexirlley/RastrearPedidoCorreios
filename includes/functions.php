<?php
/**
*Fonte:http://fazer-site.net/fazer-script-php-de-rastreamento-correios-com-file_get_contents/
* autor: Anderson Makiyama 
* (Levemente auterada da original) Retorna todos os eventos do objeto dado o código de rastreamento
* @param string $codigo - Código de rastreamento dos correios
* @return [html table] - retorna tabela formatada com os dados
**/
function rastrear($codigo){
 
    $url = 'http://websro.correios.com.br/sro_bin/txect01$.Inexistente?P_LINGUA=001&P_TIPO=002&P_COD_LIS=' . $codigo;
 
    $retorno = file_get_contents($url);
    
    preg_match('/<table  border cellpadding=1 hspace=10>.*<\/TABLE>/s',$retorno,$tabela);
 
   if(count($tabela) == 1){
        
        return $tabela[0];  
    
   }else{
        
        return "ojbeto não encontrado";   
   }
 
}