import './style.css'
import {addCopyrightText} from "../../js/utils/copyright";
import {loadCommits} from "../../js/utils/loadCommits";
import {CommitCard} from "../../js/components/CommitCard";
import {convertDateToCard} from "../../js/utils/convertDateToCard";

export function createCommit(...args) {
 return new CommitCard(...args,convertDateToCard).create()
}

loadCommits()
addCopyrightText()