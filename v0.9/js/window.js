/**
 * Created by Leo on 2014/8/20.
 */

define(['jquery'], function ($) {
    function Window() {
        this.cfg = {
            title: "系统消息",
            width: 500,
            height: 300,
            content: "",
            handlerAlertBtn: null,
            hasCloseBtn: false,
            handerCloseBtn: null,
            skinClassName: null,
            textAlertBtn: "确定"
        };
    }

    Window.prototype = {
        alert: function (cfg) {
            var CFG = $.extend(this.cfg, cfg);
            var boundingBox = $(
                '<div class="window_boundingBox">' +
                    '<div class="window_header">'+ CFG.title +'</div>' +
                    '<div class="window_body">'+ CFG.content +'</div>' +
                    '<div class="window_footer">' +
                        '<input class="window_alertBtn" type="button" value="'+ CFG.textAlertBtn +'">' +
                    '</div>' +
                '</div>');
            var btn = boundingBox.find(".window_footer input");
            boundingBox.appendTo("body");
            btn.click(function () {
                CFG.handlerAlertBtn && CFG.handlerAlertBtn();
                boundingBox.remove();
            });

            //设置css样式
            boundingBox.css({
                width: CFG.width + "px",
                height: CFG.height + "px",
                left: (CFG.x || (window.innerWidth - CFG.width) / 2) + "px",
                top: (CFG.y || (window.innerHeight - CFG.height) / 2) + "px"
            });

            //添加关闭按钮
            if (CFG.hasCloseBtn) {
                var closeBtn = $('<span class="window_closeBtn">X</span>');
                closeBtn.appendTo(boundingBox);
                closeBtn.click(function () {
                    CFG.handerCloseBtn && CFG.handerCloseBtn();
                    boundingBox.remove();
                });
            }

            //添加定制的皮肤
            if (CFG.skinClassName) {
                boundingBox.addClass(CFG.skinClassName);
            }

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