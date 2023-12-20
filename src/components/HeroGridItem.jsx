import React from 'react'
import styles from "../style";


const HeroGridItem = ({logo, bgColor, style, link}) => (
    <a href={link} target="_blank" className={`${style} col-span-1 cursor-pointer hover-effect overflow-hidden relative rounded-xl hover:-mt-2 hover:mb-2 duration-75 ease-linear ${styles.flexCenter} bg-[${bgColor}]`}>
          <img src={logo} className={`z-[2] object-contain h-14 transition-all duration-100 ease-linear `}/>
    </a>
  )

window.onload=function(){

const cards = document.querySelectorAll(".hover-effect");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
    const { x, y } = card.getBoundingClientRect();
    card.style.setProperty("--x", e.clientX - x);
    card.style.setProperty("--y", e.clientY - y);
    });
});
}

export default HeroGridItem