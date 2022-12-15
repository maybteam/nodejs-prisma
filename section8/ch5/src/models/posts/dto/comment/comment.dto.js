import { UsersDTO } from "../../../users/dto/users.dto";

export class CommentDTO {
  id;
  content;
  user;
  childComments;

  constructor(props) {
    this.id = props.id;
    this.content = props.conent;
    this.user = new UsersDTO(props.user);
    this.childComments = props.childComments?.map(
      (comment) => new CommentDTO(comment)
    );
  }
}
