import { config } from "./config.js";
import { client } from "./client.js";

const wrapper = document.querySelector(".wrapper"),
  signupHeader = document.querySelector(".signup header"),
  loginHeader = document.querySelector(".login header");

loginHeader.addEventListener("click", () => {
  wrapper.classList.add("active");
});
signupHeader.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

const { SERVER_AUTH_API } = config;
console.log(SERVER_AUTH_API);

client.setUrl(SERVER_AUTH_API);

const loginContainer = document.querySelector(".login-container");
const root = document.querySelector("#root");
const container = document.createElement("div");
container.classList.add("container");
root.append(container);
const postForm = document.createElement("div");


const render = (post) => {
  //titles
  const titles = document.createElement("div");
  titles.classList.add("titles");
  const h1 = document.createElement("h1");
  h1.innerText = "Blogs";
  titles.append(h1);
  container.append(titles);

  //create post
  const createPost = document.createElement("div");
  createPost.append(postForm);
  container.append(createPost);
  //logins
  const btnLogin = document.createElement("button");
  btnLogin.classList.add("login-btn");
  btnLogin.classList.add("signin-btn");
  btnLogin.innerText = "Đăng nhập";
  btnLogin.addEventListener("click", () => {
    loginContainer.classList.remove("hidden");
    container.classList.add("hidden");
  });
  container.append(btnLogin);

  //Blogs
  const blogsContainer = document.createElement("div");
  blogsContainer.classList.add("blogs-container");
  container.append(blogsContainer);
  post.data.forEach(({ id, title, content, userId, createdAt }) => {
    if (blogsContainer) {
      const postContainer = document.createElement("div");
      postContainer.classList.add("post-container");
      blogsContainer.append(postContainer);

      //name
      const userName = document.createElement("div");
      userName.classList.add("user-name");
      userName.innerText = userId.name;

      //date
      const date = new Date(createdAt);
      const dateStr = `${date.getDate()} - ${
        date.getMonth() + 1
      } - ${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}`;

      const spanDate = document.createElement("span");
      spanDate.classList.add("date");
      spanDate.innerText = dateStr;

      // title
      const postTitle = document.createElement("div");
      postTitle.classList.add("post-title");
      const h2 = document.createElement("h2");
      const a = document.createElement("a");
      a.innerText = title;
      a.href = `#`;
      h2.append(a);
      postTitle.append(h2);

      //content
      const postContent = document.createElement("div");
      postContent.classList.add("post-content");
      const p = document.createElement("p");
      p.innerText = content;
      postContent.append(p);

      postContainer.append(userName);
      postContainer.append(spanDate);
      postContainer.append(postTitle);
      postContainer.append(postContent);

      const hr = document.createElement("hr");
      blogsContainer.append(hr);
    }
  });
};

let dataBlogs = [];
const getBlogs = async (query = {}) => {
  const queryString = new URLSearchParams(query).toString();
  const { response, data } = await client.get(`/blogs?${queryString}`);
  if (response.ok) {
    dataBlogs = data;
    console.log(dataBlogs);
    render(data);
  }
};

getBlogs();
const renderForm = () => {
  loginContainer.classList.add("hidden");

  const formEl = document.createElement("div");

  const html = `
  <form class="post-article">
          <div class="form-title">
            <label for="title" class="label-form">Tiêu đề bài viết</label>
            <input id="title" placeholder="Nhập tiêu đề bài viết" />
          </div>
          <div class="form-content">
            <label for="content" class="label-form"
              >Nhập nội dung bài viết</label
            >
            <textarea name="" id="content" cols="30" rows="10"></textarea>
          </div>
          <button class="submit-article">Submit</button>
          </form>
        `;

  formEl.innerHTML = html;

  const form = formEl.querySelector(".post-article");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const content = document.querySelector("#content").value;
    const data = {
      title,
      content,
    };
    if (title && content) {
      createPost(data);
      document.querySelector("#title").value = "";
      document.querySelector("#content").value = "";
    }
  });

  const btn = document.createElement("button");
  btn.classList.add("logout");
  btn.innerText = "Đăng xuất";
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    window.location.reload();
  });

  postForm.append(btn);
  postForm.append(formEl);
};

async function createPost(title, content) {
  const { response } = await client.post("/blogs", { title, content });
  if (response.ok) {
    getBlogs();
  }
}

//signin
async function signin(email, password) {
  const { response, data } = await client.post("/auth/login", {
    email,
    password,
  });
  if (response.ok) {
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("refresh_token", data.refresh_token);
    renderForm();
    container.classList.remove("hidden");
    loginContainer.classList.add("hidden");
    const loginBtn = document.querySelector(".signin-btn");
    loginBtn.classList.add("hidden");
  }
}

//signup
async function signup(email, password, name) {
  const { data: tokens } = await client.post("/auth/register", {
    email,
    password,
    name,
  });

  if (tokens.status_code === "FAILED") {
    alert("Please try again");
  } else {
    alert("OK");
  }
}

const formLogin = loginContainer.querySelector(".login");
const formSignup = loginContainer.querySelector(".signup");

const loginBtn = formLogin.querySelector(".login-btn");
const signupBtn = formSignup.querySelector(".signup-btn");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = formLogin.querySelector("input[type=email]").value;
  const password = formLogin.querySelector("input[type=password]").value;
  signin(email, password);
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = formSignup.querySelector("input[type=email]").value;
  const password = formSignup.querySelector("input[type=password]").value;
  const name = formSignup.querySelector("input[type=text]").value;
  signup(email, password, name);
});

// const token = localStorage.getItem("access_token");
// if (token) {
//   renderForm();
// }
