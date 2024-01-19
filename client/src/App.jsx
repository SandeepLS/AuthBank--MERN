import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Header from './Components/Header';

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}
