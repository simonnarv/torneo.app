import { MatchStatus } from './enums/match-status';
import { Group } from './group';
import { Team } from './team';


export interface SingleMatch {
    groupId: number,
    homeTeam: Team,
    awayTeam: Team,
    group: Group,
    matchDate: Date,
    competitionId: number,
    stage: number,
    pitch: string,
    homeScore: number,
    awayScore: number,
    matchStatus: MatchStatus
    date: Date
}