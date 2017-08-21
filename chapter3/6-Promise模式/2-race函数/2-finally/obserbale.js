if(!Promise.observe){
    Promise.observe = function(pr, cb){
        // 观察pr的决议
        pr.then(
            function fulfilled(msg){
                // 安排异步回调作为Job
                Promise.resolve(msg).then(cb);

            },
            function rejected(err){
                Promise.resolve(err).then(cb);
            }
        );

        //  返回最初的promise
        return pr;
    }
}

// 用于超时一个Prmise的 工具
function timeoutPromise(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("Timout!");
        }, delay);
    });
}

function foo(x) {
    // 开始做一些可能耗时的工作
    fetch("http://some.url.1/");
    // 构造并返回一个Promise
    return new Promise(function (resolve, reject) {
        // 最终调用resolve 或者reject
        // 这时Promise的决议回调
        resolve();
    });
}

// 
Promise.race([
    Promise.observe(
        foo(),
        function cleanup(msg){
          // 在foo之后清理，即使它没有在超时之前完成

        }
    ),
    timeoutPromise(3000)
])
.then(
    function () {
        //  foo 按时完成

    },
    function (err) {
        //  要么foo被拒绝，要么只是没能够按时完成

    }
);