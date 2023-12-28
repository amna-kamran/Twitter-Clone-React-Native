export class TweetModel {
  constructor(
    name,
    username,
    uid,
    createdAt,
    comments,
    reshares,
    likes,
    reach,
  ) {
    this.name = name;
    this.username = username;
    this.uid = uid;
    this.createdAt = createdAt;
    this.comments = comments;
    this.reshares = reshares;
    this.likes = likes;
    this.reach = reach;
  }

  static fromJson(json) {
    const {name, username, uid, createdAt, comments, reshares, likes, reach} =
      json;
    return new User(
      name,
      username,
      uid,
      createdAt,
      comments,
      reshares,
      likes,
      reach,
    );
  }
}
