import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div className="h-screen w-screen" style={{ backgroundColor: color }}>
      <div className="text-center">
        <h1
          className={`text-3xl font-bold ${
            color === "blue" || color === "green" ? "text-white" : "text-black"
          }`}
        >
          Hello Changers
        </h1>
        <p
          className={`${
            color === "blue" || color === "green" ? "text-white" : "text-black"
          } mt-2`}
        >
          Click below buttons to change the color
        </p>
      </div>

      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
        <button
          onClick={() => setColor("blue")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Button 1
        </button>
        <button
          onClick={() => setColor("green")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Button 2
        </button>
        <button
          onClick={() => setColor("red")}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Button 3
        </button>
      </div>
    </div>
  );
}

export default App;
