import React from "react";
// import ThreeStars from "./assets/three-stars.png";
// import StarBig from "./assets/star-big.png";
// import StarSmall from "./assets/star-small.png";
// import TicketLeft from "./assets/ticket-l.png";
// import TicketRight from "./assets/ticket-r.png";
import HeaderLogo from "./assets/pancakelogo.png"
import Wallet from "./components/Wallet"

const App = () => {
  return (
    <div className="bg-gradient-radial  from-[#A881FC] to-[#5F39AA] min-h-screen">
      <div className="flex flex-col items-center mx-auto min-h-screen text-white">
        <div className="flex justify-center">
          <div className=" space-y-3">
            <img
              className="w-44  mx-auto"
              src={HeaderLogo}
              alt="Header Logo"
            />
            <Wallet />
          </div>
        </div>
        <div className="">
          <p className="">The pancake swap lottery</p>
        </div>
      </div>
    </div>
  );
};

export default App;
