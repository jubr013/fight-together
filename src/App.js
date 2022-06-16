import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Incidente from './pages/Incidente';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} /> 
      <Route path='/incident' element={<Incidente />} />
       
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;