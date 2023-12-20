import styles from "./style";
import { Navbar, Hero, NewSongs, SpotifyPreview, Partner, CTA} from './components';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} flex flex-col gap-10`}>
        <h1 className={`${styles.heading2} ${styles.flexCenter} `}>Neue&nbsp;<span className='text-gradient'> Musik</span></h1>
        <NewSongs />
        <SpotifyPreview />
        <h1 className={`${styles.heading2} ${styles.flexCenter} `}>Partner</h1>
        <Partner />
        <CTA />
      </div>
    </div>
  </div>
);

export default App