import './App.css';
import {Header} from './components/Header';
import {AllRoutes} from './routes/AllRoutes';
import {Footer} from './components/Footer';
import video from './asset/video.mp4'

function App() {
  return (
    <div >
    <video autoPlay loop muted className='video'>
      <source src={video} type="video/mp4" />

      Your browser does not support the video tag.
    </video>   
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
