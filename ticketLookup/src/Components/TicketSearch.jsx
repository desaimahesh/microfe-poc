import React, { useState } from "react";

export default function TicketSearch() {
  const [ticketNumber, setticketNumber] = useState("");

  const handleTicketNumberChange = (event) => {
    setticketNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(ticketNumber);
    setticketNumber("");
  };

  return (
    <div className="max-w-full shadow-md font-mono  ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg ">
      <form className="mt-4 bg-white shadow-md rounded-lg text-left">
        <div className="px-8 py-6 flex">
          <input
            type="text"
            className="placeholder-gray-400 h-auto px-3 py-2 mt-2 hover:outline-none focus:outline-none border-none ring-2 ring-blue-100  focus:ring-blue-600 focus:ring-3 rounded-md"
            placeholder="Ticket Number"
            onChange={handleTicketNumberChange}
            value={ticketNumber}
          />
          <div className="justify-between items-center px-2 ">
            <button
              type="submit"
              className="border-none font-mono font-semibold flex items-center mt-2 bg-indigo-500 text-white py-1 px-6 rounded-md hover:bg-indigo-600"
              onClick={handleSubmit}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="ml-1 text-base">Search</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
