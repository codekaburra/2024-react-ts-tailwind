/* eslint-disable no-undef */
import { useState } from "react";
import { ethers } from "ethers";
import { Card } from "./Card";
export default function EvmAddressConvert() {
  const [address, setAddress] = useState("");
  const [padLeft, setPadLeft] = useState("");
  const [padRight, setPadRight] = useState("");
  const [isValid, setIsValid] = useState(true);
  const fromUint8ArrayToString = (ary: Uint8Array) => {
    return ary.join("");
  };
  const padToByte32 = (data: string, isLeftPad: boolean) => {
    // 32Bytes length. 128
    const zeroPad = fromUint8ArrayToString(new Uint8Array(88).fill(0));
    return isLeftPad
      ? `0x${data.substring(2)}${zeroPad}`
      : `0x${zeroPad}${data.substring(2)}`;
  };
  const isValidAddress = (inputAddress: string) => {
    const isValid = ethers.isAddress(inputAddress);
    setIsValid(isValid);
    return isValid;
  };
  // Example Valid Address
  // 0xcc20850f1907bE2aAB7474B9819112e37e630D7b
  // 0x000000000000000000000000cc20850f1907be2aab7474b9819112e37e630d7b
  // 0xcc20850f1907be2aab7474b9819112e37e630d7b000000000000000000000000
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    let inputAddress;
    const value = event.target.value;
    if (id === "address") {
      inputAddress = value;
      setAddress(value);
      if (isValidAddress(inputAddress)) {
        setPadLeft(padToByte32(inputAddress, true));
        setPadRight(padToByte32(inputAddress, false));
      }
    }
    if (id === "padLeft") {
      inputAddress = `0x${value.substring(128 - 40)}`;
      console.log(inputAddress);
      setPadLeft(value);
      if (isValidAddress(inputAddress)) {
        setAddress(inputAddress);
        setPadRight(padToByte32(inputAddress, false));
      }
    }
    if (id === "padRight") {
      inputAddress = value.substring(0, 44);
      setPadRight(value);
      if (isValidAddress(inputAddress)) {
        setAddress(inputAddress);
        setPadLeft(padToByte32(inputAddress, true));
      }
    }
  };

  return (
    <>
      <Card title="EVM Address Convert">
        <form className="mb-4 rounded px-8 pb-8 pt-6 shadow-md">
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              id="address"
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="padLeft"
            >
              Byte32 PadRIght
            </label>
            <input
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              id="padLeft"
              type="text"
              placeholder="Byte32 Pad Left"
              value={padLeft}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="padRight"
            >
              Byte32 PadRIght
            </label>
            <input
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              id="padRight"
              type="text"
              placeholder="Byte32 Pad Right"
              value={padRight}
              onChange={(e) => handleChange(e)}
            ></input>
            {!isValid && (
              <p className="text-xs italic text-red-500">Invalid EVM Address</p>
            )}
          </div>
        </form>
      </Card>
    </>
  );
}
