export class UpdatePostDTO {
  title;
  content;
  tags;

  constructor(props) {
    this.title = props.title;
    this.content = props.content;
    this.tags = props.tags;
  }
}
