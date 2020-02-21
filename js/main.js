var data = { acc: 'good' }

// Object.freeze(data) 这会阻止传值

var exp = new Vue({
    el: '#app',
    data: {
        data,
        name: 'Dnec',
        trys: '',
    },
    created: function () {
        // `this` 指向 vm 实例
        console.log('a is: ' + this.data)}
});
// vm.a == data.a 

exp.trys = 'you yong'

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: '页面加载于 ' + new Date().toLocaleString()
    }
  })

var vue3 = new Vue({
  el: '#app-3',
  data:{
    index:1,
  },
  methods: {
    changes: function () {
      if(this.index == 1){
        this.index++;
      }
      else{
        this.index--;
      }
    }
  },
})
var vue4 = new Vue({
  el: '#app-4',
  data:{
    joke:"jokkkkke"
  },
  methods: {
    getjoke: function () {
      var that = this;
      axios.get("https://autumnfish.cn/api/joke/").then
      (function(response){
        that.joke = response.data;
      },function(err){  })
    }
  },
})

var vue5 = new Vue({
  el: '#app-5',
  data:{
    city:'杭州',
    weatherList:[]
  },
  methods: {
    search:function(){
      var that = this;
      axios.get("http://wthrcdn.etouch.cn/weather_mini?city="+this.city).then((response) => {
        that.weatherList = response.data.data.forecast
      }).catch((err) => {
        
      });
    },
    change:function(city){
      this.city = city;
      this.search();
    }
  },
})