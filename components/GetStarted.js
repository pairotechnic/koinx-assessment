import Image from 'next/image'
import React from 'react'

const GetStarted = () => {
  return (
    <div className="divA bg-blue-700 rounded-lg pt-8 pb-12 mb-5 text-center flex flex-col items-center">
      
      <div className=" divB mx-12 mb-5 text-white">
        
        <div className=" divC font-semibold mx-9 text-2xl mb-6 ">
          Get Started with KoinX for FREE
        </div>
        <div className=" leading-relaxed mb-5">
          With our range of features that you can equip for free,
          KoinX allows you to be more educated and aware of your tax reports
        </div>
        
      </div>

      {/* <div className = "PhoneImage" >  */}
      <Image className = "mb-5" src="/pictures/phone_person.png" alt="Phone Person IMG" width={178.66} height={166.22} />
      {/* </div> */}

      {/* <div>

      </div> */}

      <button className="bg-white py-3 px-6 mb-13 rounded-lg text-black   font-bold flex items-center">
        Get Started for FREE   
        <svg className = "ml-2" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.9583 9.9952H4.45834" stroke="#0F1629" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M11.9168 4.97479L16.9585 9.99479L11.9168 15.0156" stroke="#0F1629" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>

    </div>
  )
}

export default GetStarted

