if(!Promise.first){
    Promise.first = function(prs){
        return new Promise( function(resolve, reject){
            // 在所有Promise上进行循环
            prs.array.forEach(function(element) {
                //  把值规整化
                Promise.resolve(pr)
                //  不管哪个最先完成，就决议主Promise
                .then(resolve);
            }, this);
        })
    }
}