export class Teachers {

    private _id: string;
    private _first_name: string;
    private _last_name: string;
    private _phone: string;
    private _email: string;

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get first_name(): string {
        return this._first_name;
    }

    set first_name(value: string) {
        this._first_name = value;
    }

    get last_name(): string {
        return this._last_name;
    }

    set last_name(value: string) {
        this._last_name = value;
    }

    get phone(): string {
        return this._phone;
    }

    set phone(value: string) {
        this._phone = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

}
