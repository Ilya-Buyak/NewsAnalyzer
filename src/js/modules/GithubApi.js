export class GithubApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  getCommits(owner,repoName) {
    return fetch(`${this.baseUrl}/repos/${owner}/${repoName}/commits`)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }
}