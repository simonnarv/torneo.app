import { Team } from "./Team"


export interface Match {
    id?: number;
    groupId?: number;
    pitch?: string;
    homescore?: number;
    awayscore?: number;
    homeTeam?: Team;
    awayTeam?: Team;
    matchStatus?: MatchStatus;
    date?: string;
}