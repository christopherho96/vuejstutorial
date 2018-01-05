<template>
  <div v-theme:column= "'narrow'" id  = "show-blogs">
      <h1>All Blog Articles</h1>
      <div class = "single-blog" v-for="blog in blogs">
          <h2 v-rainbow>{{blog.title}}</h2>
          <article>{{blog.body}}</article>
      </div>
  </div>
</template>

<script>

export default {

  data () {
    return {
        blogs: []
    }
  },
  methods: {

  },
  created(){
      //get request using http
      // no need to pass in second param to this.$http.get('url', value) since were not posting
      // saves data.body which is an array into our array of blogs
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
          console.log(data.body);
          //gets the first 10 elements in the array
          this.blogs = data.body.slice(0,10);
      })
  }
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}

.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}

</style>
