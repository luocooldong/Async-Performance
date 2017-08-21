// 如果向Peomise.resolve() 传递一个非Promise，非thenable的立即值，就会得到一个用这个值
// 填充的promise
var p1 = new Promise(function (resolve, reject) {
    resolve(42);
});

var p2 = new Promise.resolve(42);



// 如果向promise传递一个真正的Promise， 就只会返回同一个promise
var p1 = Promise.resolve(42);

var p2 = Promise.resolve(p1);

p1 == p2;




var p = {
    then: function (cb, errcb) {
        cb(42);
        errcb("haha");
    }
};

p.then(
    function fulfilled(val) {
        console.log(val);
    },
    function rejected(err) {
        console.log(err);
    }
);


Promise.resolve(p)
    .then(
    function fulfilled(val) {

    },
    function reject(err) {

    }
    );
    

//   可信任的Promise 封装工具
Promise.resolve(foo(42))
    .then(function (v) {
        console.log(v);
    });


