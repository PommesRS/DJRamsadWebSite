import React from 'react'
import styles from '../style'
import NewSC1 from './NewSC1'
import NewSC2 from './NewSC2'
import { SCSongs } from "../constants";
import {Spotify} from "react-spotify-embed";


const NewSongs = () => (
    <section id='music'>
      <h1 className={`${styles.heading2} ${styles.flexCenter} `}>Neue Musik</h1>
      <p className={`${styles.paragraph} ${styles.flexCenter} text-center`}>DJRamsad begeistert regelmäßig mit neuer Musik. <br /> Hier sind die neusten tracks!</p>
      <div className={`${styles.flexCenter} flex-wrap md:flex-nowrap flex-col gap-20 my-20 huso`}>

        <div className='w-full flex flex-row gap-5'>
          <NewSC1 link={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1674248652"}/>
          <NewSC2 link={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1656640377"}/>
        </div>
      </div>
    </section>
    
  )
  
export default NewSongs