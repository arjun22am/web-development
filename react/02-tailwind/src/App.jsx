import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        <Card
          title="Beauty"
          srcc="https://images.pexels.com/photos/30302396/pexels-photo-30302396.jpeg"
        />
        <Card
          title="Sports"
          srcc="https://images.pexels.com/photos/21077133/pexels-photo-21077133.jpeg"
        />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
