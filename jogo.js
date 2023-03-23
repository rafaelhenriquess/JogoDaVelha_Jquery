var rodada = 1;
var matriz_jogo = Array(3);

$(document).ready( function(){
    $('#btn_iniciar').click( function(){
        
        //valida a digitação dos nomes dos jogadores.
        if($('#entrada_nome1').val() == ''){
            alert('Por gentileza, preencha o nome do jogador 1');
            return false;

        }

        if($('#entrada_nome2').val() == ''){
            alert('Por gentileza, preencha o nome do jogador 2');
            return false;
        }

        //exibir os apelidos.
        $('#nome_jogador1').html($('#entrada_nome1').val());
        $('#nome_jogador2').html($('#entrada_nome2').val());

        //Controlar a vizualiação das divs.
        $('#pagina_inicial').hide();
        $('#palco_jogo').show();

    });

    $('.jogada').click(function(){
        var id_campo_clicado = this.id;
        jogada(id_campo_clicado);
    });

    function jogada(id){
        var icone = '';
        var ponto = 0;

        if((rodada % 2) == 1){
            icone = 'url("imagens/marcacao_1.png")'
            ponto = -1
        } else{
            icone = 'url("imagens/marcacao_2.png")'
            ponto = 1
        }

        rodada++;

        $('#'+id).css('background-image', icone);
    }

    
});