describe('sayHi 的时候说我是xxx，今年x岁', function(){
    it('姓名是中文，年龄是数字', function(){
        var x = new Person({
            name: '李磊',
            age: 19,
            photo: 'http://a.com'
        });
        expect(x.sayHi()).toEqual('我叫李磊, 今年19岁');
    });
})