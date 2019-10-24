;(function () {
    'use strict';

    console.log("此js文件是放到index.html文件body后面")

    // url信息
    console.log("url信息:" + window.location);
    var dom = $('.content > h1').text()
    console.log("测试打印h1的值：" + dom)

    // jQuery点击事件写法两种：
    // $("#text1").on("click",function(){
    //     alert("hellworl");
    // });
    //
    // $("#text2").click(function(){
    //     alert("hellwor2");
    // });

    // $(".en-button").click(function(){
    //     $(this).hide();
    //     $(".cn-button").show();
    // });
    // $(".cn-button").click(function(){
    //     $(this).hide();
    //     $(".en-button").show();
    // });
})();

