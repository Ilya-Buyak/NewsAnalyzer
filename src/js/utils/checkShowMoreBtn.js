import {showMoreNewsBtn,news,storage,showMoreComponent} from "../constants/constants";
import {showMoreNews} from "../../index";

export function checkShowMoreBtn() {
  if (news.from >= storage.getItems('news').length) {
    showMoreNewsBtn.style.display = 'none';
    showMoreComponent.removeEventListeners('click',showMoreNews)
  } else {
    showMoreNewsBtn.style.display = 'inline-block';
    showMoreComponent.addEventListener('click',showMoreNews)
  }
}