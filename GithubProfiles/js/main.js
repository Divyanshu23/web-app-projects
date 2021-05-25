const API_URL = "https://api.github.com/users/";

const form = document.getElementById("form-container");
const search = document.getElementById("search");
const button = document.getElementById("button");
const main = document.getElementById("main");

const createUserCard = (user) => {
  if(user.name != undefined) {
    const userCardHTML = `
    <div class="user-card">
      <div class="avatar>
        <img src="${user.avatar_url}" alt="${user.name} Github Avatar"/>
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
        <div id="repos"></div>
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


button.addEventListener("click", (e) => {
  e.preventDefault();
  const user = search.value;
  if(user != "") {
    getUser(user);
    search.value = "";
  }
} )