import { CompetitionStatus } from './enums/competition-status';
import { CompetitionType } from './enums/competition-type';
import { Event } from './event';
import { Group } from './group';

export class Competition {
    id?: number;
    name?: string;
    description?: string;
    status: CompetitionStatus;
    type: CompetitionType;
    event?: Event;
    groups?: Array<Group>;

    constructor(id: number) {
        this.id = id
    }
}