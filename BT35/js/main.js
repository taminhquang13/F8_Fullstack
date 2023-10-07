console.log("Hello World");
import { config } from "./config.js";
import { client } from "./client.js";

const getPost = async (query = {}) => {
  const queryString = new URLSearchParams(query).toString();
  const { data } = await client.get(`/posts?${queryString}`);
  render(data);
};
let page = 1;
let limit = 3;
let isLoading = false;
let totalPost = 0;
getPost({
  _page: page,
  _limit: limit,
});

const postsEl = document.querySelector(".posts");

const render = (posts) => {
  if (posts.length) {
    posts.forEach(({ id, title, excerpt, content, user, img_url }) => {
      const postItem = document.createElement("div");
      postItem.classList.add("post-item");

      // Iu sờ in pho
      const userInformation = document.createElement("div");
      userInformation.classList.add("user-infor");

      // Avatar
      const avaContainer = document.createElement("div");
      avaContainer.classList.add("avatar");
      const ava = document.createElement("img");
      ava.src = user.ava_url;
      avaContainer.append(ava);
      userInformation.append(avaContainer);

      // nà mè
      const nameContainer = document.createElement("div");
      nameContainer.classList.add("name");
      const name = document.createElement("h3");
      name.innerText = user.name;
      nameContainer.append(name);
      userInformation.append(nameContainer);

      postItem.append(userInformation);

      // Tai tồ
      const h2 = document.createElement("h2");
      h2.classList.add("title");
      h2.innerText = title;
      postItem.append(h2);

      //còn ten
      const contentEl = document.createElement("div");
      contentEl.classList.add("post-content");
      contentEl.innerText = content;

      const imgEl = document.createElement("img");
      imgEl.src = img_url;
      contentEl.append(imgEl);

      postItem.append(contentEl);

      postsEl.append(postItem);
    });
  }
};

//infinitive scroll

async function handleShowPost() {
  if (isLoading) return;
  isLoading = true;
  const loadingEl = document.createElement("div");
  loadingEl.classList.add("loading");
  loadingEl.innerText = "Loading...";
  postsEl.append(loadingEl);
  page++;
  await getPost({
    _page: page,
    _limit: limit,
  });
  isLoading = false;
  loadingEl.remove();
}

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 10) {
    handleShowPost();
  }
});
