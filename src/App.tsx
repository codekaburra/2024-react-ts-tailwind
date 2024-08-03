import Navbar from "./components/Navbar";
import EvmUnitConvert from "./components/EvmUnitConvert";
import EvmAddressConvert from "./components/EvmAddressConvert";

function App() {
  return (
    <>
      <div className="py-18 h-screen bg-white dark:bg-zinc-950 dark:text-white">
        <Navbar />
        <div className="grid grid-flow-row-dense grid-cols-6 p-6">
          <div className="col-span-3">
            <EvmAddressConvert />
          </div>
          <div className="col-span-3">
            <EvmUnitConvert />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
