$(function() {
    // Login button click.
    $("#btn-login").click(function() {
        $("#overlay").fadeIn().css("display", "table");
    });
    
    // Overlay dismiss.
    $("#overlay").click(function() {
        $("#overlay").fadeOut();
    });
    
    $("#login-box").click(function(e) {
        e.stopPropagation();
    });
    
    $("#btn-get-started").click(function(e) {
        window.location.href = "#/register";
    });
});