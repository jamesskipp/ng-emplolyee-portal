/**
 * The Employee class represents a salaried employee of a company
 *
 */
export class Employee {

  /**
   * The first name of the employee
   */
  private _firstName: string;

  /**
   * The last name of the employee
   */
  private _lastName: string;

  /**
   * The salary of the employee
   */
  private _salary: string;

  /**
   * The date the employee was hired
   */
  private _hireDate: Date;

  /**
   * The mongodb ObjectId of the employee
   */
  private _id: string;

  /**
   * Constructor for the Employee Class
   *
   * @param {string} firstName optional
   * @param {string} lastName optional
   * @param {string} salary optional
   * @param {Date} hireDate optional, default = new Date(0)
   * @param {string} id optional
   */
  constructor(firstName?: string, lastName?: string, salary?: string, hireDate: Date = new Date(0), id?: string) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._salary = salary;
    this._hireDate = hireDate;
    this._id = id;
  }

  /**
   * Getter for _firstName
   *
   * @returns {string}
   */
  get firstName(): string {
    return this._firstName;
  }

  /**
   * Setter for _firstName
   *
   * @param {string} value
   */
  set firstName(value: string) {
    this._firstName = value;
  }

  /**
   * Getter for _lastName
   *
   * @returns {string}
   */
  get lastName(): string {
    return this._lastName;
  }

  /**
   * Setter for _lastName
   *
   * @param {string} value
   */
  set lastName(value: string) {
    this._lastName = value;
  }

  /**
   * Getting for _salary
   *
   * @returns {string}
   */
  get salary(): string {
    return this._salary;
  }

  /**
   * Setter for _salary
   *
   * @param {string} value
   */
  set salary(value: string) {
    this._salary = value;
  }

  /**
   * Getter for _hireDate
   *
   * @returns {Date}
   */
  get hireDate(): Date {
    return this._hireDate;
  }

  /**
   * Setter for _hireDate
   *
   * @param {Date} value
   */
  set hireDate(value: Date) {
    this._hireDate = value;
  }

  /**
   * Getter for _id
   *
   * @returns {string}
   */
  get id(): string {
    return this._id;
  }

  /**
   * Setter for _id
   *
   * @param {string} value
   */
  set id(value: string) {
    this._id = value;
  }
}
