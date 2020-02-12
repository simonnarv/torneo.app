import { Team } from './Team';
import { Group } from './Group';

export interface ScoreSheet{
    id?: number;
    points: number;
    goalFavor: number;
    goalAgainst: number;
    goalDifference: number;
    teamGroup: Array<Group>;
    teams: Array<Team>;
}