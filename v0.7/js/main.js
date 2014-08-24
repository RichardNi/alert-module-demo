/**
 * Created by Leo on 2014/8/20.
 */

require.config({
    paths: {
        jquery: 'jquery-1.11.1.min'
    }
});

require(['jquery', 'window'], function ($, w) {
    $('#a').click(function () {
        console.log('点击按钮！');
        new w.Window().alert({
            title: "消息",
            content: "Welcome",
            handlerAlertBtn: function () {
                alert("你点击了确定按钮");
            },
            width: 300,
            height: 150,
            hasCloseBtn: true,
            handerCloseBtn: function () {
                alert("你点击了关闭按钮");
            }
        });
    });

});