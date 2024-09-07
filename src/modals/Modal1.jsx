import React from "react";
import TicketLeft from "../assets/ticket-r.png";
import { motion } from "framer-motion";
import Buttons from "./Buttons";

const Modal = ({ isOpen, toggleModal, switchToModal2, ticketCount, setTicketCount, totalCost }) => {
  const cakePerTicket = 3.03;

  const handleTicketChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value >= 0) {
      setTicketCount(value);
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center z-50">
        <div className="bg-[#27262C] h-fit rounded-xl shadow-lg mt-2 w-[350px]">
          <div className="bg-[#3B384D] flex justify-between p-2 px-6 rounded-t-xl">
            <p className="font-bold">Buy Tickets</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-[#1FC7D4] cursor-pointer"
              onClick={toggleModal} // Close Modal1
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <div className="p-4 px-6 space-y-3">
            <div className="flex justify-between items-center">
              <p className=" text-[#B3A9CD] font-semibold">Buy:</p>
              <p className=" flex items-center font-bold">
                Tickets{" "}
                <img className=" h-6 ml-2" src={TicketLeft} alt="Ticket Icon" />
              </p>
            </div>
            <div className="">
              <div className="bg-[#3B384D] rounded-xl h-fit p-3">
                <input
                  className=" w-full h-10 bg-transparent text-right font-bold focus:outline-none focus:ring-0"
                  placeholder="0"
                  type="text"
                  value={ticketCount}
                  onChange={handleTicketChange}
                />
                <p className="text-[#B3A9CD] text-right font-bold text-xs">
                  ~{totalCost} CAKE
                </p>
              </div>
              <p className=" text-right text-xs pt-1 text-[#B3A9CD]">
                CAKE balance: 5.2
              </p>
            </div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="bg-[#3B384D] hover:bg-[#3B384D]/60 w-full text-[#1FC7D4] font-semibold rounded-full"
            >
              MAX
            </motion.button>
            <div className="text-[#B3A9CD] text-sm font-bold">
              <div className="flex justify-between items-center text-[#B3A9CD]">
                <p>Cost (CAKE)</p>
                <p>{totalCost} CAKE</p>
              </div>
            </div>
            <Buttons switchToModal2={switchToModal2} />
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
