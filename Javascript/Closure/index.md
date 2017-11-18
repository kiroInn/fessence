# Closure

「闭包」，是指拥有多个变量和绑定了这些变量的环境的
表达式（通常是一个函数），因而这些变量也是该表达式
的一部分。

闭包是个函数，而它「记住了周围发生了什么」。表现为由「一个函数」体中定义了「另个函数」

闭包就是能够读取其他函数内部变量的函数。

# effect
*可以读取函数内部变量*
*让变量的值是种保存在内存中*

# JS的 new到底是干什么的?


var singleton = function(){
    var instance;
    var createInstance = function(){
        this.a = 1;
        this.b = 2;
    }
    return {
        getInstance: function(){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
}
