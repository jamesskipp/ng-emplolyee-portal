export class Employee {

  private _firstName: string;
  private _lastName: string;
  private _salary: string;
  private _hiredate: string;

  constructor(firstName?: string, lastName?: string, salary?: string, hiredate?: string) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._salary = salary;
    this._hiredate = hiredate;
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

  get hiredate(): string {
    return this._hiredate;
  }

  set hiredate(value: string) {
    this._hiredate = value;
  }
}
