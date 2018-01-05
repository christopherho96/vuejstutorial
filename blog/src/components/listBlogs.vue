<template>
  <div v-theme:column= "'narrow'" id  = "show-blogs">
      <h1>List Blog Titles</h1>
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

import searchMixin from '../mixins/searchMixin';

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
      /*
      //custom search filter 
      filteredBlogs: function(){
          //this return statement will return the array of blogs that contain the searchtext
          // the (blog) is each blog that it loops through to check
          // then for each blog, we run another function =>
          // then it checks the individual blog's title for search text
          return this.blogs.filter((blog) => {
              //this return statement will return true or false if the blog its currently filtering contains the search text
              return blog.title.match(this.search)
          });
      } */
  },

  //registering filters and directives locally instead of globally through main.js
  filters:{
      'toUppercase': function(value){
            return value.toUpperCase()
      },
        //these 2 functions are identical
      /* toUppercase(value){
            return value.toUpperCase()
      }*/
  },
  directives:{
      'rainbow':{
            bind(el, binding, vnode){
             el.style.color = "#" + Math.random().toString().slice(2,8);
        }
      }
  },
  mixins: [searchMixin]
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