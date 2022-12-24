import SingleComment from "./SingleComment";

function Comments(props) {
  return (
    <div className="card-comments">
      <form className="comments-item-create">
        <input className="text" />
        <input className="submit" hidden />
      </form>
      <SingleComment />
    </div>
  );
}

export default Comments;
