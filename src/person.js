/**
 * @author: xuweichen
 * @date: 2015/3/18 19:09
 * @descriptions
 */
function Person(options){
    this.name = options.name;
    this.age = options.age;
    this.photo = options.photo;
}
Person.prototype = {
    constructor: Person,
    sayHi: function(){
        return '我叫'+this.name+', 今年'+this.age+'岁';
    },
    wechat: function(fn){

    }
}