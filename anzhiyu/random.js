var posts=["posts/undefined.html","posts/undefined.html","posts/undefined.html","posts/undefined.html","posts/undefined.html","posts/undefined.html","posts/undefined.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };