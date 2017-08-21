var p = new Promise((resolve, reject) => {
    resolve(42);
});
// 注意一条原则是，promise一旦决议就不会再改变
p.then(
    function fulfilled(msg) {
        foo.bar();  
        console.log(msg);
    },
    function rejected(err) {
        // 那么现在的话，是永远也不会到达这里
        console.log(err);
    }
);