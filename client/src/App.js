import React, { useState, useEffect } from "react";
import MewForm from "./components/MewForm";
import MewList from "./components/MewList";

const App = () => {
  const [name, setName] = useState("");
  const [mew, setMew] = useState("");

  const [mewList, setMewList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:8080/mews");
      const data = await response.json();
      setMewList(data);
    };
    getData();
  }, []);

  return (
    <div className="container">
      <h4 className="display-4 text-center">Meower - Twitter for cats</h4>
      <MewForm
        name={name}
        setName={setName}
        mew={mew}
        setMew={setMew}
        mewList={mewList}
        setMewList={setMewList}
      />
      <MewList mewList={mewList.reverse()} />
    </div>
  );
};

export default App;
