import React from 'react'
import { FaHome } from 'react-icons/fa';
import { BsPersonFillLock } from 'react-icons/bs';
import {BiShoppingBag} from 'react-icons/bi';
import { FaUserCircle} from 'react-icons/fa';
import { RxNotionLogo} from 'react-icons/rx';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Sidebar = () => {
  
    const location = useLocation();

    const cart = useSelector(state => state.cart)

    return (
 
    <div className="d-flex flex-column   flex-shrink-0 bg-body-tertiary" style={{width: "4.5rem"}}>
    <Link to="/" className="d-block shadow p-3 link-body-emphasis text-decoration-none" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
       <RxNotionLogo size={40}/>
      <span className="visually-hidden">Icon-only</span>
    </Link>

    <ul className="nav nav-pills nav-flush flex-column mb-auto text-center" style={{position:"sticky",top:"80px"}}>
     {/* Home page cheap logic for active bg :) */}

      <li className="nav-item">
      {location.pathname==='/' ? 
        <Link to="/" className="nav-link shadow-lg active py-3 border-bottom rounded-0" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Home" data-bs-original-title="Home">
        < FaHome size={30}/>
        </Link>
     :
     <Link to="/" className="nav-link shadow-lg  py-3 border-bottom rounded-0" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Home" data-bs-original-title="Home">
     < FaHome size={30}/>
     </Link>
      }
       
      </li>
    

    {/* Product page cheap logic for active bg :) */}
      <li>
      {location.pathname==='/products' ?  
      <Link to="/products"  
        className="nav-link active py-3 shadow-lg  border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Orders" data-bs-original-title="Orders">
          <BiShoppingBag size={30}/>
        </Link>
    : 
    <Link to="/products"  
    className="nav-link  py-3 border-bottom shadow-lg  rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Orders" data-bs-original-title="Orders">
      <BiShoppingBag size={30}/>
    </Link>    
    }
      </li>


  {/* Cart page cheap logic for active bg :) */}
      <li>
      {location.pathname==='/cart' ?
      <Link to="/cart" className="nav-link py-3 shadow-lg  active border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Products" data-bs-original-title="Products">
      <FaShoppingCart size={30}/>
      <h3>{cart.length}</h3>
     </Link>
     :
     <Link to="/cart" className="nav-link py-3 shadow-lg  border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Products" data-bs-original-title="Products">
         <FaShoppingCart size={30}/>
      <h3>{cart.length}</h3>
         
        </Link>
     }
      </li>

 {/* Signup page cheap logic for active bg :) */}
      <li>
      {location.pathname==='/signup'?
        <Link  to="/signup" className="nav-link shadow-lg   py-3 active border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Customers" data-bs-original-title="Customers">
        <FaUserCircle size={30}/>
     </Link> 
     :
     <Link to="/signup" className="nav-link  py-3 shadow-lg  border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Customers" data-bs-original-title="Customers">
     <FaUserCircle size={30}/>
  </Link>
  }
      </li>

 
  {/* Signin page cheap logic for active bg :) */}
      <li>
      {location.pathname==='/signin'? 
     <Link to="/signin" className="nav-link active shadow-lg   py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard" data-bs-original-title="Dashboard">
     <BsPersonFillLock size={30}/>
   </Link>  
   : 

   <Link to="/signin" className="nav-link shadow-lg   py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard" data-bs-original-title="Dashboard">
   <BsPersonFillLock size={30}/>
 </Link>
    }
       
      </li>

    </ul>



    <div className="dropdown border-top">
      <a href="/" className="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" className="rounded-circle" />
      </a>
      <ul className="dropdown-menu text-small shadow">
        <li><a className="dropdown-item" href="/">New project...</a></li>
        <li><a className="dropdown-item" href="/">Settings</a></li>
        <li><a className="dropdown-item" href="/">Profile</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="/">Sign out</a></li>
      </ul>
    </div>
  </div>



  )
}

export default Sidebar

















