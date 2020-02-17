import { Team } from './team';
import { Group } from './group';

export interface ScoreSheet{
    id?: number;
    points: number;
    goalFavor: number;
    goalAgainst: number;
    goalDifference: number;
    teamGroup: Array<Group>;
    teams: Array<Team>;
}