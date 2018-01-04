Vue.component('greeting',{
    template: '<p>Hey there, I am {{name}}. <button v-on:click= "changeName">Change Name</button></p>',
    data: function(){
        return{
            name: 'Yoshi'
        }
    },
    methods:{
        changeName: function(){
            this.name = 'Mario'
        }
    }
})

var one = new Vue({
    el: "#vue-app-one",
    data:{
        title: 'Vue App One'
    },
    methods: {

    },
    computed:{
        greet: function(){
            return 'Hello from app one'
        }
    }
});

var two  = new Vue({
    el: "#vue-app-two",
    data:{
        title: 'Vue App Two'
        
    },
    methods: {
        changeTitle: function(){
            one.title = "title changed"
        }
    },
    computed:{
        greet: function(){
            return 'Hello from app two'
        }
    }
});

var three = new Vue({
    el: "#vue-app-three",
    data: {
        output: 'chicken'
    },
    methods: {
        readRefs: function(){
            console.log(this.$refs.test.innerText)
            this.output = this.$refs.input.value
        }
    }
});

two.title = "Changed From outside vue instance"