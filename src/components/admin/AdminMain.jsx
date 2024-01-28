import React from 'react'
import styles from '../../style'
import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';

const AdminMain = () => {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId(id);
  }

  return (
    <div className="bg-primary w-full overflow-hidden ">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`w-full`}>
                <h1 className={`${styles.heading2} relative text-center`}>Admin Page</h1>
                    <div className=" relative flex flex-row gap-10 h-full">

                      <div className='bg-[#252525] w-1/4 p-5 rounded-2xl'>
                        <ul>
                          <li className={`${styles.heading2} `}>Überblick</li>
                          <li className='w-full flex'>
                            <Link href='#' className={`w-full py-3 text-white relative hover:bg-[#2b2b2b] bg-[#2b2b2b] before:w-2 before:h-1/2 before:bg-lime-500 before:content-[" "] before:absolute`}>
                              <span className='ml-5'>Beutzerkonten</span>
                              </Link>
                            </li>
                          <li className='w-full flex'>
                            <Link href='#' className={`w-full py-3 text-white relative hover:bg-[#2b2b2b] ${activeId === 2 ? 'bg-[#2b2b2b] before:w-2 before:h-1/2 before:bg-lime-500 before:content-[" "] before:absolute' : ''}`}>
                              <span className='ml-5'>Posteingang</span>
                              </Link>
                            </li>
                        </ul>
                      </div>

                      <div className='bg-[#252525] w-full p-5 rounded-2xl'>

                        <Outlet/> 
                      </div>
                    </div>
            </div>
        </div>
    /</div>
  )
}

export default AdminMain