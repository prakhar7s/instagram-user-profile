const posts = document.querySelector("#profile-posts");

getPosts();

function getPosts() {
  for (let i = 0; i < 10; i++) {
    createPost();
  }
}

function createPost(src, likes, comments) {
  const post = document.createElement("div");
  post.classList.add("post");

  const img = document.createElement("img");
  img.src = `https://picsum.photos/270/300?random=${Math.floor(
    Math.random() * 1000
  )}`;

  const shadow = document.createElement("div");
  shadow.classList.add("shadow");

  shadow.innerHTML = `
  <span>  <i class="fa fa-heart" aria-hidden="true"></i> ${23}
  </span>
  <span>   <i class="fa fa-comment" aria-hidden="true"></i> 
  ${23}
  </span>
  `;
  post.appendChild(img);
  post.appendChild(shadow);
  posts.appendChild(post);
}
