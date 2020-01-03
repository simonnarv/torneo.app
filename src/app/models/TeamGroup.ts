import { Match } from "./Match";
import { Team } from "./Team";

export interface TeamGroup {
    stage?: number;
    versus?: TeamGroup;
    teams?: Array<Team>;
    matches?: Array<Match>;
}