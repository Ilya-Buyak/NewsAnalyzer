import './style.css'
import {addCopyrightText} from "../../js/utils/copyright";
import {Statistics} from "../../js/components/Statistics";
import {DataStorage} from "../../js/modules/DataStorage";
import {Data} from "../../js/components/Data";

const analyticsTitle = document.querySelector('.analytics__title');
const newsPerWeek = document.querySelector('#newsPerWeek');
const mentions = document.querySelector('#mentions');
const month = document.querySelector('.analytics__header-text_date')
const data = new Data()

const storage = new DataStorage()
const statistics = new Statistics({
  storage,
  convertMonth : data.convertMonth(),
  convertDate: data.convertDate,
  convertDay: data.convertDay
})

statistics.render(analyticsTitle,newsPerWeek,mentions,month)
statistics.renderAnalytics(statistics.createDiagrams())

addCopyrightText()