import React from "react";

const MewForm = ({ name, setName, mew, setMew, mewList, setMewList }) => {
  const nameHandler = (e) => {
    setName(() => e.target.value);
  };

  const mewHandler = (e) => {
    setMew(() => e.target.value);
  };

  const submitMew = async (e) => {
    e.preventDefault();

    const mewObj = {
      name: name,
      mew: mew,
      createdOn: Date.now(),
    };

    const response = await fetch("http://localhost:8080/mews", {
      method: "POST",
      body: JSON.stringify(mewObj),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    setMewList(() => [...mewList, data]);
    setName("");
    setMew("");
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={nameHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mew">Mew</label>
          <textarea
            id="mew"
            name="mew"
            cols="30"
            rows="10"
            className="form-control"
            value={mew}
            onChange={mewHandler}
          />
        </div>
        <button
          style={{ backgroundColor: "#9937fa", borderColor: "#9937fa" }}
          className="btn btn-primary"
          type="submit"
          onClick={submitMew}
        >
          Submit Mew
        </button>
      </form>
    </div>
  );
};

export default MewForm;
