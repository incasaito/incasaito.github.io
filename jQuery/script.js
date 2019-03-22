

$(function() {
    
    
    
    $(".navbar-toggler").click(function() {
        $(".burger-toggle").toggle();
        $(".navbar-toggler").toggleClass("navbar-toggled");
        $(".navbar-toggler").toggleClass("outline-bun");
        $(".span").toggleClass("outline-span");
    });
  
    

    $(window).scroll(function() {
        $("#left").css("position","fixed");
    });
    
    
    
});








