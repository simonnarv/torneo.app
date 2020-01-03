import { Team } from "./Team"

enum Statuses {
    pending = 1,
    delayed = 2,
    played = 3,
    suspended = 4
}


export interface Match {
    pitch?: string;
    homescore?: number;
    awayscore?: number;
    homeTeam?: Team;
    awayTeam?: Team;
    matchStatus?: Statuses;
    date?: string;
}