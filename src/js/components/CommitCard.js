export class CommitCard {
  constructor(commit,createDateToCard) {
    this.commit = commit
    this.createDateToCard = createDateToCard
  }

  create() {
    const template = document.querySelector('#commit').content.querySelector('.slider__item');
    const newCommit = template.cloneNode(true);
    this.commitElement = newCommit

    this.avatar = this.commitElement.querySelector('.slider__avatar');
    this.authorName = this.commitElement.querySelector('.slider__title');
    this.authorEmail = this.commitElement.querySelector('.slider__mail');
    this.commitDate = this.commitElement.querySelector('.slider__date');
    this.commitMessage = this.commitElement.querySelector('.slider__paragraph');

    this.avatar.src = this.commit.author.avatar_url;
    this.authorName.textContent = this.commit.commit.committer.name;
    this.authorEmail.textContent = this.commit.commit.committer.email;
    this.commitDate.textContent = this.createDateToCard(this.commit.commit.committer.date);
    this.commitMessage.textContent = this.commit.commit.message;
    this.commitElement.href = this.commit.html_url;

    return newCommit
  }

}