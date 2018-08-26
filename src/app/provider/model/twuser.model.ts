export class TwUser {

    private _followersCount: boolean;
    private _language: string;
    private _name: string;
    private _screnName: string;
    private _location: string;

    get screnName(): string {
        return this._screnName;
    }

    set screnName(value: string) {
        this._screnName = value;
    }

    get location(): string {
        return this._location;
    }

    set location(value: string) {
        this._location = value;
    }

    get followersCount(): boolean {
        return this._followersCount;
    }

    set followersCount(value: boolean) {
        this._followersCount = value;
    }

    get language(): string {
        return this._language;
    }

    set language(value: string) {
        this._language = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}