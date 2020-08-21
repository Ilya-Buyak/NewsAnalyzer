import './style.css'
import {addCopyrightText} from "../../js/utils/copyright";
import {loadCommits} from "../../js/utils/loadCommits";
import {CommitCard} from "../../js/components/CommitCard";
import {Data} from "../../js/components/Data";

const data = new Data()
export function createCommit(...args) {
 return new CommitCard(...args,data.convertDateToCard).create()
}

loadCommits()
addCopyrightText()