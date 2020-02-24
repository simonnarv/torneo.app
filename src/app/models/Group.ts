import { Match } from "./match";
import { ScoreSheet } from './score-sheet';
import { Competition } from './competition';

export interface Group {
    id?:number;
    competitionId?:number;
    name?: string;
    stage?: number;
    versus?: Group;
    scoreSheets?: Array<ScoreSheet>;
    matches?: Array<Match>;
}