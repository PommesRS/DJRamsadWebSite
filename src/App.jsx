import styles from "./style";
import { Navbar, Landing, Register, Login, Contact, Footer, AdminMain, Users, RequireAuth } from './components'
import { Routes, Route } from 'react-router-dom'

const App = () => (

  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <Routes>
      {/* Public Routes */}
      <Route path='/' Component={Landing} />
      <Route path='/contact' Component={Contact}/>
      <Route path='/register' Component={Register}/>
      <Route path='/login' Component={Login}/>

      {/* Protected Routes */}
      <Route element={<RequireAuth allowedRoles={[5150]}/>}>
        <Route path='/admin' Component={AdminMain}>
          <Route path='users' Component={Users}/>
        </Route>
      </Route>

      <Route path="*" Component={{/* *TODO* -> add 404 page */}}/>
    </Routes>

    <footer className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
    </footer>

  </div>
)


export default App