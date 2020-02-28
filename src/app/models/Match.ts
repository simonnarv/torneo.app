import { Team } from './team';
import { MatchStatus } from './enums/match-status';
import { ScoreSheet } from './score-sheet';

export interface Match {
    id?: number;
    pitch?: string;
    homeScore?: number;
    awayScore?: number;
    homeTeam?: ScoreSheet;
    awayTeam?: ScoreSheet;
    matchStatus?: MatchStatus;
    date?: string;
}