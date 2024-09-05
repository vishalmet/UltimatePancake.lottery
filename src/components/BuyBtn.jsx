import React from "react";
import TicketButton from "../assets/ticketbutton1.png";
import { motion } from "framer-motion";

const BuyBtn = () => {
  return (
    <div className="relative ticket-main">
      <img className="h-16 mx-auto" src={TicketButton} alt="Lottery Ticket" />
      <motion.button whileTap={{scale : 0.9}} className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-[#492C81] to-[#7343D2] hover:from-[#492C81]/80 hover:to-[#7343D2]/80 text-xs font-bold h-10 w-44 rounded-full mx-auto my-auto">
        Buy Tickets
      </motion.button>
    </div>
  );
};

export default BuyBtn;
