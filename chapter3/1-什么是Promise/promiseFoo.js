function foo(x){
    // 开始做一些可能耗时的工作
    // 构造并返回一个Promise

    return new Promise( function(resolve, reject){
        // 最终调用resolve 或者reject
        // 这时Promise的决议回调
        resolve();
    });
}

var p = foo(42);

bar(p);
// baz(p);


function bar(fooPromise){
    // 侦听foo 完成
    fooPromise.then(
        function(){
            // foo 已经完成， 所以执行bar的任务
            console.log("Fuck");
            console.log("genyudong");
        },
        function(){
            // 啊，真的出错了

        }
    )
}


