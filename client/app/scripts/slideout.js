"use strict";
$(function () {
    $("#friends-toggle-click").click(function(e) {
        e.preventDefault();
        if ($("#friends").hasClass("out")) {
            $("#friends").animate({marginRight: '-250px'}, {queue: false, duration: 500}).removeClass("out");
        } else {
            $("#friends").animate({marginRight: '0px'}, {queue: false, duration: 500}).addClass("out");
        }
    });
});