var p = Promise.resolve(21);

p.then( function(v){
    console.log(v);
    // 创建一个Promise并将其返回
    return new Promise(function(resolve, reject){
         resolve(v*2);
    });
})
.then( function(v){
    console.log(v);
});

