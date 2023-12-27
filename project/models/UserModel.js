export class UserModel {
  constructor(username, email, userId) {
    this.username = username;
    this.email = email;
    this.userId = userId;
  }

  static fromJson(json) {
    const {username, email, userId} = json;
    return new User(username, email, userId);
  }
}
