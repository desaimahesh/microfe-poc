import React from "react";

export default function TicketDetai() {
  return (
    <div className="relative mt-10 px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">
      <div className="max-w-md mx-auto">
        <div className="h-6 flex items-center">
          <svg
            className="w-8 h-8 flex fill-sky-100 stroke-blue-600 stroke-2"
            viewBox="0 0 24 24"
          >
            <title className="border-blue-500 ring-1 text-center text-base text-gray-400">
              Ticket Detail
            </title>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 0 0-2 2v3a2 2 0 1 1 0 4v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3a2 2 0 1 1 0-4V7a2 2 0 0 0-2-2H5z"
            />
          </svg>
          <p className="px-2 font-mono font-semibold"># 0017897678542</p>
        </div>
        <div className="divide-y divide-gray-300/50">
          <div className="py-2 text-base leading-7 space-y-6 text-gray-600">
            <p>
              Ticket booked on{" "}
              <code className="text-sm font-bold text-gray-900">
                01/01/2020
              </code>{" "}
              having a total cost of{" "}
              <code className="text-sm font-bold text-gray-900">$100.00</code>{" "}
              and status of{" "}
              <code className="text-sm font-bold text-gray-900">pending</code>.
            </p>
            <div className="grid grid-cols-4 gap-2">
              <label className="text-sm font-bold text-gray-900">
                First Name:
              </label>
              <input
                className="border-none font-mono font-semibold"
                value="Mahesh"
              ></input>
              <label className="text-sm font-bold text-gray-900">
                Last Name:
              </label>
              <input
                className="border-none font-mono font-semibold"
                value="Desai"
              ></input>
            </div>
            <div className="ring-blue-500 ring-2 rounded-sm shadow-sm px-2">
              <input
                className="border-none font-mono font-semibold"
                value="Address line 1"
              ></input>
              <input
                className="border-none font-mono font-semibold"
                value="Address line 2"
              ></input>
              <input
                className="border-none font-mono font-semibold"
                value="Irving"
              ></input>
              <input
                className="border-none font-mono font-semibold"
                value="TX"
              ></input>
              <input
                className="border-none font-mono font-semibold"
                value="75063"
              ></input>
            </div>
          </div>
        </div>
        <p>Other TicketDetails can go here </p>
      </div>
    </div>
  );
}
