"use strict";

var context;
var paint = false;
var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();


(function(window, document, undefined) {
    window.onload = function() {
        var canvas = document.getElementById("drawing-box-canvas");
        context = canvas.getContext("2d");

        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        $("#drawing-box-canvas").mousedown(function(e) {
            paint = true;
            addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
            redraw();
        });

        $("#drawing-box-canvas").mousemove(function(e) {
            if (paint) {
                addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
                redraw();
            }
        });

        $("#drawing-box-canvas").mouseup(function(e) {
            paint = false;
        });

        $("#drawing-box-canvas").mouseleave(function(e) {
            paint = false;
        });
    };
})(window, document, undefined);

function addClick(x, y, dragging) {
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
}

function redraw() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.strokeStyle = "#0f0";
    context.lineJoin = "round";
    context.lineWidth = 5;

    for (var i = 0; i < clickX.length; ++i) {
        context.beginPath();

        if (clickDrag[i] && i)
            context.moveTo(clickX[i - 1], clickY[i - 1]);
        else
            context.moveTo(clickX[i] - 1, clickY[i]);

        context.lineTo(clickX[i], clickY[i]);
        context.closePath();
        context.stroke();
    }
}