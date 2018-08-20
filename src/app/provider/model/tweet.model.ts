export class Tweet {

    private _creationDate: Date;
    private _idTweet: number;
    private _id: number;
    private _text: string;

    get creationDate(): Date {
        return this._creationDate;
    }

    set creationDate(value: Date) {
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