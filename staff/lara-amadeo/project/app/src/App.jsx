
import Loader from './library/modules/Loader'
import './style.css'
import "./App.css"
import Context from './Context'
import { useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import AdditionalInfo from './modals/AdditionalInfo'

function App() {

  const [loader, setLoader] = useState(false)
  const [view, setView] = useState('additionalInfo')

  const showLoader = () => {
    setLoader(true)
  }

  const hideLoader = () => {
    setLoader(false)
  }

  const openAdditionalInfoModal = () => {
    setView('additionalInfo')
  }

  return (
    <>
      <Context.Provider value={{ loaderOn: showLoader, loaderOff: hideLoader }}>
        {view === 'register' && <Register onRegisterClick={openAdditionalInfoModal} />}
        {view === 'additionalInfo' && <AdditionalInfo />}
        {view === 'login' && <Login />}

        {loader && <Loader />}
      </Context.Provider>
    </>
  )
}

export default App
