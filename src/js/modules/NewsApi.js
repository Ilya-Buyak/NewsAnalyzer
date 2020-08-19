export class NewsApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  getNews (keyWord,key,sevenDaysAgo,currentDate) {
    return fetch(`${this._baseUrl}?q=${keyWord}&from=${sevenDaysAgo}&to=${currentDate}&language=ru&sortBy=popularity&pageSize=100&apiKey=${key}`, {
      method: 'GET',
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }
}