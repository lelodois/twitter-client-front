import {Tweet} from './tweet.model';

export class Search {

    private _creationDate: any;
    private _executionDate: Date;
    private _tweets: Array<Tweet> = [];
    private _id: number;
    private _hashtag: string;
    private _twitterInfo: boolean;

    get twitterInfo(): boolean {
        return this._twitterInfo;
    }

    set twitterInfo(value: boolean) {
        this._twitterInfo = value;
    }

    get tweets(): Array<Tweet> {
        return this._tweets;
    }

    set tweets(value: Array<Tweet>) {
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

    get creationDate(): any {
        return this._creationDate;
    }

    set creationDate(value: any) {
        this._creationDate = value;
    }

    get executionDate(): Date {
        return this._executionDate;
    }

    set executionDate(value: Date) {
        this._executionDate = value;
    }
}