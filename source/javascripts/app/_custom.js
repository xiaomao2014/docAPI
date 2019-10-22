//= require ../lib/_lunr
//= require ../lib/_jquery
//= require ../lib/_jquery.highlight
;(function () {
    'use strict';
    // url信息
    console.log(window.location);
    var dom = $('.content > h1').text()
    console.log(dom)
    // function bind() {
    //     content = $('.content');
    //     searchResults = $('.search-results');
    //
    //     $('#input-search').on('keyup',function(e) {
    //         var wait = function() {
    //             return function(executingFunction, waitTime){
    //                 clearTimeout(timeoutHandle);
    //                 timeoutHandle = setTimeout(executingFunction, waitTime);
    //             };
    //         }();
    //         wait(function(){
    //             search(e);
    //         }, searchDelay );
    //     });
    // }
})();

