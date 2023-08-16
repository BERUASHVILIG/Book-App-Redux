import React, { useState } from "react";

type LikeProps = {
  isFavourite: boolean;
  onClick: () => void;
};

const Like: React.FC<LikeProps> = ({ isFavourite, onClick }) => {
  const [isActive, setIsActive] = useState(isFavourite);

  const handleIconClick = () => {
    setIsActive(!isActive);
    onClick();
  };

  const iconClass = isActive ? "fas" : "far";

  return (
    <div>
      <i
        onClick={handleIconClick}
        style={{ cursor: "pointer" }}
        className={`${iconClass} fa-heart`}
      />
    </div>
  );
};

export default Like;
