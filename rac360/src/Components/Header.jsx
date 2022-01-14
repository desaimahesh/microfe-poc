import React from "react";
import { useStore } from "store/store";
import { LogoutIcon } from "@heroicons/react/outline";

export default function Header() {
  const { token, login, logOut } = useStore();

  return (
    <div className="container flex  items-center justify-between mx-auto mt-2 bg-indigo-400 rounded shadow-lg">
      <div className="flex items-center px-4 py-2">
        <label className="mx-10 text-white antialiased text-2xl">RAC UI</label>
      </div>
      <div
        className={`flex items-center float-right  ${token ? "" : "hidden"}`}
      >
        <LogoutIcon className="h-8 w-8 text-white mr-10" onClick={logOut} />
      </div>
    </div>
  );
}
