import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Incidente from './pages/Incidente';
import Profile from './pages/Profile';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} /> 
      <Route path='/incidents' element={<Incidente />} />
      <Route path='/profile' element={<Profile />} />
       
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;