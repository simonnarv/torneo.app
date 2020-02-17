import { Tournament } from './tournament';

export interface Category {
    id?: number;
    name?: string;
    tournament?: Tournament;
}