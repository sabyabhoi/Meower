import React from "react";

import MewCard from "./MewCard";

const MewList = ({ mewList }) => {
  return (
    <div>
      {mewList.map((mew) => (
        <MewCard mew={mew} key={mew._id} />
      ))}
    </div>
  );
};

export default MewList;
