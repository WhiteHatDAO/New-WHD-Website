import axios from "axios";

export const commafy = ( num: Number ) => {
  var str = num.toString().split('.');
  if (str[0].length >= 5) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  }
  if (str[1] && str[1].length >= 5) {
      str[1] = str[1].replace(/(\d{3})/g, '$1 ');
  }
  return str.join('.');
}

export const FormatYMD = (date: string) => {
  const data = new Date(date);
  const yyyy = data.getFullYear();
  let mm = (data.getMonth() + 1).toString(); // Months start at 0!
  let dd = data.getDate().toString();

  if (Number(dd) < 10) dd = '0' + dd.toString();
  if (Number(mm) < 10) mm = '0' + mm.toString();

  const formatteddate = yyyy + '-' + mm + '-' + dd;
  return formatteddate;
  // return String(
  //   [data.getMonth(), data.getDate(), data.getFullYear()].join("-")
  // );
};

export const FormatNumber = (number: string) => {
  if (parseFloat(number) >= 1000000000) {
    return String(parseInt(number) / 1000000000) + "M";
  } else if (parseInt(number) >= 1000000 && parseInt(number) < 1000000000) {
    return parseInt(number) / 1000000;
  } else {
    return parseFloat(number);
  }
};

export const FormatSmallNumber = (number: any) => {
  const data = parseFloat(number);
  return data;
};

export const FormatBigNumber = (number: any) => {
  if (!number) return "NAN";
  const num = number.toString();
  const index = num.indexOf(".");
  const data = num.slice(0, index);
  if (data) {
    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return "";
  }
};

export const getSubAddress = (str: string) => {
  return `${str.substring(0, 6)}...${str.substring(
    str.length - 6,
    str.length
  )}`;
};

export const FormatDate = (data: any) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date(data);
  if (data === undefined) {
    return "";
  } else {
    return (
      months[date.getMonth()] +
      " " +
      date.getDate().toString() +
      ", " +
      date.getFullYear().toString()
    );
  }
};

export const getPast = (data: any) => {
  var _delta = (new Date() as any) - (new Date(data) as any)
  var delta = _delta / 1000;
  // calculate (and subtract) whole days
  var days = Math.floor(delta / 86400);
  delta -= days * 86400;

  // calculate (and subtract) whole hours
  var hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  // calculate (and subtract) whole minutes
  var minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  // what's left is seconds
  var seconds = delta % 60;  // in theory the modulus is not required

  return {days, hours, minutes, seconds};
}

export const getSubHash = (str: string) => {
  if(str.length < 24) return str;
  return `${str.substring(0, 12)}...${str.substring(
    str.length - 12,
    str.length
  )}`;
};

export const assessScore = (score: Number) => {
  if(score < 15) return "Low"
  else if(score < 19) return "Average"
  else if(score < 25) return "Good"
  else return "Great"
}

export const getMetricsByContract = async(address: string, item: any, networkNames: Array<any>) => {
  if(item.network === "optimism" || item.network === "arbitrum") {
    const {data: {collections}} = await axios.get(`https://indexer.nftearth.exchange/collections/v5?id=${address}&includeTopBid=true&includeAttributes=false&includeOwnerCount=true&includeItemCount=true`, {
      headers: { "accept": "*/*", "x-api-key": "demo-api-key" }
    })
    const {data:{data:{items: holders}}} = await axios.get(`https://api.covalenthq.com/v1/${networkNames.find(y => y.name === item.network)?.id}/tokens/${address}/token_holders/?quote-currency=USD&format=JSON&page-size=50&key=ckey_d62b0735d18a4e6680723eb212f`)
    let tmp = {...collections[0]}
    tmp.platformName = item.platform
    tmp.network = item.network
    tmp.holders = holders.map((x: any)=> {
      return {
        "quantity": x.balance / (10**x.contract_decimals),
        "address": x.address,
        "percent": (x.balance / x.total_supply) * 100,
      }
    }).sort((a:any, b:any) => b.percent - a.percent)
    return tmp
  }
  if(item.network === "ethereum" || item.network === "polygon") {
    const {data: {collection: {slug, name}}} = await axios.get(`https://api.opensea.io/api/v1/asset_contract/${address}`)
    const {data: {collection: {stats}}} = await axios.get(`https://api.opensea.io/api/v1/collection/${slug}?format=json`)
    const {data:{data:{items: holders}}} = await axios.get(`https://api.covalenthq.com/v1/${networkNames.find(y => y.name === item.network)?.id}/tokens/${address}/token_holders/?quote-currency=USD&format=JSON&page-size=50&key=ckey_d62b0735d18a4e6680723eb212f`)
    let tmp: any = {}
    tmp.id = address
    tmp.name = name
    tmp.ownerCount = stats["num_owners"]
    tmp.itemCount = stats["count"]
    tmp.platformName = item.platform
    tmp.network = item.network
    tmp.holders = holders.map((x: any)=> {
      return {
        "quantity": x.balance / (10**x.contract_decimals),
        "address": x.address,
        "percent": (x.balance / x.total_supply) * 100,
      }
    }).sort((a:any, b:any) => b.percent - a.percent)
    return tmp
  }
}

export const getMetricsByExchange = async(item: any) => {
  let address: string = ""
  if(item.platform === "nftEarth" || item.platform === "rarible") address = item.nftExchangeLink.slice(item.nftExchangeLink.search("0x"), item.nftExchangeLink.search("0x")+42)
  if(item.platform === "nftEarth") {
    const _start = Math.floor(Date.now() / 1000) - 3600*24*49
    const _end = Math.floor(Date.now() / 1000)
    const {data: {collections}} = await axios.get(`https://indexer.nftearth.exchange/collections/v5?id=${address}&includeTopBid=true&includeAttributes=false&includeOwnerCount=true&includeItemCount=true`, {
      headers: { "accept": "*/*", "x-api-key": "demo-api-key" }
    })
    const {data: {events: eventsOfFloorPrice}} = await axios.get(`https://indexer.nftearth.exchange/events/collections/floor-ask/v1?collection=${address}&startTimestamp=${_start}&endTimestamp=${_end}&limit=1000`, {
      headers: { "accept": "*/*", "x-api-key": "demo-api-key" }
    })
    const {data: {collections: eventsOfVolume}} = await axios.get(`https://indexer.nftearth.exchange/collections/daily-volumes/v1?id=${address}`, {
      headers: { "accept": "*/*", "x-api-key": "demo-api-key" }
    })
    let tmp = {...collections[0]}
    let floorPriceHistory: any = []
    let volumeHistory: any = []
    tmp.nftExchangeLink = item.nftExchangeLink
    const _volumeHistory = eventsOfVolume.map((x: any) => {
      return {
        date: new Date(x.timestamp*1000),
        timestamp: x.timestamp,
        price: x.volume
      }
    })
    const _floorPriceHistory = eventsOfFloorPrice.map((x: any) => {
      return {
        date: new Date(x.event.createdAt),
        price: x.floorAsk.price
      }
    })

    let i = _start
    while(i <= _end) {
      const tmp = new Date(i * 1000)
      const _one = _volumeHistory.find((x: any, i: number) => x.date.getFullYear() === tmp.getFullYear() && x.date.getMonth() === tmp.getMonth() && x.date.getDate() === tmp.getDate())
      if(_one) volumeHistory.push(_one)
      else volumeHistory.push({ date: tmp, price: volumeHistory[volumeHistory.length-1]?.price ?? 0})
      i += 3600 * 24 * 7
    }

    let j = _start
    while(j <= _end) {
      const tmp = new Date(j * 1000)
      const _one = _floorPriceHistory.find((x: any, i: number) => x.date.getFullYear() === tmp.getFullYear() && x.date.getMonth() === tmp.getMonth() && x.date.getDate() === tmp.getDate())
      if(_one) floorPriceHistory.push(_one)
      else floorPriceHistory.push({ date: tmp, price: floorPriceHistory[floorPriceHistory.length-1]?.price ?? 0})
      j += 3600 * 24 * 7
    }

    tmp.volumeChart = {
      series: [{
        name: 'Volume',
        data: volumeHistory.map((x: any) => x.price)
      },],
      options: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 5,
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: volumeHistory.map((x: any) => x.date.getFullYear()+"-"+(x.date.getMonth()+1)+"-"+x.date.getDate()),
          tickAmount: 7,
          labels: {
            formatter: function(value: any, timestamp: any, opts: any) {
              return opts?.dateFormatter(new Date(timestamp), 'dd MMM') ?? "Volume History"
            }
          }
        },
        title: {
          text: 'Volume',
          align: 'left',
          style: {
            fontSize: "16px",
            color: '#666'
          }
        },
        yaxis: {
          title: {
            text: 'Volume (USD)'
          },
          min: Math.min.apply(Math, volumeHistory.map((x: any) => x.price)),
          max: Math.max.apply(Math, volumeHistory.map((x: any) => x.price)),
        },
        fill: {
          colors: ['rgb(229,232,235)']
        },
        tooltip: {
          y: {
            formatter: function (val: any) {
              return val + " USD"
            }
          }
        }
      },
    };
    tmp.floorPriceChart = {
      series: [{
        name: 'Sales',
        data: floorPriceHistory.map((x: any) => x.price)
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true
          },
        },
        forecastDataPoints: {
          count: 0
        },
        stroke: {
          width: 2,
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          tickPlacement: 'between',
          categories: floorPriceHistory.map((x: any) => x.date.getFullYear()+"-"+(x.date.getMonth()+1)+"-"+x.date.getDate()),
          tickAmount: 7,
          labels: {
            formatter: function(value: any, timestamp: any, opts: any) {
              return opts.dateFormatter(new Date(timestamp), 'dd MMM')
            }
          }
        },
        title: {
          text: 'Floor Price',
          align: 'left',
          style: {
            fontSize: "16px",
            color: '#666'
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
          shade: 'dark',
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          colorStops: [
            {
              offset: 0,
              color: "#00DDFF",
              opacity: 1
            },
            {
              offset: 100,
              color: "purple",
              opacity: 1
            }
          ]
          },
        },
        yaxis: {
          min: Math.min.apply(Math, floorPriceHistory.map((x: any) => x.price)),
          max: Math.max.apply(Math, floorPriceHistory.map((x: any) => x.price)),
        },
        grid: {
          padding: {
            left: 20,
            right: 40 // Also you may want to increase this (based on the length of your labels)
          },
        },
      },
    };
    return tmp
  }
  if(item.platform === "rarible") {
    const {data} = await axios.get(`https://api.rarible.org/v0.1/collections/ETHEREUM:${address}`) ?? await axios.get(`https://api.rarible.org/v0.1/collections/POLYGON:${address}`)
    let tmp = {...data}
    tmp.nftExchangeLink = item.nftExchangeLink
    return tmp
  }
  if(item.platform === "opensea") {
    address = item.nftExchangeLink.slice(item.nftExchangeLink.search("opensea.io/collection/")+String("opensea.io/collection/").length)
    const {data: {collection: {stats}}} = await axios.get(`https://api.opensea.io/api/v1/collection/${address}?format=json`)
    let tmp: any = {}
    tmp.volume = stats["total_volume"]
    tmp.onSaleCount = Math.round(stats["total_sales"])
    tmp.ownerCount = stats["num_owners"]
    tmp.itemCount = stats["count"]
    tmp.floorPrice = stats["floor_price"]
    return tmp
  }
}