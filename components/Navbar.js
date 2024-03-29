import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    // <div>Navbar</div>
    <>
      <nav className=" flex items-center justify-between flex-wrap bg-white px-14 py-5 fixed w-full z-10 ">

        <div className="">
          <Link href="/" className="font-semibold text-xl ">
            <svg width="97" height="24" viewBox="0 0 97 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_37_3860)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M37.6803 7.00957L36.877 6.40706L37.2257 6.03777C37.2026 5.44427 37.4755 4.73777 37.9952 4.15193C38.565 3.50959 39.3145 3.1448 39.9453 3.15821L40.2912 2.79199L40.8937 3.59534L40.8828 3.60687C41.35 4.22694 41.1641 5.34474 40.361 6.25027C39.5096 7.20941 38.3396 7.50854 37.6832 7.0065L37.6803 7.00957Z" fill="url(#paint0_linear_37_3860)" />
                <path d="M39.8117 5.68725C40.7245 4.65841 40.9033 3.32644 40.2109 2.71221C39.5186 2.09798 38.2174 2.43409 37.3046 3.46293C36.3918 4.49177 36.2131 5.82374 36.9054 6.43796C37.5977 7.05219 38.8989 6.71608 39.8117 5.68725Z" fill="url(#paint1_linear_37_3860)" />
                <path d="M39.8243 5.6986C40.7315 4.67606 40.9001 3.34419 40.2008 2.72378C39.5015 2.10337 38.1992 2.42935 37.292 3.45189C36.3848 4.47442 36.2162 5.80629 36.9155 6.4267C37.6148 7.04711 38.9171 6.72113 39.8243 5.6986Z" fill="#0052FE" />
                <path d="M10.3802 12.0672L19.2748 2.53711H14.5447L5.09816 12.4601V2.53711H0.847656V22.2689H5.09816V17.6167L7.58131 15.0396L13.4964 22.2689H18.4876L10.9819 12.8248L10.3802 12.0664V12.0672Z" fill="#0052FE" />
                <path d="M32.9824 11.3064C31.6601 9.2089 29.2339 7.9115 26.276 7.9115C23.1148 7.9115 20.5482 9.39448 19.2965 11.7443C18.7559 12.7509 18.4611 13.9197 18.4611 15.1962C18.4611 19.4556 21.7596 22.481 26.276 22.481C30.7924 22.481 34.0661 19.4556 34.0661 15.1962C34.0661 13.7285 33.6765 12.4062 32.9824 11.3064V11.3064ZM26.276 19.1142C24.2162 19.1142 22.6312 17.6416 22.6312 15.1962C22.6312 13.0931 23.8009 11.7097 25.4389 11.3643C25.7064 11.3056 25.9868 11.2767 26.276 11.2767C26.4793 11.2767 26.6745 11.2896 26.8665 11.3209C28.625 11.5748 29.8935 12.9895 29.8935 15.1962C29.8935 17.6416 28.3366 19.1142 26.2768 19.1142H26.276Z" fill="#0052FE" />
                <path d="M40.9307 8.12183H36.8119V22.2696H40.9307V8.12183Z" fill="#0052FE" />
                <path d="M53.3954 7.9115C51.4673 7.9115 49.8036 8.57024 48.695 9.77848V8.12198H44.761V22.2697H48.8789V15.2742C48.8789 14.2459 49.1007 13.4353 49.4951 12.8336C50.0928 11.9057 51.0889 11.4631 52.2867 11.4631C53.9055 11.4631 54.9193 12.293 55.125 14.0804C55.1515 14.3037 55.1643 14.5463 55.1643 14.8018V22.2689H57.433L59.2855 19.6966V14.172C59.2855 9.8572 56.7493 7.9115 53.3954 7.9115V7.9115Z" fill="#0052FE" />
                <path d="M80.6955 2.4696L60.489 22.2697H66.7784L68.6244 19.6452L79.08 4.76878L80.6955 2.4696Z" fill="url(#paint2_linear_37_3860)" />
                <path d="M74.7395 2.4696L74.0936 3.36775L63.953 17.4552L60.489 22.2697L80.6955 2.4696H74.7395Z" fill="url(#paint3_linear_37_3860)" />
                <path d="M78.6952 18.812L78.4342 18.4425C78.2164 18.134 77.8622 17.9508 77.4862 17.9508H72.7328C72.5569 17.9508 72.4203 18.0552 72.3552 18.1942L81.1414 22.2696L78.6952 18.812Z" fill="#F69300" />
                <path d="M72.3552 18.1945C72.2973 18.3182 72.2965 18.4692 72.3825 18.601L73.3586 20.0863H73.361L74.7966 22.2698H81.1422L72.356 18.1945H72.3552Z" fill="url(#paint4_linear_37_3860)" />
                <path d="M69.4985 6.1344L67.9938 3.9252L67.0025 2.47034H60.7942L69.4013 6.70478C69.57 6.57865 69.6334 6.33283 69.4993 6.1344H69.4985Z" fill="url(#paint5_linear_37_3860)" />
                <path d="M60.7935 2.46967L63.4421 6.28798C63.4533 6.30325 63.4638 6.3161 63.475 6.33136C63.6943 6.61816 64.0342 6.78766 64.3973 6.78766H69.1531C69.2503 6.78766 69.333 6.75393 69.4013 6.70331L60.7943 2.46887L60.7935 2.46967Z" fill="#F69300" />
                <path d="M89.4297 3.22586H87.7572V7.61214H86.627V3.22586H84.9774V2.39038H89.4297V3.22586ZM91.5416 2.39038L92.9458 6.16165L94.3442 2.39038H95.8226V7.61214H94.681V6.16165L94.8066 3.69002L93.3282 7.61214H92.5576L91.085 3.69582L91.1991 6.16165V7.61214H90.0747V2.39038H91.5416V2.39038Z" fill="black" />
              </g>
              <defs>
                <linearGradient id="paint0_linear_37_3860" x1="40.9941" y1="3.79619" x2="37.9815" y2="7.31085" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#3372F5" />
                  <stop offset="0.249995" stop-color="#3372F5" />
                  <stop offset="0.505208" stop-color="#80DBFB" />
                  <stop offset="0.838547" stop-color="#3372F5" />
                  <stop offset="1" stop-color="#3372F5" />
                </linearGradient>
                <linearGradient id="paint1_linear_37_3860" x1="45.4545" y1="3.78461" x2="44.6486" y2="4.69182" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0080D4" />
                  <stop offset="0.47" stop-color="white" />
                  <stop offset="0.6" stop-color="#F1F8FC" />
                  <stop offset="1" stop-color="#007DCC" />
                </linearGradient>
                <linearGradient id="paint2_linear_37_3860" x1="76.1558" y1="7.78294" x2="68.3272" y2="16.8399" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFAC00" />
                  <stop offset="1" stop-color="#FE7801" />
                </linearGradient>
                <linearGradient id="paint3_linear_37_3860" x1="60.489" y1="12.3701" x2="80.6955" y2="12.3701" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFCE00" />
                  <stop offset="1" stop-color="#FFB003" />
                </linearGradient>
                <linearGradient id="paint4_linear_37_3860" x1="72.3142" y1="20.2326" x2="81.1414" y2="20.2326" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FE8B01" />
                  <stop offset="1" stop-color="#FE7801" />
                </linearGradient>
                <linearGradient id="paint5_linear_37_3860" x1="60.7934" y1="4.58716" x2="69.5716" y2="4.58716" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFCE00" />
                  <stop offset="1" stop-color="#FFC101" />
                </linearGradient>
                <clipPath id="clip0_37_3860">
                  <rect width="96" height="24" fill="white" transform="translate(0.847656)" />
                </clipPath>
              </defs>
            </svg>

          </Link>
        </div>

        <div className="flex mr-7 text-xl">

          <div className=" flex items-center w-auto justify-end mr-6  ">
            {/* <Link
              href="/CryptoTaxes"
              className=""
            >
              Crypto Taxes
            </Link> */}

            <button>Crypto Taxes</button>

            <button className="ml-8" >Free Tools</button>

            <button className="ml-8" >Resource Center</button>
            
          </div>

          <button className="bg-blue-500 py-2 px-6 rounded-lg text-white">
            Get Started
          </button>

        </div>

      </nav>
    </>
  )
}

export default Navbar