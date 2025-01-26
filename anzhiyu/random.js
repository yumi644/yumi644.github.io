var posts=["2025/01/26/hello-world/","2025/01/26/前端知识/","2025/01/26/Git学习笔记/","2025/01/26/前端知识django/","2025/01/26/前端知识vue3/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };