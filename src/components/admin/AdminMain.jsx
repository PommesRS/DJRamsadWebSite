import React from 'react'
import styles from '../../style'
import { Outlet, Link } from 'react-router-dom';

const AdminMain = () => {
  return (
    <div className="bg-primary w-full overflow-hidden ">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}  h-[100dvh]`}>
                <h1 className={`${styles.heading2} relative text-center`}>Admin Page</h1>
                    <Outlet />
                <Link to={'/'}>Arsch</Link>
            </div>
        </div>
    /</div>
  )
}

export default AdminMain