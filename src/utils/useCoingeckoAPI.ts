import { useState, useCallback } from "react";

export const useCoingeckoAPI = () => {
  const [tokenData, setTokenData] = useState<any>();
  const [tokenPriceHistory, setTokenPriceHistory] = useState<any[]>([])

  const handleGetTokenData = useCallback(async (token: string) => {
    if(!token || token === undefined) return;
    console.log(token)
    fetch(
      `https://api.coingecko.com/api/v3/coins/${token}?tickers=false&community_data=false&developer_data=false`,
      // {
      //   mode: "cors",
      //   headers: {
      //     "Access-Control-Allow-Origin": "*",
      //     "Access-Control-Allow-Methods": "*",
      //     "Access-Control-Allow-Headers":
      //       "Origin, X-Requested-With, Content-Type, Accept",
      //   },
      // }
    )
      .then((response) => response.json())
      .then((data) => {
        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${token}&vs_currencies=usd&include_24hr_vol=true`).then(response => response.json())
        .then(priceData => {
          setTokenData({
            price: data.market_data.current_price.usd,
            price_change: data.market_data.price_change_percentage_24h,
            market_cap: data.market_data.market_cap.usd,
            market_cap_change: data.market_data.market_cap_change_percentage_24h,
            lowPrice_24h: data.market_data.low_24h.usd,
            highPrice_24h: data.market_data.high_24h.usd,
            circulating_supply: data.market_data.circulating_supply,
            max_supply: data.market_data.max_supply,
            total_supply: data.market_data.total_supply,
            volume_24h: priceData[token].usd_24h_vol,
            ath: data.market_data.ath.usd,
            atl: data.market_data.atl.usd,
            categories: data.categories,
            platforms: data.platforms,
            image: data.image.large
          });
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleGetTokenPriceHistory = useCallback(async(token: string, timeRange: string) => {
    if(!token || token === undefined) return;
    fetch(`https://api.coingecko.com/api/v3/coins/${token}/market_chart?vs_currency=usd&days=${timeRange}`, {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        }
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('data', token, timeRange);
          let allData: any = [];
          let mappingData: any = [];
          for (let i = 0; i < data.prices.length; i++) {
            const ele = {
              time: new Date(data.prices[i][0]).getFullYear() + "-" + (new Date(data.prices[i][0]).getMonth()+1) + "-" + new Date(data.prices[i][0]).getDate(),
              value: data.prices[i][1],
            }
            allData.push(ele);
          }
          const dates = (allData.filter((x: any, i: number) => i === allData.findIndex((y: any) => x.time === y.time)))
          dates.forEach((x: any) => mappingData.push(allData.filter((y: any) => y.time === x.time).at(-1)))
          mappingData.forEach((x: any, i: number) => x.barColor = (i === 0 ? "green" : mappingData[i-1].value < mappingData[i].value ? "green" : "red"))
          
          setTokenPriceHistory(mappingData);
        })
        .catch((err) => { console.log(err) })
  }, [])
  
  const fetchTokensData = async(tokens: string[]) => {
    let promises: any[] = [];
    let result: any[] = [];  
  
    tokens.forEach(token => {
      promises.push(
        fetch(`https://api.coingecko.com/api/v3/coins/${token}?tickers=false&community_data=false&developer_data=false`,
        {
          mode: "cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        }
      })
      .then((response) => response.json())
      .then((res) => { return res; })
      );
    });
    const _result = await Promise.all(promises);
    _result.forEach(d => {
      result = [...result, {price: d.market_data.current_price.usd, market_cap: d.market_data.market_cap.usd}];
    });
    return result
  }

  return {
    handleGetTokenData,
    handleGetTokenPriceHistory,
    fetchTokensData,
    tokenData,
    tokenPriceHistory
  };
};
