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
          ath: data.market_data.ath.usd,
          atl: data.market_data.atl.usd,
          categories: data.categories,
          platforms: data.platforms,
          image: data.image.large
        });
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
          console.log('data', data);
          let mappingData = [];
          for (let i = 0; i < data.prices.length; i++) {
            const ele = {
              date: new Date(data.prices[i][0]).toString(),
              price: data.prices[i][1] 
            }
            mappingData.push(ele);
          }
  
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
