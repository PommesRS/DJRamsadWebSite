import React from 'react'
import styles from '../../style'
import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';

const AdminMain = () => {
  console.log('admin')
  const [activeId, setActiveId] = useState(1);

  const handleClick = (e) => {
    setActiveId(e.target.id);
  }

  return (
    <div className="bg-primary w-full overflow-hidden ">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`w-full`}>
                    <div className="relative flex flex-row gap-10 h-full overflow-hidden ">

                      <div className='w-1/4 border-[#4F228D] h-[80dvh] border-4 box-shadow-2 rounded-3xl bg-black-gradient-2 '>
                        <ul>
                          <li className={`${styles.heading2} p-5`}>Überblick</li>
                          <li className='w-full flex'>
                            <Link id='1' to={'/admin/users'} onClick={handleClick} className={`w-full py-3 text-white relative hover:bg-[#4F228D] ${activeId == 1 ? 'bg-[#4F228D] before:w-1 before:h-full before:top-0 before:bg-secondary before:content-[" "] before:absolute' : ''}`}>
                              <span id='1' className='ml-5'>Beutzerkonten</span>
                              </Link>
                            </li>
                          <li className='w-full flex'>
                            <Link id='2' to={'/admin/inbox'} onClick={handleClick} className={`w-full py-3 text-white relative hover:bg-[#4F228D] ${activeId == 2 ? 'bg-[#4F228D] before:w-1 before:h-full before:top-0 before:bg-secondary before:content-[" "] before:absolute' : ''}`}>
                              <span id='2' className='ml-5'>Posteingang</span>
                              </Link>
                            </li>
                        </ul>
                      </div>

                      <div className='bg-[#252525] w-full h-fit overflow-hidden box-shadow-2 rounded-3xl border-[#4F228D] border-4 bg-black-gradient-2'>
                        <div className='overflow-y-scroll max-h-[80dvh] p-10 relative'>
                          <Outlet/> 
                        </div>
                      </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default AdminMain