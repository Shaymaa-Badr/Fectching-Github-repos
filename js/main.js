// Main variables
const github = new Github();
const theInput = document.querySelector(".get-repos input"),
  getBtn = document.querySelector(".get-btn"),
  reposData = document.querySelector(".data-show");

getBtn.addEventListener("click", function () {
  // Get repos
  const userName = theInput.value;
  if (userName !== "") {
    github.getRepos(userName).then((repos) => {
      // Clear the input
      reposData.innerHTML = "";
      // Show repos
      let output = "";

      repos.forEach((repo) => {
        output += `<div class = "repo">
      <div>
      <a
      href="${repo.html_url}"
      target="_blank">
      ${repo.name}
      </a>
      </div>
        <div>
        <span class="badge"
            >Stars: ${repo.stargazers_count}</span
          >
          <span class="badge"
          >Watchers: ${repo.watchers_count}</span
        >
        <span class="badge"
        >Forks: ${repo.forks_count}</span
      >
    </div>
        </div>`;

        reposData.innerHTML = output;
      });
    });
  } else {
    // Show msg
    reposData.innerHTML = `<span>Please add a username</span>`;
  }
});
