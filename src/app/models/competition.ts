import { CompetitionStatus } from './enums/competition-status';
import { CompetitionType } from './enums/competition-type';
import { Event } from './event';

export interface Competition {
    id?: number;
    name?: string;
    description?: string;
    status: CompetitionStatus;
    type: CompetitionType;
    event: Event;
}