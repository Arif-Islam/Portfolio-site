import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Home/Footer/Footer';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound';
import ProjectInfo from './Pages/ProjectInfo/ProjectInfo';

function App() {
  return (
    <div>
      <div className='bg-[#212121]'>
        <div className='max-w-7xl mx-auto font-red-hat'>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/blogs' element={<Blogs></Blogs>}></Route>
            <Route path='/project/:id' element={<ProjectInfo></ProjectInfo>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
