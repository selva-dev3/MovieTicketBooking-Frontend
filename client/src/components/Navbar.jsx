import { Link,  useNavigate } from "react-router-dom"
import { assets } from '../../public/images/assets'
import { Bars3Icon as MenuIcon, MagnifyingGlassIcon as SearchIcon, TicketIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {  useState } from "react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";



function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();


  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5">
      <Link className="max-md:flex-1" to='/'>
        <img src={assets.logo} alt="" className="w-36 h-auto" />
      </Link>
      <div className={`nav max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium
      max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center 
      gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 
      md:border border-gray-300/20 overflow-hidden transition-[width] duration-300 ${isOpen ? 'max-md:w-full' : 'max-md:w-0'}`}>
        <XMarkIcon onClick={() => setIsOpen(!isOpen)} className='md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer' />
        <Link onClick={() => { scrollTo(0, 0); setIsOpen(!isOpen) }} to='/'>Home</Link>
        <Link onClick={() => { scrollTo(0, 0); setIsOpen(!isOpen) }} to='/movies'>Movies</Link>
        <Link onClick={() => { scrollTo(0, 0); setIsOpen(!isOpen) }} to='/'>Theaters</Link>
        <Link onClick={() => { scrollTo(0, 0); setIsOpen(!isOpen) }} to='/'>Release</Link>
        <Link onClick={() => { scrollTo(0, 0); setIsOpen(!isOpen) }} to='/favorite'>Favorite</Link>
      </div >

      <div className="flex items-center gap-8">
        <SearchIcon className='max-md:hidden w-6 h-6 cursor-pointer' />
        {
          !user ? (
            <button onClick={openSignIn} style={{ backgroundColor: "#f84565", }} className="nav-button px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull
        transition rounded-full font-medium cursor-pointer">Login</button>
          ) : (
            <UserButton >
              <UserButton.MenuItems>
                <UserButton.Action  onClick={()=>navigate('/my-booking')} label="My Booking" labelIcon={<TicketIcon width={15} />}/>
              </UserButton.MenuItems>
            </UserButton>
          )
        }
      </div>
      <MenuIcon onClick={() => setIsOpen(!isOpen)} className='max-md:ml-4 md:hidden w-8 h-8 cursor-pointer' />
    </div>
  )
}

export default Navbar
