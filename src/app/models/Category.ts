import { Tournament } from './Tournament';

export interface Category {
    id?: number;
    name?: string;
    tournament?: Tournament;
}