function SingleComment(props) {
  return (
    <form className="comments-item">
      <div className="comments-item-delete">&times;</div>
      <input className="text" />
      <input className="submit" hidden />
    </form>
  );
}

export default SingleComment;