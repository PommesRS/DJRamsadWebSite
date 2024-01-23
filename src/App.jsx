import styles from "./style";
import { Navbar, Landing, Contact, Footer } from './components'
import { Routes, Route, HashRouter as Router } from 'react-router-dom'

const App = () => (

  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <Routes>
      <Route path='/' Component={Landing} />
      <Route path='/:contact' Component={Contact}/>
    </Routes>

    <footer className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
    </footer>

  </div>
)


export default App