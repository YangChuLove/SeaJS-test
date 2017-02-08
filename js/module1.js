/**
 * Created by Administrator on 2017/2/8.
 */
define( function (require,exports,module){
    //require,exports,module这三个参数是固定的，不允许修改的，相当于关键字
    //可写可不写，如果要少写的话，只能少写后面的，不能少写前面的，
    //比如可以写require,exports，也可以写require，不能写exports,module，或者module。
    //一般情况下都写上比较好
    function show(){
        alert(1);
    }
    exports.fn1 = show ;  //exports:对外提供接口的对象,让show这个函数在外面能够找到
})

function show(){
    alert(2);
}