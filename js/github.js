class Github {
  constructor() {
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }
  async getRepos(user) {
    const response = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`
    );
    const repos = await response.json();
    return repos;
  }
}
