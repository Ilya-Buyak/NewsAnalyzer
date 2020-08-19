export class CommitCardList {
  constructor(options) {
    this.container = options.container;
    this.createCommit = options.createCommit;
  }

  addCard (commit) {
    this.container.appendChild(this.createCommit(commit))
  }
  render (commits)  {
    if (commits.length > 20) {
      commits.slice(commits.length - 20,commits.length).forEach((commit) => {
        this.addCard(commit)
      })
    }
    commits.forEach((commit) => {
      this.addCard(commit)
    })
  }
}