import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="py-18 h-screen bg-white dark:bg-gray-800">
        <div className="text-surface shadow-secondary-1 block rounded-lg bg-white p-6 dark:bg-black dark:text-white">
          <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
          <p className="mb-4 text-base">Testing Dark Mode Here</p>
          <button
            className="rounded border border-blue-700 bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
