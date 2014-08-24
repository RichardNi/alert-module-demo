/**
 * Created by Richard on 2014/8/20.
 */

require.config({
    paths: {
        jquery: 'jquery-1.11.1.min'
    }
});

require(['jquery', 'window'], function ($, w) {
    $('#a').click(function () {
        new w.Window().alert({
            title: "消息",
            content: "Welcome",
            handlerAlertBtn: function () {
                alert("你点击了Alert按钮");
            },
            width: 400,
            height: 200,
            y:200,
            hasCloseBtn: true,
            handerCloseBtn: function () {
                alert("你点击了关闭按钮");
            },
            skinClassName: "window_skin_a",
            textAlertBtn: "OK"

        });
    });

});