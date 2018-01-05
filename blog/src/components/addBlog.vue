<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if = "!blog.submitted">
        <label>Blog Title:</label>
        <input type ="text"  v-model.lazy= "blog.title" required/>
        <label for="">Blog Content</label>
        <textarea v-model.lazy="blog.content"></textarea>
        <div id = "checkboxes">
            <!--Checkbox binding -->
            <!-- v-model automatically appends the value into the blog.categories array -->
            <label>Ninjas</label>
            <input type = "checkbox" value="ninjas" v-model="blog.categories"/>
            <label>Wizards</label>
            <input type = "checkbox" value="wizards" v-model="blog.categories"/>
            <label>Mario</label>
            <input type = "checkbox" value="mario" v-model="blog.categories"/>
            <label>Cheese</label>
            <input type = "checkbox" value="cheese" v-model="blog.categories"/>
        </div>

        <label>Author:</label>
        <!--When an option is selection, the select model auto gets the value of the selected option from within tag -->
        <select v-model = "blog.author">
            <option v-for = "author in authors">{{author}}</option>
        </select>

        <button v-on:click.prevent= "post">Add Blog</button>

    </form>

    <div v-if = "blog.submitted">
        <p>You have submitted your post</p>
    </div>
    <div id = "preview">
        <h3>Preview Blog</h3>
        <p>Blog Title: {{blog.title}}</p>
        <p>Blog Content:</p>
        <p>{{blog.content}}</p>
        <p>Blog Categories:</p>
        <ul>
            <!--v-for loops through the blog.categories and outputs each element  -->
            <li v-for = "category in blog.categories">{{category}}</li>
        </ul>
        <p>Blog Author</p>
        <p>{{blog.author}}</p>

    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
        blog: {
            title: "",
            content: "",
            categories: [],
            author: "",
            submitted: false
        },
        authors: ['Chris', 'Ted', 'Jeremy']
    }
  },
  methods: {
      // we create a method called 'post', where post is JUST the name of the method
      // use this.$http.post('url', {value}) to post to url of database
      // then add on the .then(function(data)){} and do something one post is done
      // the data in the then(function(data)) is usually the data you post
         post: function(){
          this.$http.post('https://jsonplaceholder.typicode.com/posts',{
              title: this.blog.title,
              body: this.blog.content,
              userId: 1
          }).then(function(data){
              console.log(data)
              this.blog.submitted = true
          });
      }
  }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}

#checkboxes input {
    display: inline-block;
    margin-right: 10px;

}

#checkboxes label{
    display: inline-block
}
</style>
