function add(xPromise, yPromise){
    // Promise.all 接受一个Proimse属组，并且返回以一个新的Promise
    // 这个新的Promise等待属组中的所有Promise完成
    return Promsie.all(
        [xPromise, yPromise]
    )
    
    // 这个Promise决议之后，我们取得收到的X和Y值并加在一起
    .then( function(values){
        // values来自之前决议的Promise的消息属组
        return values[0] + values[1];
    });
}

//  fetchX 和 fetchy 返回相应值的Promise， 可能已经就绪， 也可能时后续
add( fetchx(), fetchy())
// 现在我们得到一个这两个数组的和的Promise,那就可以调用then() 方法来等待Promise的决议
.then( 
// 完成处理函数
function(sum){
    console.log(sum);   //  成功
}, 
// 拒绝处理函数
function(err){
    console.log(err);   //  烦
}
);





