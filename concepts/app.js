new Vue({
    //looks for element with id of 'app' 
    el: '#app',
    data: {
        name: 'Chris Ho',
        job: 'Ninja',
        website : 'https:twitter.com',
        websiteTag: '<a href = "https:twitter.com"> Twitter Link 2</a>',
        age: 21,
        x: 0,
        y: 0,
        c: 0,
        d: 0,
        available: false,
        nearby: false,
        error: false,
        success: false,
        characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        ninjas: [
            {name: 'Ryu', age: 25},
            {name: 'Chris', age: 21},
            {name: 'Ken', age: 18}
        ]
    },
    methods:{
        greet1: function(){
            return 'Good Morning you ugly'
        },
        greet2: function(greetingWord){
            return greetingWord
        },
        sentence: function(){
            return this.name + " is a " + this.job
        },
        add: function(inc){
            this.age += inc
        },
        minus: function(dec){
            this.age -= dec
        },
        updateXY: function(event){
            console.log(event)
            this.x = event.offsetX;
            this.y = event.offsetY;
        },

        click: function(){
            alert("You clicked me")
        },
        logName: function(){
            console.log("You entered your name")
        },
        logAge: function (){
            console.log("You entered your age")
        }
    },
    computed:{
        addToC: function(){
            console.log("addToC")
            return this.c + this.age
        },
        addToD: function(){
            console.log("addToD")
            return this.d + this.age 
        },
        compClasses: function(){
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});