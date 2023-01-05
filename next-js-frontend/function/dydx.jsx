import axios from "axios";
import { useState, useEffect } from "react";

const market = "ETH-USD";
const day = "4HOURS";
const getMarketData = async () => {
  console.log("inseid getmarketdata");
  const marketData = await axios.get(
    `https://api.stage.dydx.exchange/v3/candles/${market}`,
    {
      params: {
        resolution: day,
        limit: 50,
      },
    }
  );

  return marketData.data.candles;
};

export const useMarketData = () => {
  const [marketData, setMarketData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const candleData = setTimeout(() => {
      const go = async () => {
        const response = await getMarketData().catch((err) => {
          setIsPending(false);
          setError(err.message);
        });

        if (!response) {
          setError("cannot get infromation");
          throw Error("cannot get information");
        }

        let mkD = [];
        response.map((res, i) => {
          mkD[response.length - i + 1] = {
            close: res.close,
            high: res.high,
            low: res.low,
            market: res.market,
            open: res.open,
            startedAt: res.startedAt,
          };
        });

        console.log("mkd", mkD);
        if (!isMounted) return;
        setMarketData(mkD);
        setIsPending(false);
      };
      go();
    }, [5000]);
    return () => {
      clearInterval(candleData);
      isMounted = false;
    };
  }, []);
  return { marketData, isPending, error };
};
