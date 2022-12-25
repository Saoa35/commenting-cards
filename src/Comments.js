import { useState } from "react";
import SingleComment from "./SingleComment";

function Comments(props) {
  const [textComment, setTextComment] = useState("");

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  return (
    <div className="card-comments">
      <form className="comments-item-create">
        <input className="text" value={textComment} onChange={handleInput} />
        <input className="submit" hidden />
      </form>
      <SingleComment />
    </div>
  );
}

export default Comments;
