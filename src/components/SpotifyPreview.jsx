import React from 'react'
import styles from '../style'
import { ramsadSpotify } from '../assets'

const SpotifyPreview = () => (

    <div className={`md:flex block w-full`}>
        <div className='absolute z-[0] w-[30%] h-[20%] left-[20] rounded-full pink__gradient'/>
        <div className='z-[2] pointer-events-none'>
            <p className={`${styles.paragraph} leading-3 text-secondary`}>Spotify</p>
            <h1 className={`font-poppins font-semibold xs:text-[40px] text-[34px] text-white xs:leading-[30px] leading-[20px] w-full mb-10`}>DJRamsad</h1>
            <p className={` pointer-events-auto font-poppins font-normal text-dimWhite text-[15px] leading-[30.8px] p-5 backdrop-blur-md bg-white/10 rounded-2xl mb-20`}>
            DJ Ramsad begeistert auf Spotify mit einer vielseitigen Palette musikalischer Kreationen, von mitreißenden Beats bis zu entspannten Melodien. Seine Tracks zeichnen sich durch kreative Arrangements und eine einzigartige Genrefusion aus, die ein unverwechselbares Hörerlebnis bietet.
            </p>
        </div>
        
        <img src={ramsadSpotify} className='w-2/4 -ml-20 md:visible invisible z-[0] rounded-3xl hover:-mt-5 hover:mb-5 duration-75 ease-linear object-contain'/>
    </div>
        

)


export default SpotifyPreview