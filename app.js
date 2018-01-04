new Vue({
    //looks for element with id of 'app' 
    el: '#app',
    data: {
        name: 'Chris Ho',
        job: 'Ninja'
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
        }
        
    }
});