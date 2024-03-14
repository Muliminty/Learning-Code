import { getBlogPosts } from "./data";
import "./style.css";
const blogPosts = getBlogPosts();
const ul = document.createElement("ul");
blogPosts.forEach((post) => {
  const li = document.createElement("li");
  li.textContent = post;
  ul.appendChild(li);
});
document.body.appendChild(ul);