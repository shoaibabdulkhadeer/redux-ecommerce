import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Products from './components/Products';
import Cart from './components/Cart';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
 
      <Navbar />
      <div style={{display:"flex"}}>
     <Sidebar />
     <div>
     <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/signin' element={<Signin />}/>


      </Routes>
    
     <Footer />
     </div>
 
     </div>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
