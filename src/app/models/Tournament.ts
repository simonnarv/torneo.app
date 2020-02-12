import { Group } from './Group';


export interface Tournament {
    id?:number;
    name?: string;
    competitionsStatus?:CompetitionStatus;
    description?: string;
    groups?: Array<Group>;
    
}
