import EvmUnitConvert from "./components/EvmUnitConvert";
import EvmAddressConvert from "./components/EvmAddressConvert";
import { NavBar } from "./components/navbar/Navbar";
import { WalletProvider } from "./hooks/WalletProvider";

function App() {
  return (
    <>
      <div className="py-18 h-screen bg-white dark:bg-zinc-950 dark:text-white">
        <WalletProvider>
          <NavBar />
          <div className="grid grid-flow-row-dense grid-cols-6 p-6">
            <div className="col-span-3">
              <EvmAddressConvert />
            </div>
            <div className="col-span-3">
              <EvmUnitConvert />
            </div>
          </div>
        </WalletProvider>
      </div>
    </>
  );
}

export default App;
