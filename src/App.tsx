import React, { useEffect } from "react";
import ThreeStars from "./assets/three-stars.png";
import StarBig from "./assets/star-big.png";
import StarSmall from "./assets/star-small.png";
import TicketLeft from "./assets/ticket-l.png";
import TicketRight from "./assets/ticket-r.png";
import HeaderLogo from "./assets/pancakelogo.png";
import Wallet from "./components/Wallet";
import BuyBtn from "./components/BuyBtn.tsx";
// import { useCakePrice } from "./hooks/useCakePrice";
import useCakePrice from "./hooks/useCakePrice";
import BigNumber from 'bignumber.js';
import memoize from 'lodash/memoize';
import axios from "axios"
// Define constants
const BIG_TEN = new BigNumber(10);
const BIG_ZERO = new BigNumber(0);
import { getCurrentLottery, getLotteryDetails } from "./integration";
import { useState } from "react";

export const getFullDecimalMultiplier = memoize((decimals) => {
  return BIG_TEN.pow(decimals);
});

export const getDecimalAmount = (amount, decimals = 18) => {
  return amount.times(getFullDecimalMultiplier(decimals));
};

export const getBalanceAmount = (amount, decimals = 18) => {
  return amount.dividedBy(getFullDecimalMultiplier(decimals));
};

export const getBalanceNumber = (balance, decimals = 18) => {
  return getBalanceAmount(balance || BIG_ZERO, decimals).toNumber();
};
const App = () => {
  // const cakePriceBusd = useCakePrice()
  // console.log("cake prize amame", cakePriceBusd)
  const cakePriceBusd = useCakePrice({ enabled: true });

  const [priceVal, setPriceVal] = useState("")
const [cakePrice, setcakePrice] = useState(0)
const [discountDivisorval, setdiscountDivisorval] = useState(BigNumber(0))
  console.log("cake",cakePriceBusd);

  const getVal = async() => {
    try {
      const res = await getCurrentLottery();
      console.log("res",res);
      console.log("res in Number",Number(res));
      console.log("res in sttrinf",res.toString());
const id = res.toString();
      try {
        const amount = await getLotteryDetails(id)

        console.log("ammount",amount);
        console.log("ammount in  NUmber",Number(amount["amountCollectedInCake"]));
        console.log("ammount in string",amount["amountCollectedInCake"].toString());

        const amountCollectedInCake = amount["amountCollectedInCake"]
        const priceTicketInCake = amount["priceTicketInCake"]
        const discountDivisor = amount["discountDivisor"]
        setdiscountDivisorval(discountDivisor)
        console.log("n zkz",priceTicketInCake);
        console.log("n zkz",Number(priceTicketInCake));
        const convertedValueofPrice = parseFloat((Number(priceTicketInCake) / 1e18).toFixed(2));
        
        console.log("type of priceTicketInCake", typeof(priceTicketInCake));
        console.log("num of priceTicketInCake", convertedValueofPrice);

setcakePrice(convertedValueofPrice)
        console.log("type of ammounr", typeof(amountCollectedInCake));
        

        console.log("ammount collected", amountCollectedInCake);
        console.log("cakePriceBusd", cakePriceBusd);
        
        const prizeInBusd = amountCollectedInCake * (cakePriceBusd)
        console.log("price in busd", prizeInBusd);
        console.log("price in busd in corect format", prizeInBusd * 1000);
        const convertedValue = (prizeInBusd / 1e+18).toFixed(3); // Dividing by 10^18
console.log("convertedValue",convertedValue); // Outputs: "35.403"

const formattedValue = (prizeInBusd / 1e+18).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
console.log("formattedValue",formattedValue); // Outputs: "35,403"

setPriceVal(formattedValue)
        // const prizeTotal = getBalanceNumber(prizeInBusd)


      } catch (error) {
        console.log("Error gettingb amounit", error);
      }
    } catch (error) {
      console.log("error in current lottert");
    }
  }



  useEffect(
    ()=>{
      getVal()

    },[cakePriceBusd]
  )
  return (
    <div className=" bg-slate-400 bg-center bg-cover min-h-screen inter-font">
      <div className="flex flex-col items-center mx-auto min-h-screen text-white max-w-[600px] pt-20 relative">
        <div className="flex justify-center">
          <div className="space-y-3">
            <img className="h-12 mx-auto" src={HeaderLogo} alt="Header Logo" />
            <Wallet />
          </div>
        </div>
        <div className="relative mt-5 w-[500px]">
          <p className="font-bold text-xl text-center">
            The pancake swap lottery
          </p>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[#FEC61F] font-bold text-3xl text-center">
              {" "}
           ${priceVal}
            </p>
            <p className="font-bold">in Prizes!</p>
          </div>
          <div className="my-6">
            <BuyBtn price={cakePrice} discount={discountDivisorval} />
          </div>

          <img className="absolute left-10 top-0 h-12 star-left" src={StarSmall} alt="" />
          <img className="absolute right-0 top-0 h-20 star-right" src={ThreeStars} alt="" />
          <img className="absolute left-0 top-12 h-20 star-right" src={StarBig} alt="" />
          <img className="absolute left-5 bottom-0 h-20 ticket-left" src={TicketLeft} alt="" />
          <img className="absolute right-10 bottom-0 h-20 ticket-right" src={TicketRight} alt="" />
        </div>
      </div>
    </div>
  );
};

export default App;
