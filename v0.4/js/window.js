/**
 * Created by Leo on 2014/8/20.
 */

define(['jquery'], function ($) {
    function Window() {
        this.cfg = {
            width: 500,
            height: 300
        };
    }

    Window.prototype = {
        alert: function (content, handler, cfg) {
            var boundingBox = $('<div class="window_boundingBox"></div>');
            boundingBox.appendTo("body");
            boundingBox.html(content);
            var btn = $("<button>确定</button>");
            btn.appendTo(boundingBox);
            btn.click(function () {
                handler && handler();
                boundingBox.remove();
            });

            $.extend(this.cfg, cfg);
            console.log("window.innerWidth:", window.innerWidth);
            console.log("window.innerHeight:", window.innerHeight);
            console.log("width:", this.cfg.width);
            console.log("height:", this.cfg.height);
            //设置css样式
            boundingBox.css({
                width: this.cfg.width + "px",
                height: this.cfg.height + "px",
                left: (this.cfg.x || (window.innerWidth - this.cfg.width) / 2) + "px",
                top: (this.cfg.y || (window.innerHeight - this.cfg.height) / 2) + "px"
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