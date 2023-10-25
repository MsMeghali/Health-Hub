import './App.css';
import {Header} from './components/Header';
import {AllRoutes} from './routes/AllRoutes';
import {Footer} from './components/Footer';
import { useState } from 'react';


function App() {
  const [activeUser, setActiveUser]=useState({type:null , id:null , name:null})
  return (
    <div >
      <Header activeUser={activeUser} setActiveUser={setActiveUser}/>
      <AllRoutes activeUser={activeUser} setActiveUser={setActiveUser} />
      <Footer />
    </div>
  );
}

export default App;
