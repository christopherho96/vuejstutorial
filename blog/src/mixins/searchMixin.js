export default{
    computed: {
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
        }
    }
}