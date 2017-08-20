// 用于超时一个Prmise的 工具
function timeoutPromise(delay){
    return new Promise( function(resolve, reject){
        setTimeout( function(){
            reject("Timout!");
        }, delay);
    });
}

// 设置Foo() 超时
Promise.race([
    foo(),     // 试着开始foo()
    timeoutPromise(3000)   // 并且给它3秒钟
])
.then(
    function(){
        // foo 及时完成

    },
    function(err){
        // 或者foo() 被拒绝， 或者只是没能按时完成
        // 查看err来了解是哪种情况
        console.log(err);
    }
)