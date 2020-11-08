import React from "react";

const MewCard = ({ mew }) => {
  return (
    <div className="card my-3">
      <h3 className="card-title px-2 py-2">{mew.name}</h3>
      <small className="card-subtitle px-3 text-muted">
        {Date(mew.createdOn)}
      </small>
      <div className="card-body">{mew.mew}</div>
    </div>
  );
};

export default MewCard;
