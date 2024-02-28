import Image from 'next/image'
import React from 'react'

const AlreadyHoldingBitcoinCard = ({ imageSrc, text, gradient }) => {
  return (
    <div className={`w-[420px] h-[141px] ${gradient} flex items-center rounded-lg`}>

      <Image className="pl-3 py-3 mr-7" src={imageSrc} alt={text} width={128} height={128} />

      <div className = "w-[195px]">

        <div className = "pb-2 text-2xl font-semibold text-white">Calculate your {text}</div>

        <button className="bg-white py-1 px-4 mb-13 rounded-lg text-black font-bold flex items-center">
          Check Now
          <svg className="ml-2" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.9583 9.9952H4.45834" stroke="#0F1629" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11.9168 4.97479L16.9585 9.99479L11.9168 15.0156" stroke="#0F1629" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

      </div>
    </div>
  )
}

export default AlreadyHoldingBitcoinCard