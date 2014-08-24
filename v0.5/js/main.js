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
            content: "Welcome",
            handler: function () {
                alert("确定关闭？");
            },
            width: 600,
            height: 300
        });
    });

});