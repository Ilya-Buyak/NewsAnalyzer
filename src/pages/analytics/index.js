import './style.css'
import {addCopyrightText} from "../../js/utils/copyright";
import {Statistics} from "../../js/components/Statistics";
import {DataStorage} from "../../js/modules/DataStorage";

const storage = new DataStorage()
const statistics = new Statistics(storage)
const analyticsTitle = document.querySelector('.analytics__title');
const newsPerWeek = document.querySelector('#newsPerWeek');
const mentions = document.querySelector('#mentions');

statistics.render(analyticsTitle,newsPerWeek,mentions)

addCopyrightText()