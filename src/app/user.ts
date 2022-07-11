export class User {
  constructor(
    public id: number,
    public name: string | null,
    public password: number | null,
    public email: string | null,
    public age: number | string | null,
    public role: string | null,
  ) {
  }
}
