export class Employee {

  private _firstName: string;
  private _lastName: string;
  private _salary: string;
  private _hireDate: Date;
  private _id: string;

  constructor(firstName?: string, lastName?: string, salary?: string, hireDate: Date = new Date(0), id?: string) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._salary = salary;
    this._hireDate = hireDate;
    this._id = id;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get salary(): string {
    return this._salary;
  }

  set salary(value: string) {
    this._salary = value;
  }

  get hireDate(): Date {
    return this._hireDate;
  }

  set hireDate(value: Date) {
    this._hireDate = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }
}
