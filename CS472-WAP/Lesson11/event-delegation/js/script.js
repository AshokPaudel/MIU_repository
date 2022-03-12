$("#articlesList ").click ("a",function(event){
    event.preventDefault();
    $("#articlesList").append("<article><p>Article Title -<a id ='test' href='http://www.google.com'>Click to Add a new Article</a></p></article>")
});