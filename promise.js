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

function createPosts(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      let error = false;

      if (!error) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}

createPosts({ title: "post three", body: "my post" }, getPosts).then(getPosts);

// async/await

// async function init() {
//   await createPosts({ title: "post three", body: "my post" });
//   getPosts();
// }
// init();

// async/await/fetch

// async function fetchusers() {
//   const res = fetch("https://jsonplaceholder.typicode.com/users");

//   const data = await res.json();

//   console.log(data);
// }

// fetchusers();

// const promise = Promise.resolve("Hello paolo");
// const promise1 = 24;
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "Good day");
// });

// const promise3 = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (response) => response.json()
// );

// Promise.all([promise, promise1, promise2, promise3]).then((values) =>
//   console.log(values)
// );
