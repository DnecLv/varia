var data = { acc: 'good' }

// Object.freeze(data) 这会阻止传值

var exp = new Vue({
    el: '#app',
    data: {
        data,
        name: 'Dnec',
    },
    created: function () {
        // `this` 指向 vm 实例
        console.log('a is: ' + this.data)}
});
// vm.a == data.a 