import './style.css';
//функции
import {addCopyrightText} from "./js/utils/copyright";
import {sevenDaysAgo} from  "./js/utils/sevenDaysAgo";
import {convertDate} from "./js/utils/convertDate";
import {clearSection} from "./js/utils/clearSection";
import {convertDateToCard} from "./js/utils/converDateToCard";
import {checkImgUrl} from "./js/utils/checkImgUrl";
import {checkShowMoreBtn} from "./js/utils/checkShowMoreBtn";

//классы
import {NewsApi} from "./js/modules/NewsApi";
import {FormValidator} from "./js/utils/FormValidator";
import {NewsCardList} from "./js/components/NewsCardList";
import {NewsCard} from "./js/components/NewsCard";
import {SetFormButtonState} from "./js/utils/SetFormButtonState";

//константы
import {form} from "./js/constants/constants";
import {NEWS_API_KEY} from "./js/constants/constants";
import {NEWS_API_URL} from "./js/constants/constants";
import {newsCardContainer} from "./js/constants/constants";
import {ERROR} from "./js/constants/constants";
import {currentDate} from "./js/constants/constants";
import {template} from "./js/constants/constants";
import {news} from "./js/constants/constants";
import {storage} from "./js/constants/constants";
import {formComponent} from "./js/constants/constants";
import {formButton} from "./js/constants/constants";

const newsApi = new NewsApi(NEWS_API_URL);
const setFormButtonState = new SetFormButtonState(formButton)
const newsCardList = new NewsCardList({
  container: newsCardContainer,
  createCard: createNewsCard
})

const formValidator = () => new FormValidator({
  error: ERROR,
  form: form,
  component: formComponent
}).formValidity()


function createNewsCard(...args) {
  return new NewsCard(...args,convertDateToCard,checkImgUrl).create()
}

export function showMoreNews() {
  newsCardList.render(news.from,news.to,storage.getItems('news'))
  news.from += 3;
  news.to += 3

  checkShowMoreBtn()
}

//отправка формы
formComponent.addEventListener('submit',(evt) => {
  evt.preventDefault()
  const preloader = document.querySelector('#preloader')
  const notFoundSection = document.querySelector('#not-found')
  const keyWord = form.querySelector('.form__input').value
  const mainSection = document.querySelector('#cards')

  notFoundSection.style.display = 'none'
  mainSection.style.display = 'none'
  preloader.style.display = 'flex'
  setFormButtonState.addClass()

  newsApi.getNews(keyWord,NEWS_API_KEY,convertDate(sevenDaysAgo(currentDate)),convertDate(currentDate))
    .then((res) => {
      storage.clear()
      clearSection(newsCardContainer,template)
      storage.setItems('news',res.articles)
      const news = storage.getItems('news')
      checkShowMoreBtn()
      if (!news.length) {
        notFoundSection.style.display = 'flex'
      } else {
        newsCardList.render(0,3,storage.getItems('news'))
        mainSection.style.display = 'flex'
      }
    })
    .catch((err) => {
      console.log(err)
  })
    .finally(() => {
      preloader.style.display = 'none';
      setFormButtonState.removeClass()
    })
})

addCopyrightText()
formValidator()
checkShowMoreBtn()



