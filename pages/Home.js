import GetStarted from '@/components/GetStarted'
import TradingViewWidget from '@/components/TradingViewWidget'
import TrendingCoins from '@/components/TrendingCoins'
import React, { useRef, useState } from 'react'
import Sentiment from '@/components/Sentiment'
import AboutBitcoin from '@/components/AboutBitcoin'

const Home = () => {

  const sentimentRef = useRef(null)
  const aboutBitcoinRef = useRef(null)
  const [activeButton, setActiveButton] = useState(null);

  // const scrollToComponent = (ref) => {
  //   ref.current.scrollIntoView({ behaviour: 'smooth' })
  // };

  const scrollToComponent = (ref, offset = 96) => {
    window.scrollTo({
      top: ref.current.offsetTop - offset,
      behavior: 'smooth'
    });
  };

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    if (buttonId === 'sentiment') {
      scrollToComponent(sentimentRef);
    } else if (buttonId === 'aboutBitcoin') {
      scrollToComponent(aboutBitcoinRef);
    }
  };


  return (

    <div >

      <div className="mx-14 h-auto">

        Cryptocurrencies &gt;&gt; <span className="font-semibold">Bitcoin</span>

        <div className="div1 flex  w-full h-auto mt-4">

          <div className="div2 w-2/3 flex-shrink-0">

            <TradingViewWidget />

            <div className="div3 flex justify-center my-5 border-b-2 ">

              {/* <button onClick={() => scrollToComponent(sentimentRef)} className="mx-2 px-4 py-2">Sentiment</button> */}
              {/* <button onClick={() => scrollToComponent(aboutBitcoinRef)} className="mx-2 px-4 py-2 ">About Bitcoin</button> */}

              <button
                onClick={() => handleButtonClick('overview')}
                className={`mx-2 px-4 py-2 ${activeButton === 'overview' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
              >
                Overview
              </button>

              <button
                onClick={() => handleButtonClick('fundamentals')}
                className={`mx-2 px-4 py-2 ${activeButton === 'fundamentals' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
              >
                Fundamentals
              </button>

              <button
                onClick={() => handleButtonClick('newsInsights')}
                className={`mx-2 px-4 py-2 ${activeButton === 'newsInsights' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
              >
                News Insights
              </button>

              <button
                onClick={() => handleButtonClick('sentiment')}
                className={`mx-2 px-4 py-2 ${activeButton === 'sentiment' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
              >
                Sentiment
              </button>

              <button
                onClick={() => handleButtonClick('aboutBitcoin')}
                className={`mx-2 px-4 py-2 ${activeButton === 'aboutBitcoin' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
              >
                About Bitcoin
              </button>

              <button
                onClick={() => handleButtonClick('team')}
                className={`mx-2 px-4 py-2 ${activeButton === 'team' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
              >
                Team
              </button>

              <button
                onClick={() => handleButtonClick('technicals')}
                className={`mx-2 px-4 py-2 ${activeButton === 'technicals' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
              >
                Technicals
              </button>

            </div>

            <div ref={sentimentRef} className="mb-4">
              <Sentiment />
            </div>

            <div ref={aboutBitcoinRef}>
              <AboutBitcoin />
            </div>

          </div>

          <div className="div4  ml-5  ">
            <GetStarted />
            <TrendingCoins />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home

