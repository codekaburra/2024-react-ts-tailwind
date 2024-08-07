import Testing from "./components/Testing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="py-18 h-screen bg-white dark:bg-zinc-950 dark:text-white">
        <Navbar />
        <div className="grid grid-flow-row-dense grid-cols-6 p-6">
          <div className="col-span-1">
            <Testing />
          </div>
          <div className="col-span-2">
            <Testing />
          </div>
          <div className="col-span-3">
            <Testing />
          </div>
          <div className="col-span-4">
            <Testing />
          </div>
          <div className="col-span-5">
            <Testing />
          </div>
          <div className="col-span-6">
            <Testing />
          </div>
          <div className="col-span-7">
            <Testing />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
