import { useState } from "react";
import BigNumber from "bignumber.js";
import { Card } from "./Card";

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
      <Card title="EVM Unit Convert">
        <form className="mb-4 rounded px-8 pb-8 pt-6 shadow-md">
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="wei"
            >
              wei
            </label>
            <input
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              id="wei"
              type="text"
              placeholder="wei"
              value={wei?.toString(10)}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="gwei"
            >
              gwei
            </label>
            <input
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              id="gwei"
              type="text"
              placeholder="gwei"
              value={wei?.dividedBy(1e9).toString(10)}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="ether"
            >
              ether
            </label>
            <input
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
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
      </Card>
    </>
  );
}

export default EvmUnitConvert;
