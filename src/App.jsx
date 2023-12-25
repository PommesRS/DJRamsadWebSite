import styles from "./style";
import { Navbar, Hero, NewSongs, SpotifyPreview, Partner, CTA, Donate, Footer} from './components';

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
        <NewSongs />
        <SpotifyPreview />
        <Partner />
        <CTA />
        <Donate />
      </div>
    </div>

    <footer className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </footer>
  </div>
);

export default App