/**
 * Created by Leo on 2014/8/20.
 */

define(['jquery'], function ($) {
    function Window() {
    }

    Window.prototype = {
        alert: function (content, handler) {
            var boundingBox = $('<div class="window_boundingBox"></div>');
            boundingBox.appendTo('body');
            boundingBox.html(content);
            var btn = $('<button>确定</button>');
            btn.appendTo(boundingBox);
            btn.click(function () {
                handler && handler();
                boundingBox.remove();
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