import { ReactNode, useState } from "react";

export default function Testing() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Card title="Testing Title">
        <p className="mb-3 font-normal text-zinc-700 dark:text-zinc-400">
          Testing content {count}
        </p>

        <button
          className="group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-800 to-yellow-800 p-0.5 text-sm font-medium text-zinc-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500 dark:text-white dark:focus:ring-purple-800"
          onClick={() => setCount((count) => count + 1)}
        >
          <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-zinc-900">
            Count ++
          </span>
        </button>

        <button
          type="button"
          className="mb-2 me-2 rounded-lg bg-zinc-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-900 focus:outline-none focus:ring-4 focus:ring-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:focus:ring-zinc-700"
          onClick={() => setCount((count) => count - 1)}
        >
          Count --
        </button>
      </Card>
    </>
  );
}

interface ICardProps {
  title: ReactNode;
  children: ReactNode;
}
export function Card(props: ICardProps) {
  return (
    <>
      <div className="m-2 rounded-lg border border-zinc-200 bg-white p-6 shadow dark:border-zinc-700 dark:bg-zinc-900">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {props.title}
          </h5>
        </a>
        {props.children}
      </div>
    </>
  );
}
