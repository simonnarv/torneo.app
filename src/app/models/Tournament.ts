import { Group } from './group';


export interface Tournament {
    id?:number;
    name?: string;
    competitionsStatus?:CompetitionStatus;
    description?: string;
    groups?: Array<Group>;
    
}
