<template>
  <div v-theme:
  
  
  column= "'narrow'" id  = "show-blogs">
      <h1>All Blog Articles</h1>
      <input type= "text" v-model="search" placeholder = "Search blogs"/>
      <div class = "single-blog" v-for="blog in filteredBlogs">
          <!--Apply filter to-uppercase which is created in main.js -->
          <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
          <!--Apply filter snippet which is created in main.js -->
          <article>{{blog.body | snippet}}</article>
      </div>
  </div>
</template>

<script>

export default {

  data () {
    return {
        blogs: [],
        search: ""
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
  },
  computed: {
      filteredBlogs: function(){
          return this.blogs.filter((blog) => {
              return blog.title.match(this.search)
          });
      }
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
