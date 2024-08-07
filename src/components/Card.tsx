import { ReactNode } from "react";

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
