import styles from "./style";
import { Navbar, Landing, Register, Login, Contact, Footer } from './components'
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
      <Route path='/contact' Component={Contact}/>
      <Route path='/register' Component={Register}/>
      <Route path='/login' Component={Login}/>
    </Routes>

    <footer className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
    </footer>

  </div>
)


export default App