import { Match } from "./match";
import { Team } from "./Team";

export interface Group {
    id?:number;
    competitionId?:number;
    name?: string;
    stage?: number;
    versus?: Group;
    teams?: Array<Team>;
    matches?: Array<Match>;
}