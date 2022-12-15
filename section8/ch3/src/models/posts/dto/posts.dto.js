import { UsersDTO } from "../../users/dto/users.dto";
import { TagDTO } from "./tag";
import { CommentDTO } from "./comment";

export class PostsDTO {
  id;
  title;
  content;
  createdAt;
  user;

  constructor(props) {
    this.id = props.id;
    this.title = props.title;
    this.content = props.content;
    this.createdAt = props.createdAt;
    this.user = new UsersDTO(props.user);
  }
}
