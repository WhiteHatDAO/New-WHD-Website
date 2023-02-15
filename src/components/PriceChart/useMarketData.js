import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../../context/appContext";

// https://www.joshwcomeau.com/snippets/react-hooks/use-interval/
const useInterval = (callback, delay) => {
  const intervalRef = useRef(null);
  const savedCallback = useRef(callback);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    const tick = () => savedCallback.current();
    if (typeof delay === "number") {
      intervalRef.current = window.setInterval(tick, delay);
      return () => window.clearInterval(intervalRef.current);
    }
  }, [delay]);
  return intervalRef;
};

export function useMarketData(updating = false) {
  const [appState] = useAppContext()
  const {days, token} = appState
  const [data, setData] = useState();
  const [length, setLength] = useState(500);

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/${token}/ohlc?vs_currency=usd&days=${days}`
      // `https://raw.githubusercontent.com/reactivemarkets/react-financial-charts/master/packages/stories/src/data/${dataSet}.tsv`
    )
      .then((response) => response.text())
      // .then((data) => tsvParse(data, parseData()))
      .then((data) => {
        setData(JSON.parse(data).map(x => ({
          date: new Date(x[0]),
          open: x[1],
          high: x[2],
          low: x[3],
          close: x[4],
          volume: 0,
        })));
      });
  }, [days, token]);

  useInterval(() => {
    if (data && updating) setLength(length + 1);
  }, 1000);

  return {
    data: updating ? data?.slice(0, length + 1) : data,
    loaded: Boolean(data)
  };
}