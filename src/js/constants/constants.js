import {DataStorage} from "../modules/DataStorage";
import {BaseComponent} from "../components/BaseComponent";

export const NEWS_API_KEY = 'ae6971aa95a34ef78aac37fb2a868bd5'
export const NEWS_API_URL = 'https://nomoreparties.co/news/v2/everything';
export const GITHUB_API_URL = 'https://api.github.com'
export const ERROR = 'Это обязательное поле';
export const ERROR_REQUEST_TITLE = 'Ошибка';
export const ERROR_REQUEST_TEXT = 'Ошибка сети, попробуйте снова';
export const ERROR_SEARCH_TITLE = 'Ничего не найдено';
export const ERROR_SEARCH_TEXT = 'К сожалению по вашему запросу ничего не найдено.';
export const githubOwner = 'Ilya-Buyak';
export const githubRepoName = 'NewsAnalyzer'

//селекторы
export const copyright = document.querySelector('.footer__copyright');
export const form = document.querySelector('.form');
export const newsCardContainer = document.querySelector('.cards-items');
export const showMoreNewsBtn = document.querySelector('.cards__button');
export const formButton = document.querySelector('.form__button');
export const commitsContainer = document.querySelector('.slider');

//экземпляры классов
export const currentDate = new Date().toISOString()
export const storage = new DataStorage();
export const formComponent = new BaseComponent(form);
export const showMoreComponent = new BaseComponent(showMoreNewsBtn);
export const news = {
  from: 3,
  to: 6
}

export const template = `<template id="NewsCard">
                          <li class="card"> 
                            <a class="card__link" href="" target="_blank">
                              <img class="card__img" src="" alt="">
                              <div class="card__container">
                                <p class="card__date"></p>
                                <h3 class="card__title"></h3>
                                <p class="card__paragraph"></p>
                              </div>
                              <p class="card__source"></p>
                            </a>
                          </li>
                         </template>`