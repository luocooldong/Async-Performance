var  o = {then: function(){}};

var v = Object.create(o);

v.someStuff = "cool";

v.otherStuff = "not so cool";

v.hasOwnProperty("then");
