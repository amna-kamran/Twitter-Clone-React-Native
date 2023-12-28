export class TweetModel {
  constructor(
    name,
    username,
    text,
    uid,
    createdAt,
    comments,
    reshares,
    likes,
    reach,
    tid,
  ) {
    this.name = name;
    this.username = username;
    this.text = text;
    this.uid = uid;
    this.createdAt = createdAt;
    this.comments = comments;
    this.reshares = reshares;
    this.likes = likes;
    this.reach = reach;
    this.tid = tid;
  }

  static fromJson(json) {
    const {
      name,
      username,
      text,
      uid,
      createdAt,
      comments,
      reshares,
      likes,
      reach,
      tid,
    } = json;
    return new TweetModel(
      name,
      username,
      text,
      uid,
      createdAt,
      comments,
      reshares,
      likes,
      reach,
      tid,
    );
  }
}
