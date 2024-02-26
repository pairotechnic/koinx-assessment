import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    // <div>Navbar</div>
    <>
      <nav className=" flex items-center justify-between flex-wrap bg-white px-14 py-6 fixed w-full ">

        <div className="">
          <Link href="/" className="font-semibold text-xl ">KoinX</Link>
        </div>

        <div className = "flex mr-7">

          <div className=" flex items-center w-auto justify-end mr-6 ">
            <Link
              href="/CryptoTaxes"
              className=""
            >
              Crypto Taxes
            </Link>

            <Link
              href="/FreeTools"
              className="ml-8"
            >
              Free Tools
            </Link>

            <Link
              href="/ResourceCenter"
              className=" ml-8 "
            >
              Resource Center
            </Link>
          </div>

          <button className = "bg-blue-500 py-1 px-3 rounded-lg text-white">
            Get Started
          </button>

        </div>

      </nav>
    </>
  )
}

export default Navbar