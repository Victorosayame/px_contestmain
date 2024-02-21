"use client"

import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className='flex flex-col bg-slate-700 mt-5'>
    <div className='px-8 sm:px-20'>
    <div className='flex flex-row flex-wrap justify-between max-w-6xl relative px-8 sm:px-20 mt-3'>

   
       <div className="w-64 max-sm:w-full">
          <h4 className='text-lg text-white font-satoshi font-bold relative uppercase '>Company</h4>
          <div className='border-b-4 mb-4 mt-2'></div>
          <ul className='link_footer'>
            <li className='list_footer'><Link href="/">About us</Link></li>
            <li className='list_footer'><Link href="/">Our Products</Link></li>
            <li className='list_footer'><Link href="/">Announcements</Link></li>
            <li className='list_footer'><Link href="/">Buyer Review</Link></li>
            <li className='list_footer'><Link href="/">About us</Link></li>
          </ul>
        </div>

        <div className='w-64 max-sm:w-full'>
          <h4 className='text-lg text-white font-satoshi font-bold relative uppercase '>Art</h4>
          <div className='border-b-4 mb-4 mt-2'></div>
          <ul className='link_footer'>
            <li className='list_footer'><Link href="/">Wall Art</Link></li>
            <li className='list_footer'><Link href="/">Paintings</Link></li>
            <li className='list_footer'><Link href="/">Drawings</Link></li>
            <li className='list_footer'><Link href="/">Digital Art</Link></li>
            <li className='list_footer'><Link href="/">Originals</Link></li>
          </ul>
        </div>

        <div className='w-64 max-sm:w-full'>
          <h4 className='text-lg text-white font-satoshi font-bold relative uppercase '>Create</h4>
          <div className='border-b-4 mb-4 mt-2'></div>
          <ul className='link_footer'>
            <li className='list_footer'><Link href="/">Design Your Products</Link></li>
            <li className='list_footer'><Link href="/">Print Instagram Photos</Link></li>
            <li className='list_footer'><Link href="/">Photos-to-Art</Link></li>
            <li className='list_footer'><Link href="/">Print NFTs</Link></li>
            <li className='list_footer'><Link href="/">Print AI Art</Link></li>
          </ul>
        </div>

   
       <div className='w-64 max-sm:w-full'>
          <h4 className='text-lg text-white font-satoshi font-bold relative uppercase '>Pixels Pro</h4>
          <div className='border-b-4 mb-4 mt-2'></div>
          <ul className='link_footer'>
            <li className='list_footer'><Link href="/">Sell Your Art</Link></li>
            <li className='list_footer'><Link href="/">Membership Plans</Link></li>
            <li className='list_footer'><Link href="/">Mobile App(IOS and Andriod)</Link></li>
            <li className='list_footer'><Link href="/">Instagram Merchandise</Link></li>
            <li className='list_footer'><Link href="/">Youtube Merchandise</Link></li>
          </ul>
        </div>

        <div className='w-64 max-sm:w-full'>
          <h4 className='text-lg text-white font-satoshi font-bold relative uppercase'>Contact</h4>
          <div className='border-b-4 mb-4 mt-2'></div>
          <ul className='link_footer'>
            <li className='list_footer'><Link href="/">Contact us</Link></li>
            <li className='list_footer'><Link href="/">FAQ</Link></li>
            <li className='list_footer'><Link href="/">Discussion Forum</Link></li>
            <li className='list_footer'><Link href="/">Terms of Use</Link></li>
            <li className='list_footer'><Link href="/">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className='w-64 max-sm:w-full'>
          <h4 className='text-lg text-white font-satoshi font-bold relative uppercase'>Stay Connected</h4>
          <div>
          <div className='border-b-4 mb-4 mt-2'></div>
            <p className='text-white'><Link href="#">Sign up for our Newsletter</Link>&nbsp;<span className='text-gray-400'>for exclusive deals, discount codes, and more</span>.</p>
            <div className='flex flex-row justify-between w-64'>
              <Link href="/" className='social_link'><Image src="/FooterImages/LogoFacebookFooter.jpg" alt="logofacebookfooter" className="rounded-3xl" width={40} height={40} /></Link>
              <Link href="/" className='social_link'><Image src="/FooterImages/LogoTwitterFooter.jpg" alt="logotwitterfooter" className="rounded-3xl" width={40} height={40}/></Link>
              <Link href="/" className='social_link'><Image src="/FooterImages/LogoInstagramFooter.jpg" alt="logoinstagramfooter" className="rounded-3xl" width={40} height={40}/></Link>
              <Link href="/" className='social_link'><Image src="/FooterImages/LogoPinterestFooter.jpg" alt="logopinterestfooter" className="rounded-3xl" width={40} height={40}/></Link>
              <Link href="/" className='social_link'><Image src="/FooterImages/LogoYouTubeFooter.jpg" alt="logoyoutubefooter" className="rounded-3xl" width={40} height={40}/></Link>
              </div>


          </div>
        </div>
        </div>
        </div>


        <div className='flex flex-row flex-wrap justify-center relative mt-5 mb-5'>
        <p className="flex justify-center mb-3 text-gray-200 font-satoshi font-medium">Copyright&nbsp;&#169;&nbsp;2024 PX Contest - All Rights Reserverd</p>
        </div>

    </footer>
  )
}

export default Footer