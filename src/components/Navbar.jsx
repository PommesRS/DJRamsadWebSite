import styles from "../style"
import {logo, close, menu} from '../assets';
import {navLinks} from '../constants'
import { useState } from 'react';
import Button from "./Button";



const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
    <div className='absolute z-[0] w-[30%] h-[30%] left-[20] rounded-full pink__gradient'/>
    <span className="text-white font-semibold text-[30px] z-[1]">DJ Ramsad</span>
    <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] mr-10  ${index === navLinks.length - navLinks.length ? "text-secondary font-semibold" : "text-white"}`}>
            <a href={nav.id} className='group relative'>{nav.title}
                <span className='absolute w-0 h-1 -bottom-2 left-[50%] group-hover:w-[50%] group-hover:left-[25%] rounded-full bg-white transition-all duration-500'></span>
            </a>
          </li>
        ))}
        <li><Button content={"Kontakt"} styles={"bg-pink-gradient"}/></li>
      </ul>

    <div className="sm:hidden flex flex-1 justify-end items-center ">
        <img src={toggle ? close : menu} alt='menu' className="w-[28px] h-[28px] relative object-contain" onClick={() => setToggle((prev) => !prev)}/>
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 purple__gradient absolute z-[5] top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar border-2 border-[#b936f598]`}>
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
                {navLinks.map((nav, index) => (
                    <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mb-0' : 'mb-4'}  text-white`}>
                        <a href={nav.id} >{nav.title}</a>
                    </li>
                ))}
                <li><Button content={"Kontakt"} styles={'mt-4 bg-pink-gradient'}/></li>
            </ul>
        </div>
    </div>
    </nav>
    )
}

export default Navbar