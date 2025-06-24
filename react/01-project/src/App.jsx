import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(15);

  let addvalue = () => {
    // setCount((prevcount) => prevcount + 1);
    count = count + 1;
  };

  const removevalue = () => {
    setCount((prevcount) => prevcount - 1);
  };
  return (
    <>
      <h1>Arjun Have {count} Cars</h1>
      <h2>He is rich because of {count} cars</h2>
      <button onClick={addvalue}>Add value</button>{" "}
      <button onClick={removevalue}>Remove value</button>
      <p>He has total {count} cars</p>
    </>
  );
}

export default App;
