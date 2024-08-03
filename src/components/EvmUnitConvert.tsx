import { useState } from "react";
import BigNumber from "bignumber.js";

function EvmUnitConvert() {
  const [wei, setWei] = useState<BigNumber>();
  const [isInvalid, setIsInvalid] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    const value = event.target.value;
    const valueInBn = new BigNumber(value);
    if (!valueInBn.isFinite()) {
      setIsInvalid(true);
      return;
    }
    setIsInvalid(false);
    if (id === "wei") {
      setWei(valueInBn);
    }
    if (id === "gwei") {
      setWei(valueInBn.multipliedBy("1E9"));
    }
    if (id === "ether") {
      setWei(valueInBn.multipliedBy("1E18"));
    }
  };

  return (
    <>
      <div className="max-w-x w-full">
        <form className="mb-4 rounded px-8 pb-8 pt-6 shadow-md">
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="wei"
            >
              wei
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="wei"
              type="text"
              placeholder="wei"
              value={wei?.toString(10)}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="gwei"
            >
              gwei
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="gwei"
              type="text"
              placeholder="gwei"
              value={wei?.dividedBy(1e9).toString(10)}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="ether"
            >
              ether
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="ether"
              type="text"
              placeholder="ether"
              value={wei?.dividedBy(1e18).toString(10)}
              onChange={(e) => handleChange(e)}
            ></input>
            {isInvalid && (
              <p className="text-xs italic text-red-500">
                Please input number only.
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default EvmUnitConvert;
