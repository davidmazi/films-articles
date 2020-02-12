export class User {
  _id: string;
  name: string;
  password: string;
  admin: boolean;

  //default constructor
  constructor() {
    this._id = "";
    this.name = "";
    this.password = "";
    this.admin = false;
  }
}
