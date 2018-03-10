function Component(name){
    this.name = name;
}
Component.prototype.constructor = function(){
    console.log('constructor');
}

Component.prototype.componentDidMount = function(){
    console.log('componentDidMount');
}

Component.prototype.render = function () {
    throw new Error('expect implements render func')
}

Component.prototype.init = function () {
    this.constructor();
    this.componentDidMount();
    this.render();
}