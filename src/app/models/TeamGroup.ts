import { Match } from "./Match";
import { Team } from "./Team";

export interface TeamGroup {
    id?:number;
    competitionId?:number;
    name?: string;
    stage?: number;
    versus?: TeamGroup;
    teams?: Array<Team>;
    matches?: Array<Match>;
}