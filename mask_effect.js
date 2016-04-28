$(document).ready(init);

function init() {
   $velocidad = 300;
   $margen = 30;

    $("li").mouseenter(function(e){
        var $alto = $(this).height();
        var $ancho = $(this).width();


        var offset = $(this).offset();
        var y = e.pageY - offset.top;
        var x = e.pageX - offset.left;

        $tapa = $(this).find('.tapa');

        if(x < $margen){
            $tapa.css({"margin-top":"0px","margin-left": -$ancho+"px"});
            $tapa.animate({"margin-left": "0px"},$velocidad);
            $tapa.css("visibility","visible");
        }else if(x > $ancho - $margen){
            $tapa.css({"margin-top":"0px","margin-left": $ancho+"px"});
            $tapa.animate({"margin-left": "0px"},$velocidad);
            $tapa.css("visibility","visible");
        }else if(y < $margen){
            $tapa.css({"margin-left":"0px","margin-top": -$alto+"px"});
            $tapa.animate({"margin-top": "0px"},$velocidad);
            $tapa.css("visibility","visible");
        }else if(y > $alto - $margen){
            $tapa.css({"margin-left":"0px","margin-top": $alto+"px"});
            $tapa.animate({"margin-top": "0px"},$velocidad);
            $tapa.css("visibility","visible");
        }

    });

    $("li").mouseleave(function(e){
        var $alto = $(this).height();
        var $ancho = $(this).width();

        var offset = $(this).offset();
        var y = e.pageY - offset.top;
        var x = e.pageX - offset.left;

        $tapa = $(this).find('.tapa');

        if(x < $margen){
            $tapa.animate({"margin-left": -$ancho+"px"},$velocidad);
        }else if(x > $ancho - $margen){
            $tapa.animate({"margin-left": $ancho+"px"},$velocidad);
        }else if(y < $margen){
            $tapa.animate({"margin-top": -$alto+"px"},$velocidad);
        }else if(y > $alto - $margen){
            $tapa.animate({"margin-top": $alto+"px"},$velocidad);
        }

    });
}
