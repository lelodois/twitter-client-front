import {Tweet} from './tweet.model';

export class Search {

    private _creationDate: Date;
    private _executionDate: Date;
    private _tweets: Tweet[] = [];
    private _id: number;
    private _hashtag: string;

    get tweets(): Tweet[] {
        return this._tweets;
    }

    set tweets(value: Tweet[]) {
        this._tweets = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get hashtag(): string {
        return this._hashtag;
    }

    set hashtag(value: string) {
        this._hashtag = value;
    }

    get creationDate(): Date {
        return this._creationDate;
    }

    set creationDate(value: Date) {
        this._creationDate = value;
    }

    get executionDate(): Date {
        return this._executionDate;
    }

    set executionDate(value: Date) {
        this._executionDate = value;
    }
}