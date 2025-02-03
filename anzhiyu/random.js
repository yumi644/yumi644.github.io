var posts=["posts/undefined.html","posts/91ce7628.html","posts/7c43b8a8.html","posts/c74774e6.html","posts/f9940255.html","posts/6c27b784.html","posts/a91eaa72.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };