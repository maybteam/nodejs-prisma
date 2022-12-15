export class CreateChildCommnetDTO {
  content;
  userId;
  parentCommentId;

  constructor(props) {
    this.content = props.content;
    this.userId = props.userId;
    this.parentCommentId = props.parentCommentId;
  }
}
