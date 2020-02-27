import { Team } from './team';
import { MatchStatus } from './enums/match-status';

export interface Match {
    id?: number;
    pitch?: string;
    homeScore?: number;
    awayScore?: number;
    homeTeam?: Team;
    awayTeam?: Team;
    matchStatus?: MatchStatus;
    date?: string;
}