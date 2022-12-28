import { useEffect, useState } from "react";

function SingleComment({ data }) {
  const [commentText, setCommentText] = useState("");
  const { text, id } = data;

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  const handleInput = (e) => {
    setCommentText(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleUpdate} className="comments-item">
      <div className="comments-item-delete">&times;</div>
      <input className="text" value={commentText} onChange={handleInput} />
      <input className="submit" hidden />
    </form>
  );
}

export default SingleComment;
