import React, { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const handleChangedText = () => {
    setChangedText((prev) => !prev);
  };

  return (
    <div>
      <p>Hello Solomon!</p>
      {!changedText && <Output>It's nice to see you again</Output>}
      {changedText && <Output>Changed!</Output>}

      <button onClick={handleChangedText}>Change Text</button>
    </div>
  );
};

export default Greeting;
