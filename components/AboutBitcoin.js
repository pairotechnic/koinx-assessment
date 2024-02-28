import React from 'react'
import AlreadyHoldingBitcoinCard from './AlreadyHoldingBitcoinCard'

const AboutBitcoin = () => {
  return (
    <div className="bg-white p-7 ">

      <div className="text-3xl font-semibold mb-6">About Bitcoin</div>

      <div className=" pb-4 mb-4 border-b-2">
        <div className="text-xl font-semibold mb-3 ">What is Bitcoin?</div>
        <div>Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</div>
      </div>

      <div className=" pb-4 mb-4 border-b-2" >
        <div className="text-xl font-semibold mb-3 ">Lorem ipsum dolor sit amet</div>
        <div>
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
          <br /><br />
          Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.
          <br /><br />
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
        </div>
      </div>

      <div className="pb-4 mb-4 border-b-2">
        <div className="text-3xl font-semibold mb-3">Already Holding Bitcoin?</div>
        <div className="flex justify-between">

          <AlreadyHoldingBitcoinCard
            imageSrc="/pictures/profits.png"
            text="profits"
            gradient="bg-gradient-tl-br-profits"
          />

          <AlreadyHoldingBitcoinCard
            imageSrc="/pictures/tax_liability.png"
            text="tax liability"
            gradient="bg-gradient-tl-br-tax-liability"
          />

        </div>
      </div>

      <div>
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
      </div>

    </div>
  )
}

export default AboutBitcoin