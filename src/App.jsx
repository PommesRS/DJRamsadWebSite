import styles from "./style";
import { Navbar, Landing, Contact } from './components'
import { Route, Routes } from 'react-router-dom'


const App = () => (

  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        <a href='/' className=' text-white text-[60px] font-bold hover:-ml-2 rounded-full leading-[60px] relative'> <span>&larr;</span> </a>
      </div>
    </div>

    

    <Routes>

      <Route path='/' Component={Landing} />
      <Route path='/contact' Component={Contact}/>

    </Routes>

  </div>
)


export default App