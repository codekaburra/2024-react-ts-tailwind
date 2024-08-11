import { DarkModeToggle } from "./DarkModeToggle";
import { SelectedWallet } from "./SelectedWallet";
import { WalletError } from "./WalletError";
import { WalletList } from "./WalletList";

export const NavBar = () => {
  return (
    <>
      <nav className="border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900">
        <div className="mx-auto flex flex-wrap justify-between px-4">
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Evelyn Tools
          </span>
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4">
            <button
              data-collapse-toggle="navbar-dropdown"
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-zinc-500 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200 md:hidden dark:text-zinc-400 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600"
              aria-controls="navbar-dropdown"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-dropdown"
            >
              <ul className="mt-4 flex flex-col rounded-lg border border-zinc-100 bg-zinc-50 px-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-zinc-700 dark:bg-zinc-800 md:dark:bg-zinc-900">
                <li>
                  <a
                    href="#"
                    className="block rounded bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-blue-700 dark:bg-blue-600 md:dark:bg-transparent md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    className="flex w-full items-center justify-between rounded px-3 py-2 text-zinc-900 hover:bg-zinc-100 md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-700 dark:focus:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  >
                    Dropdown{" "}
                    <svg
                      className="ms-2.5 h-2.5 w-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  <div
                    id="dropdownNavbar"
                    className="z-10 hidden w-44 divide-y divide-zinc-100 rounded-lg bg-white font-normal shadow dark:divide-zinc-600 dark:bg-zinc-700"
                  >
                    <ul
                      className="py-2 text-sm text-zinc-700 dark:text-zinc-400"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:hover:text-white"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:hover:text-white"
                        >
                          A
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:hover:text-white"
                        >
                          B
                        </a>
                      </li>
                    </ul>
                    <div className="py-1">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-600 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    className="block rounded px-3 py-2 text-zinc-900 hover:bg-zinc-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block rounded px-3 py-2 text-zinc-900 hover:bg-zinc-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block rounded px-3 py-2 text-zinc-900 hover:bg-zinc-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  >
                    3
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="items-right flex flex-wrap px-4">
            <DarkModeToggle />
            <SelectedWallet />
            <WalletList />
            <WalletError />
          </div>
        </div>
      </nav>
    </>
  );
};
