import {TwUser} from './twuser.model';

export class Tweet {

    private _idTweet: number;
    private _id: number;
    private _creationDate: any;
    private _text: string;
    private _tweetUser: TwUser;
    private _stringId: string;

    get stringId(): string {
        return this._stringId;
    }

    set stringId(value: string) {
        this._stringId = value;
    }

    get tweetUser(): TwUser {
        return this._tweetUser;
    }

    set tweetUser(value: TwUser) {
        this._tweetUser = value;
    }

    get creationDate(): any {
        return this._creationDate;
    }

    set creationDate(value: any) {
        this._creationDate = value;
    }

    get idTweet(): number {
        return this._idTweet;
    }

    set idTweet(value: number) {
        this._idTweet = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
    }
}