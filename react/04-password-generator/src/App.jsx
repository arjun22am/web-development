import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (characters) str += "!@#$%^&*()_+-=[]{}|;:',.<>?/";
    if (number) str += "0123456789";

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, number, characters]);

  const copypasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  };

  const passwordRef = useRef(null);

  useEffect(() => {
    generatePassword();
  }, [length, number, characters]);

  return (
    <>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
        <div className="bg-gray-800 text-white rounded-xl shadow-lg p-6 w-full max-w-sm">
          <h2 className="text-center text-lg font-semibold mb-4">
            Password generator
          </h2>

          {/* Password display and copy */}
          <div className="flex items-center gap-2 mb-4">
            <input
              type="text"
              value={password}
              readOnly
              className="flex-1 bg-white text-black rounded-md px-3 py-2 font-mono"
              ref={passwordRef}
            />
            <button
              onClick={copypasswordToClipboard}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
            >
              copy
            </button>
          </div>

          {/* Range and options */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="8"
                max="20"
                value={length}
                className="w-full accent-orange-500"
                onChange={(e) => setLength(e.target.value)}
              />
              <span className="text-orange-400 font-medium">
                Length: {length}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <label className="flex items-center gap-1 text-orange-400">
                <input
                  type="checkbox"
                  defaultChecked={number}
                  onChange={() => {
                    setNumber((prev) => !prev);
                  }}
                  className="accent-orange-500"
                />
                Numbers
              </label>

              <label className="flex items-center gap-1 text-orange-400">
                <input
                  type="checkbox"
                  defaultChecked={characters}
                  onChange={() => {
                    setCharacters((prev) => !prev);
                  }}
                  className="accent-orange-500"
                />
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
