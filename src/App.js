import './App.css';
import NavbarMenu from './NavbarMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import InvestmentPage from './Pages/InvestmentPage';
import SettingsPage from './Pages/SettingsPage';

function App() {
  return (
    <BrowserRouter>
     <div className='flex'>
      <NavbarMenu/>
      <Routes>
        <Route path='/investments'element={<InvestmentPage/>}></Route>
        <Route path='/settings'element={<SettingsPage/>} ></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

