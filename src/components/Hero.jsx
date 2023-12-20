import styles from "../style";
import Button from "./Button";
import { soundcloud,  spotify, twitch, youtube, amazon } from "../assets";
import HeroGridItem from "./HeroGridItem";

const Hero = () => (
  <section id='home' className={`flex flex-row  ${styles.paddingY} h-[100%] mb-20`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

      <div className=" flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 flex-wrap font-poppins font-semibold z-[4] text-[35px] xs:text-[65px] text-center ss:text-left md:text-[52px] text-white xs:leading-[80.8px] leading-[45px]">
          Was macht <br className="sm:block hidden" /> <span className="text-gradient">DJ Ramsad</span>? 
        </h1>
      </div>

      <p className={`flex ${styles.paragraph} max-w-[470px] mt-5`}>DJ Ramsad begeistert auf Twitch mit Live-Streams, kreiert mitreißende Musik und plant gleichzeitig die Veröffentlichung von packenden YouTube-Videos.
      Dein musikalisches Abenteuer beginnt hier! </p>

      <div className={`flex flex-row flex-wrap ${styles.flexCenter} mt-10`}>
        <Button content={"Kontakt"} bg={"bg-pink-gradient"}/>
      </div>


    </div>
    <div className={`flex-1 gap-5 w-full hidden md:flex ${styles.flexCenter} `}>
      <div className="grid grid-cols-2 grid-rows-5 h-full w-full gap-5 relative">

        <HeroGridItem style="bg-[#10bc4c] row-span-3" logo={spotify} bgColor={'#10bc4c'} link='https://open.spotify.com/intl-de/artist/3fK3t9pN1XTkq2KiIGO3Pz'/>
        <HeroGridItem style="bg-[#0b121b] row-span-2" logo={amazon} bgColor={'#0b121b'} link='https://music.amazon.de/artists/B09RPL8V3S/dj-ramsad'/>
        <HeroGridItem style="bg-[#fe503a] row-span-2" logo={soundcloud} bgColor={'#fe503a'} link='https://soundcloud.com/dj_ramsad'/>
        <HeroGridItem style="bg-[#9146ff] row-span-2" logo={twitch} bgColor={'#9146ff'} link='https://www.twitch.tv/djramsad'/>
        <HeroGridItem style="bg-[#ff0001] row-span-1" logo={youtube} bgColor={'#ff0001'} link='https://www.youtube.com/channel/UCAIrKKlznU2W1co-bZdz5FA'/>

      </div>

    </div>
  </section>
)

export default Hero