import React from 'react'
import styles from '../style'

const NewSongs = () => (
    <section id='music'>
      <h1 className={`${styles.heading2} ${styles.flexCenter} `}>Neue Musik</h1>
      <p className={`${styles.paragraph} ${styles.flexCenter} text-center`}>DJRamsad begeistert regelmäßig mit neuer Musik. <br /> Hier sind die neusten tracks!</p>
      <div className={`${styles.flexCenter} gap-5 my-20`}>
        <iframe width="100%" height="300" className='rounded-xl box-shadow' allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1674248652&color=%234b0969&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        <iframe width="100%" height="300" className='rounded-xl box-shadow' allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1656640377&color=%234b0969&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      </div>
    </section>
    
  )


export default NewSongs