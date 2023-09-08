import React from 'react'
import Link from 'next/link'
function Header() {
  return (
    <div className='shadow-lg'>
        <div className="navbar flex justify-between p-1 items-center">
            <div className="logo italic">
                developers
            </div>
            <div className="menus ">
                <ul className='flex gap-4 font-sans'>
                    <li>
                        <Link href="/aboutus">About us</Link>
                    </li>
                    
                    <li>
                        <Link href="/services">Services</Link>
                    </li>
                    
                    <li>
                        <Link href="/casestudies">CaseStudies</Link>
                    </li>
                    
                    <li>
                        <Link href="/howitworks">How it Works</Link>
                    </li>
                    <li>
                        <Link href="/hire">Hire</Link>
                    </li>
                </ul>
            </div>
            <div>
                <button className='bg-blue-900 w-[9vw] p-3  text-white rounded-md'>Contact us</button>
            </div>
        </div>
    </div>
  )
}

export default Header