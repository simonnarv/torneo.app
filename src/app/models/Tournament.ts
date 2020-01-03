import { TeamGroup } from './TeamGroup';


export interface Tournament {
    id?:number;
    name?: string;
    competitionsStatus?:CompetitionStatus;

    groups?: Array<TeamGroup>;
    
}

enum CompetitionStatus {
    PENDING,
    ACTIVE,
    CANCELLED,
    FINISHED
}