import { useState } from "react";

const CommentForm = ({ onSubmitComment }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitComment(comment);
    setComment(""); // Kommentarfeld leeren
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Comment:
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
