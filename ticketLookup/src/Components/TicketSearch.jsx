import React, {useState} from "react";

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
        <div className="max-w-full shadow-md ">
          <form className="mt-4 bg-white shadow-md rounded-lg text-left">
           
            <div className="px-8 py-6 flex">
              <input
                type="text"
                className="border  h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-400 focus:ring-1 rounded-md"
                placeholder="Ticket Number"
                onChange={handleTicketNumberChange}
                value={ticketNumber}
              />
              <div className="flex justify-between items-baseline px-2">
                <button
                  type="submit"
                  className="mt-2 bg-indigo-500 text-white py-2 px-6 rounded-md hover:bg-indigo-600"
                  onClick={handleSubmit}
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
    )
}
