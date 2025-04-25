import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./LotteryGame.css"; // For extra styling

const TicketDisplay = ({ ticket, isWinner }) => {
  return (
    <AnimatePresence>
      {ticket && (
        <motion.div
          key={ticket}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="ticket-popup"
        >
          <p className="ticket-text">Your Ticket: <span>{ticket}</span></p>
          {isWinner !== null && (
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={isWinner ? "win-text" : "lose-text"}
            >
              {isWinner ? "🎉 You won the Lottery! 🎉" : "😢 Better luck next time!"}
            </motion.p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const LotteryGame = () => {
  const [ticket, setTicket] = useState("");
  const [isWinner, setIsWinner] = useState(null);

  const generateTicket = () => {
    const randomNum = Math.floor(Math.random() * 1000);
    const ticketStr = String(randomNum).padStart(3, "0");
    const sum = ticketStr.split("").reduce((acc, val) => acc + parseInt(val), 0);
    setTicket(ticketStr);
    setIsWinner(sum === 15);
  };

  return (
    <div className="lottery-container">
      <h1 className="lottery-title">🎰  Lottery Game</h1>
      <button className="generate-button" onClick={generateTicket}>
        Generate Ticket
      </button>
      <TicketDisplay ticket={ticket} isWinner={isWinner} />
    </div>
  );
};

export default LotteryGame;
