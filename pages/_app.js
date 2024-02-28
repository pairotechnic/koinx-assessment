import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  // return <Component {...pageProps} />

  return (
    // <div className = "pl-[-32]">
    <>
      <Navbar />
      <div className="py-24">

        <Component {...pageProps} />
      </div>
    </>
  )

}
