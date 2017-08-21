if(! Promise.map){
    Promise.map = function(vals, cb){
         // 一个等待所有map的promise的新promise
         return Promise.all(
            //  一般属组map把值数组转换为promise数组
             vals.map( function(val){
                //  用val异步map之后决议的新promise替换为val
                 return new Promise( function(resolve, reject){
                     cb(val, resolve);
                 });
             })
         );
    };
}

// 注意在这个map中不能发送拒绝信号， 但是如果在映射的回调内出现同步的异常或错误，
// 主Promise.map返回的Promise就会拒绝。


// 下面我们来展示在一组Promise上如何使用map

var p1 = Promise.resolve(21);
var p2 = Promise.resolve(42);
var p3 = Promise.resolve("Oops");

//  把列表中的值加倍，即便是在Promise中
Promise.map([p1, p2, p3], function(pr, done){
    // 保证这一条本身是一个Promise
    Promise.resolve(pr)
    .then(
        // 提取值作为v
        function(v){
            done( v*2 );
        },
        done
    ); 
})
.then( function(vals){
    console.log(vals);
});

