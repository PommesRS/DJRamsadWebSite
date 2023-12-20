import styles, { layout } from "../style";
import Button from './Button';

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Tritt mit DJRamsad in Kontakt!</h2>
      <p className={`${styles.paragraph} max-w-[500px] mt-5`}>Sei die treibende Kraft für DJ Ramsad! Teile deine Ideen und Vorschläge für aufregende Projekte - deine Einflüsse sind gefragt!</p>
    </div>
    <div>
      <Button content={"Kontakt"} styles={"bg-pink-gradient"} className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}/>
    </div>
  </section>
)


export default CTA