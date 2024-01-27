import React from 'react'
import styles from '../style'


const NewSC1 = ({style, link, id}) => (
    <div className={`${styles.flexCenter} ${style} w-full flex-col`}>
        <iframe id='audio1' width="100%" height="300" className='rounded-xl box-shadow mb-2' allow="autoplay" src={`${link}&color=%234b0969&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}></iframe>
        <div className={`gap-1 flex flex-row align-middle justify-center w-full`}>
            <span className="material-symbols-outlined text-white">volume_mute</span>
            <input type="range" className='slider' id="slider" min={0} max={100}/>
            <span className="material-symbols-outlined text-white">volume_up</span>
        </div>
    </div>
  )


  setTimeout(() => {
    var slider1 = document.getElementById("slider");

    slider1.oninput = function(){
        var audio = SC.Widget(document.getElementById('audio1'));
        audio.setVolume(slider1.value);
    }
}, "1000")

    


export default NewSC1