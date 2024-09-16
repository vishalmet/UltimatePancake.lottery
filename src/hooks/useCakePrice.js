import { chainlinkOracleABI } from '../abi/chainlinkOracle'
import { useState, useEffect } from 'react';
import  {ethers} from 'ethers'
import lottery_abi from "../abi/lottery.json"

const FAST_INTERVAL = 10000
const lottery = "0x5aF6D33DE2ccEC94efb1bDF8f92Bd58085432d2c"

  const RPC_URL = 'https://bsc-dataseed.binance.org/'; // Example for BSC Mainnet

  const provider = new ethers.providers.JsonRpcProvider(RPC_URL)

  const useCakePrice = ({ enabled = true } ) => {
    const [cakePrice, setCakePrice] = useState(0);
  
    useEffect(() => {
      if (!enabled) return;
  
      const fetchCakePrice = async () => {
        try {
          const contract = new ethers.Contract(
            "0xB6064eD41d4f67e353768aA239cA86f4F73665a1", // Chain ID for BSC Mainnet
            chainlinkOracleABI,
            provider
          );
  
          const price = await contract.latestAnswer();
          setCakePrice(ethers.utils.formatUnits(price, 8)); // Assuming 8 decimals



        } catch (error) {
          console.error('Error fetching cake price:', error);
          setCakePrice(BIG_ZERO);
        }
      };
  
      fetchCakePrice();
      const intervalId = setInterval(fetchCakePrice, FAST_INTERVAL);
  
      return () => clearInterval(intervalId);
    }, [enabled]);
  
    return cakePrice;
  };
  
  export default useCakePrice;