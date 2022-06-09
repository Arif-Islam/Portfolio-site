import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Home/Footer/Footer';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <div className='bg-[#212121]'>
        <div className='max-w-7xl mx-auto font-red-hat'>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
          </Routes>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
