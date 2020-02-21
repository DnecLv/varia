var musictype = new Vue({
    el:"#musictype",
    data:{
        query:"",
        musiclist:[],
        musicUrl:"",
        musicCover:"",
        hotComments:[],
        isPlaying:0,
    },
    methods: {
        //歌曲搜索
        searchMusic:function(){
            var that = this;
            axios.get("https://autumnfish.cn/search?keywords="+this.query).
            then((response) => 
            {
                that.musiclist = response.data.result.songs;
            }).catch((err) => {
            
            });
        },

        
        playMusic: function(musicId){
            var that = this;
            
            
            // 歌曲URL获取      
            axios.get("https://autumnfish.cn/song/url?id="+musicId)
            .then((response) => 
            {               
                that.musicUrl = response.data.data[0].url;
            }).catch((err) => {
            
            });


            //歌曲封面获取
            axios.get("https://autumnfish.cn/song/detail?ids="+musicId)
            .then((response) => 
            {               
                that.musicCover = response.data.songs[0].al.picUrl;
            }).catch((err) => {
            
            });


            //歌曲评论获取
            axios.get("https://autumnfish.cn/comment/hot?type=0&id="+musicId)
            .then((response) => 
            {         
                that.hotComments = response.data.hotComments;
            }).catch((err) => {
            
            });
        },
        play:function() {
            this.isPlaying = 1
        },
        pause:function()
        {
            this.isPlaying = 0
        },
    },
})