$(document).ready(function(){
    
    
    $(window).scroll(function(){
        if( $(this).scrollTop() > 500){
                $(".texto1").slideUp(300);
                
           } else {
                $(".texto1").slideDown(300);
           }
    });
    
    $(window).scroll(function(){
        if( $(this).scrollTop() > 500){
                $(".texto2").slideDown(300);
                
           } else {
                
                $(".texto2").slideUp(300);
           }
    });
    
});