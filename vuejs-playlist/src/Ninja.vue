<template>
<div>
    <h1>List of Ninjas</h1>
    <ul>
        <li v-for =" ninja in ninjas">{{ninja}} </li> 
    </ul>
</div>
</template>

<script>
export default {
      ninjas: ['Yoshi', 'Mario', 'Ryu'],
  data() {
    return {
      ninjas: ['Yoshi', 'Mario', 'Ryu']
    }
  }
}
</script>

<!--scoped keyword makes sure only h1 tags from this file go green -->
<style scoped>
h1{
    color: green
}
</style>
