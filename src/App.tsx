import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Routes, Route} from "react-router-dom";
import Drink from './pages/Drink';
import SearchPage from './pages/SearchPage';
import Topbar from './components/Topbar';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Topbar />}>
      
        <Route index element={<Home />}/>
        <Route path=':id' element={<Drink />}/>
        <Route path='search/:wrd' element={<SearchPage />}/>
      </Route>
    </Routes>
  );
}

export default App;
