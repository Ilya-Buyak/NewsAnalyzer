import {GithubApi} from "../modules/GithubApi";
import {GITHUB_API_URL,githubOwner,githubRepoName,commitsContainer} from "../constants/constants";
import {CommitCardList} from "../components/CommitCardList";
import {createCommit} from "../../pages/about";
import {sliderInitialization} from "./sliderInit";

export function loadCommits() {
  const githubApi = new GithubApi(GITHUB_API_URL)
  const commitCardList = new CommitCardList({
    container: commitsContainer,
    createCommit: createCommit
  })

  githubApi.getCommits(githubOwner,githubRepoName)
    .then((res) => {
      commitCardList.render(res)
      sliderInitialization()
    })
    .catch((err) => {
      console.log(err)
    })

}