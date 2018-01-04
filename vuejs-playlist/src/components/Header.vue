<template>
    <header>
        <h1 v-on:click= "changeTitle">{{title}}</h1>
    </header>
</template>

<script>

export default {
    props: {
        title: {
            type: String
        }
    },
  data () {
    return {
    }
  },
  methods: {
      changeTitle: function(){
          //emit fires off an event with (name, value) so that root component can listen for event
          this.$emit('changeTitle', 'Vue Wizards');
          // 1. 'Vue Wizards' is value emitted
      }
  }
}
</script>


<style scoped>
header{
    background: lightgreen;
    padding: 10px;
}

h1{
    color: #222;
    text-align: center
}
</style>
