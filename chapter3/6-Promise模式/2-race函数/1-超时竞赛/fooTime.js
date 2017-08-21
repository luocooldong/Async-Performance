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

Promise.race([
    foo(),  // 启动foo()
    timeoutPromise(3000)  // 给它3秒钟
])
.then(
    function () {
        //  foo 按时完成

    },
    function (err) {
        //  要么foo被拒绝，要么只是没能够按时完成

    }
);
//  在多数情况下，这个超时模式能够很好的完成工作。但是，还有一些微妙的
//  情况需要考虑，并且坦白的讲， 对于Promise.race([ ... ]) 和 Promise.all([ .. ])
//  也都是如此
