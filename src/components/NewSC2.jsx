import React from 'react'
import styles from '../style'


const NewSC2 = ({style, link, id}) => (
    <div className={`${styles.flexCenter} ${style} w-full flex-col`}>
        <iframe id='audio2' width="100%" height="300" className='rounded-xl box-shadow mb-2' allow="autoplay" src={`${link}&color=%234b0969&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}></iframe>
        <div className={`gap-1 flex flex-row align-middle justify-center w-full`}>
            <span className="material-symbols-outlined text-white">volume_mute</span>
            <input type="range" className='slider' id="slider2" min={0} max={100}/>
            <span className="material-symbols-outlined text-white">volume_up</span>
        </div>
    </div>
  )


setTimeout(() => {
    var slider2 = document.getElementById("slider2");

    slider2.oninput = function(){
        var audio = SC.Widget(document.getElementById('audio2'));
        audio.setVolume(slider2.value);
        console.log('arsch')
    }
}, "1000")

export default NewSC2