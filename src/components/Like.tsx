import React from "react";

type LikeProps = {
  isFavourite: boolean;
  onClick: () => void;
};
const Like: React.FC<LikeProps> = ({ isFavourite, onClick }) => {
  let classes = "";
  if (!isFavourite) {
    classes = "far";
  }
  // else {
  //   classes = "fas";
  // }
  if (isFavourite) {
    classes = "fas";
  }
  return (
    <div>
      <i
        onClick={onClick}
        style={{ cursor: "pointer" }}
        className={`${classes} fa-heart`}
      />
    </div>
  );
};

export default Like;
