

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
    
    
    
    $(".gallery-btn").click(function() {
        $("#modal").css("display","block");
    })
    
    $(".exit").click(function() {
        $("#modal").css("display","none");
    })
    
});








