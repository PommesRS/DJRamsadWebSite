import React from 'react'
import styles from '../style'
import { mblSpotify } from '../assets'


const partner = () => (
    <section id='partner' className={`md:flex block w-full`}>

        <div className='absolute z-[1] w-[30%] h-[20%] right-20 rounded-full pink__gradient'/>
        
        <img src={mblSpotify} className='w-2/4 -mr-20 md:visible invisible z-[0] rounded-3xl hover:-mt-5 hover:mb-5 duration-75 ease-linear'/>
        <div className='z-[2] pointer-events-none text-end'>
            <p className={`${styles.paragraph} leading-3 text-secondary`}>Spotify</p>
            <h1 className={`font-poppins font-semibold xs:text-[40px] text-[34px] text-white xs:leading-[30px] leading-[20px] w-full mb-10`}>MBL Music</h1>
            <p className={` pointer-events-auto font-poppins font-normal text-dimWhite text-[15px] leading-[30.8px] p-5 backdrop-blur-md bg-white/10 rounded-2xl mb-20`}>
            MBL Music ist schon ein sehr langer Partner von <span>DJRamsad</span> <br />Sie haben schon unzählige lieder gemacht und es kommen in Zukunft auch noch neue.
            
            </p>
        </div>
        
        
    </section>
)


export default partner