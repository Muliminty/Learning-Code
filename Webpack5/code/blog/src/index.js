import { getBlogPosts } from "./data";
import "./style.css";
import testImage from "./assets/images/testImage.png";
const blogPosts = getBlogPosts();
const ul = document.createElement("ul");
blogPosts.forEach((post) => {
  const li = document.createElement("li");
  li.textContent = post;
  ul.appendChild(li);
});
const textImage = document.createElement("img");
textImage.src = testImage;
document.body.appendChild(textImage);
document.body.appendChild(ul);