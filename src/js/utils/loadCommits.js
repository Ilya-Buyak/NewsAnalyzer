import {
  GITHUB_API_URL,
  githubOwner,
  githubRepoName,
  commitsContainer,
  preloader,
  searchTitle, ERROR_REQUEST_TITLE, searchDescription, ERROR_REQUEST_TEXT,notFoundSection
} from "../constants/constants";
import {GithubApi} from "../modules/GithubApi";
import {CommitCardList} from "../components/CommitCardList";
import {createCommit} from "../../pages/about";
import {sliderInitialization} from "./sliderInit";

export function loadCommits() {
  const githubApi = new GithubApi(GITHUB_API_URL)
  const commitCardList = new CommitCardList({
    container: commitsContainer,
    createCommit: createCommit
  })

  preloader.style.display = 'flex';
  notFoundSection.style.display = 'none';

  githubApi.getCommits(githubOwner,githubRepoName)
    .then((res) => {
      commitCardList.render(res)
      sliderInitialization()
    })
    .catch(() => {
      searchTitle.textContent = ERROR_REQUEST_TITLE
      searchDescription.textContent = ERROR_REQUEST_TEXT
    })
    .finally(() => {
      preloader.style.display = 'none'
    })
  }