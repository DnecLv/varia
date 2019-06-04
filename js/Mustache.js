var data = { acc: 'good' }

// Object.freeze(data) 这会阻止传值

var exp = new Vue({
    el: '#app',
    data: {
        data,
        name: 'Dnec',
        trys: 'mei yong',
        styles: "<b style='color:red;text-decoration:underline'> 这是v-html</b>"
    },
    created: function () {
        // `this` 指向 vm 实例
        console.log('a is: ' + this.data)}
});
// vm.a == data.a 

exp.trys = 'you yong'