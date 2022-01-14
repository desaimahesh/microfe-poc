import React, { useState } from "react";
import TicketDetai from "./TicketDetail";
import TicketSearch from "./TicketSearch";

export default function TicketLookup() {
  return (
    <div className="min-h-screen  text-gray-800 antialiased bg-gray-100 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12 ">
      <div className="relative py-3 w-max  mx-auto text-center">
        <div className="mt-4 bg-white shadow-md rounded-lg text-left">
          <div className="h-auto py-1  text-white bg-blue-600 rounded-t-md text-center">
            <span className="text-2xl font-semibold">Ticket Detail </span>
          </div>
          <div className="px-8 py-6">
            <TicketSearch />
            <TicketDetai />
          </div>
        </div>
      </div>
    </div>
  );
}
