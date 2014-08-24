/**
 * Created by Leo on 2014/8/20.
 */

define(['jquery'], function ($) {
    function Window() {
        this.cfg = {
            width: 500,
            height: 300,
            content: "",
            handler: null
        };
    }

    Window.prototype = {
        alert: function (cfg) {
            var CFG = $.extend(this.cfg, cfg);
            var boundingBox = $('<div class="window_boundingBox"></div>');
            boundingBox.appendTo("body");
            boundingBox.html(CFG.content);
            var btn = $("<button>确定</button>");
            btn.appendTo(boundingBox);
            btn.click(function () {
                CFG.handler && CFG.handler();
                boundingBox.remove();
            });

            //设置css样式
            boundingBox.css({
                width: CFG.width + "px",
                height: CFG.height + "px",
                left: (CFG.x || (window.innerWidth - CFG.width) / 2) + "px",
                top: (CFG.y || (window.innerHeight - CFG.height) / 2) + "px"
            });

        },
        confirm: function () {

        },
        prompt: function () {

        }
    };

    return {
        Window: Window
    };

});