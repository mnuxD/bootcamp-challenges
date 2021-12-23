const fetchData = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/"
  );
  const posts = await response.data;
  printData(posts);
};

const printData = (posts) => {
  const container = document.getElementById("app");
  posts.forEach((post) => {
    const postEl = document.createElement("li");
    const content = document.createTextNode(post.title);
    postEl.appendChild(content);
    container.appendChild(postEl);
  });
};

fetchData();
