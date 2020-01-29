import { TeamGroup } from './TeamGroup';


export interface Tournament {
    id?:number;
    name?: string;
    competitionsStatus?:CompetitionStatus;
    description?: string;
    groups?: Array<TeamGroup>;
    
}
