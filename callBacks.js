const posts = [
  { title: "post one", body: "my post" },
  { title: "post two", body: "my post" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
getPosts();

function createPosts(post, callBack) {
  setTimeout(() => {
    posts.push(post);
    callBack();
  }, 2000);
}

createPosts({ title: "post three", body: "my post" }, getPosts);
