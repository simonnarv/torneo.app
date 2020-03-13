import { ScoreSheet } from './score-sheet';
import { Competition } from './competition';
import { GroupStatus } from './enums/group-status';

export interface Group {
    id?: number;
    competition?: Competition;
    name?: string;
    stage?: number;
    versus?: Group;
    scoreSheets?: Array<ScoreSheet>;
    status?: GroupStatus;
}