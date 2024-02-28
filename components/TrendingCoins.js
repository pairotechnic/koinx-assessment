import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const TrendingCoins = () => {

  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      const response = await fetch('https://api.coingecko.com/api/v3/search/trending')
      const data = await response.json();
      const topCoins = data.coins.slice(0,3) // Limit to top  3 coins

      const detailedCoins = await Promise.all(topCoins.map(async (coin) => {
        const CoinDetailsResponse = await fetch(`https://api.coingecko.com/api/v3/coins/${coin.item.id}`)
        const coinDetails = await CoinDetailsResponse.json();
        return {
          ...coin,
          details : coinDetails
        }
      }))

      setTrendingCoins(detailedCoins) 
    }

    fetchTrendingCoins()
  }, [])

  return (
    <div className="div1 bg-white rounded-lg px-6 pt-5 font-semibold ">

      <div className="div2 text-3xl  mb-6">Trending Coins (24h) </div>

      <div className="div3 flex flex-col justify-between">

        {trendingCoins.map((coin) => (
          <div key={coin.item.id} className="flex flex-row justify justify-between mb-5">
            <div className="currency flex flex-row text-lg">
              <div className="symbol mr-2">
                {/* Display coin symbol or logo here */}
                {/* Example: <img src={coin.details.image.small} alt={coin.item.name} /> */}
                <Image src={coin.details.image.small} alt={coin.item.name} width={24} height={24} />
              </div>
              <div>{coin.item.name}</div>
            </div>
            <div className="percentage flex flex-row items-center text-green-700 bg-green-100 px-3">
              {/* Display coin's daily change percentage here */}
              {coin.details.market_data.price_change_percentage_24h.toFixed(2)}%
            </div>
          </div>
        ))}

      </div>

    </div>
  )
}

export default TrendingCoins