$(function(){
    
    // Configuração do Menu Responsivo

    $('.container_dashboard .menu_bars i').click(function(){
        var el = $('.menu_vertical');
        if(el.is(':visible')){
            el.hide();
            $('.container_dashboard').css('left','0');
        }else{
            el.show();
            $('.container_dashboard').css('left','245px');
        }
    });

    // A função abaixo garati o menu vertical irá aparecer e reaparecer corretamente 

    $(window).resize(function(){
        var windowWidth = $(window).width();
        var el = $('.menu_vertical');
        if(windowWidth <= 769) {
            $('.menu_bars').css({
              zIndex: '999',
            });

            el.css('display','none');
            $('.container_dashboard').css('left','0');
          }else{
            $('.menu_bars').css({
              zIndex: '-999',
            });

            el.css('display','block');
            $('.container_dashboard').css('left','245px');
        }
 
    });

    // Efeito de seleção dos itens do Menu Vertical

    Item_Selecionado_Menu();

    function Item_Selecionado_Menu(){
        $('.menu_vertical nav ul li a').click(function(){
            $('.menu_vertical nav ul li a').removeClass('selected');
            $(this).addClass('selected');
        })
    }
        
});