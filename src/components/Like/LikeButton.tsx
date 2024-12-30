import { useState } from "react";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <button onClick={handleLike}>Contador de likes</button>
      <span> {likes} </span>
    </div>
  );
};

export default LikeButton;
