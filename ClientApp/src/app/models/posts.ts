import { comments } from './comments';

export class posts{
    userId : number;
    id : number;
    title : string;
    body : string;
    comments : comments[];
}