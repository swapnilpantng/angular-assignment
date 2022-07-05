export interface ICustomer {
  id: number;
  name: string;
  email: string;
  password: string;
  isPrime: Boolean;
  watched: Array<string>;
  favorite: Array<string>;
  watchLater: Array<string>;
}


export interface IList {
  watched: Array<string>;
  favorite: Array<string>;
  watchLater: Array<string>;
}
