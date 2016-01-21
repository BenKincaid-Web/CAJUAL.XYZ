
function renderPosts(posts) {
    var postsDiv = document.getElementById("posts");
    
    posts.forEach(function (post) {  
    var postDiv = document.createElement("div");
    var postNameDiv = document.createElement("div");
    var postAuthorDiv = document.createElement("div");
    var postDateDiv = document.createElement("div");
    var postContentDiv = document.createElement("div");
    
    postNameDiv.innerHTML = post.name;
    postAuthorDiv.innerHTML = post.author;
    postDateDiv.innerHTML = post.date;
    postContentDiv.innerHTML = post.content;
    
    postDiv.setAttribute("class", "post");
    postNameDiv.setAttribute("class", "post-name");
    postAuthorDiv.setAttribute("class", "post-author");
    postDateDiv.setAttribute("class","post-date");
    postContentDiv.setAttribute("class", "post-content");
    
    postDiv.appendChild(postNameDiv);
    postDiv.appendChild(postAuthorDiv);
    postDiv.appendChild(postDateDiv);
    postDiv.appendChild(postContentDiv);
    
    postsDiv.appendChild(postDiv);
    });
}

function getPosts(callback){
    
    var request = new XMLHttpRequest();
    
    request.onload = function () {
        var posts = JSON.parse(request.responseText);
        
        callback(posts);
    };
    request.open("GET", "posts.json", true);
    request.send(null);
}

getPosts(function(posts) {
    renderPosts(posts);
});

document.getElementsByClassName('post-date').addEventListener('click', function() {
    location.href = '#'
}, false);

   