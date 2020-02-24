import { Team } from './team';
import { Group } from './group';

export interface ScoreSheet{
    id?: number;
    groupId?: number;
    points: number;
    goalFavor: number;
    goalAgainst: number;
    goalDifference: number;
    group?: Group;
    team: Team;
}