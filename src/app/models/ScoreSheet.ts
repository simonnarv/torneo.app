import { Team } from './Team';
import { TeamGroup } from './TeamGroup';

export interface ScoreSheet{
    id?: number;
    points: number;
    goalFavor: number;
    goalAgainst: number;
    goalDifference: number;
    teamGroup: Array<TeamGroup>;
    teams: Array<Team>;
}