import { data } from "./data.js";

const searchText = document.querySelector("#app-search");
const listContent = document.querySelector("#results-list");



const render = (query = '') => {
    const inputText = query.trim().toLowerCase()
  const rezult = data.filter((item) =>
    item.spacecraft.toLowerCase().trim().includes(inputText)
  );
  
  rezult.forEach((item) => {
    listContent.innerHTML += `<li>${item.spacecraft}</li>`;
  });
  searchText.innerHTML = ""
}

searchText.addEventListener("input", (event) => {
  render(String(searchText.value))
});
