$(function() {
    var btns = $("#chat-header-buttons button");
    var chat = $("#chat-body");
    var profile = $("#friend-profile-body");
    $(".overlay").click(function(e) {
        if ($(e.target).hasClass("overlay-wrapper"))
            $(this).fadeOut();
    });
    $("#chat-new-picture").click(function(e) {
        e.preventDefault();
        $("#overlay-new-picture").fadeIn().css("display", "table");
    });
    $(".chat-item a").click(function(e) {
        e.preventDefault();
        var src = $(this).children("img").attr("src");
        $("#view-picture-box > img").attr("src", src);
        $("#overlay-view-picture").fadeIn().css("display", "table");
    });
    $("#friends-list-container > ul > li > a > img").hover(function() {
        var name = "Robert";
    }, function() {
    });
    $("#friends-list-container > ul > li > a").click(function(e) {
        e.preventDefault();
        var pointer = $("#chat-arrow");
        var pos = $(this).offset().left + $(this).width() / 2;
        var offset = {
            left: pos - pointer.width() / 2 - $("#chat-header").offset().left
        };
        pointer.animate(offset);
        $("#btn-goto-profile").removeClass("disabled");
        $("#btn-goto-chat").addClass("disabled");
        if (profile.css("display") !== "none") {
            profile.fadeOut("fast");
            chat.fadeIn("fast");
        }
    });
    $("#btn-goto-profile").click(function(e) {
        e.preventDefault();
        if (!$(this).hasClass("disabled")) {
            btns.toggleClass("disabled");
            chat.fadeOut("fast");
            profile.fadeIn("fast");
        }
    });
    $("#btn-goto-chat").click(function(e) {
        e.preventDefault();
        if (!$(this).hasClass("disabled")) {
            btns.toggleClass("disabled");
            profile.fadeOut("fast");
            chat.fadeIn("fast");
        }
    });
});