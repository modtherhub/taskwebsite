import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import Blog from "./pages/Blog"
import Plans from "./pages/Plans"
import NotFoundPage from "./pages/NotFoundPage"
import DoctorPage from './pages/DoctorPage'
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react'

function App() {
  const { i18n } = useTranslation();

  

  useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
  }, [i18n.language]);
  
  return (
    <Routes>
      <Route path = "/" element = {<HomePage/>}/>
      <Route path = "/blog"  element = {<Blog/>} />
      <Route path = "/plans" element = {<Plans/>}/>
      <Route path = "*" element = {<NotFoundPage/>}/>
      <Route path = "/doctorpag" element = {<DoctorPage/>}/>
    </Routes>
  )
}

export default App
