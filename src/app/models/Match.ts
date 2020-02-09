import { Team } from "./Team"


export interface Match {
    id?: number;
    groupId?: number;
    pitch?: string;
    homeScore?: number;
    awayScore?: number;
    homeTeam?: Team;
    awayTeam?: Team;
    matchStatus?: MatchStatus;
    date?: string;
}