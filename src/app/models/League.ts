
import { Team } from './Team';


export interface League {
    id?:number;
    name?: string;
    competitionsStatus?:CompetitionStatus;

    groups?: Array<Team>;
}

enum CompetitionStatus {
    PENDING,
    ACTIVE,
    CANCELLED,
    FINISHED
}