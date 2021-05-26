const API_URL = "https://api.github.com/users/";

const form = document.getElementById("form-container");
const search = document.getElementById("search");
const button = document.getElementById("button");
const main = document.getElementById("main");
const footer = document.getElementById("footer");

const createUserCard = async (user) => {
  if(user.name != undefined) {
    const repo = await fetch(user.repos_url);
    const repoData = repo.json();
    const userCardHTML = `
    <div class="user-card">
      <div>
        <img src="${user.avatar_url}" class="avatar" alt="${user.name} Github Avatar"></img>
      </div>
      <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul class="info">
          <li><strong>Followers : </strong>${user.followers}</li>
          <li><strong>Following : </strong>${user.following}</li>
          <li><strong>Public Repos : </strong>${user.public_repos}</li>
          <li><strong>Twitter ID : </strong>${user.twitter_username}</li>
          <li><strong>Location : </strong>${user.location}</li>
        </ul>
      </div>
    </div>
    `;
    main.innerHTML = userCardHTML;
  } else {
    const errorHTML = `
    <div class="error">
      <strong>No user found.</strong>
    </div>
    `;
    main.innerHTML = errorHTML;
  }
}

const getUser = async (user) => {
  const response = await fetch(`${API_URL}${user}`);
  const responseData = await response.json();

  createUserCard(responseData);
}

button.onclick = (e) => {
  e.preventDefault();
  const user = search.value;
  if(user != "") {
    getUser(user);
    search.value = "";
  }
}

button.onmouseover = (e) => {
  e.preventDefault()
  button.style.background = "rgb(2, 142, 197)";
}

button.onmouseout = (e) => {
  e.preventDefault()
  button.style.background = "rgb(255, 255, 255)";
}