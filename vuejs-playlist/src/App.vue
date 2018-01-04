<template>
  <div>
    <!-- 2. $event takes the value of 'Vue Wizards which is passed from the emit' -->
    <!-- 3. The value is then passed into the method updateTable()-->
    <app-header v-bind:title = "title" v-on:changeTitle = "updateTitle($event)"></app-header>
    <app-ninjas v-bind:ninjas = "ninjas"></app-ninjas>
    <hr>
    <app-ninjas v-bind:ninjas = "ninjas"></app-ninjas>
    <app-footer v-bind:title = "title"></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Ninjas from './components/Ninjas.vue';


export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-ninjas': Ninjas
  },
  data () {
    return {
            ninjas: [
                {name: 'Ryu', speciality: 'Vue Components', show: false},
                {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
                {name: 'Hitoshi', speciality: 'Click Events', show: false},
                {name: 'Tango', speciality: 'Conditionals', show: false},
                {name: 'Kami', speciality: 'Webpack', show: false},
                {name: 'Yoshi', speciality: 'Data Diggin', show: false}
            ],
            title: 'Vue Ninjas'
    }
  },
  methods: {
    //4. updateTitle() recieves a paramter called updatedTitle which is equal to $eventm which is originally equal to 'Vue Wizards'
    updateTitle: function(updatedTitle){
      this.title = updatedTitle
    }
  }
}
</script>


<style scoped>

</style>
