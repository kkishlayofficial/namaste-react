import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btnName, setBtnName] = useState('Login')
  const onlineStatus = useOnlineStatus();
  const userData = useContext(UserContext);
//Subscribing to the store using useSelector
  const cart = useSelector((store) => store.cart.items);
  return (
    <div className='flex justify-between bg-pink-100 shadow-md'>
      <div className='logo-container'>
        <img
          className='logo w-36'
          src={LOGO_URL}
        />
      </div>
      <div className='flex items-center'>
        <ul className="flex p-8 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4"><Link to={'/'}>Home</Link></li>
          <li className="px-4"><Link to={'/about'}>About Us</Link></li>
          <li className="px-4"><Link to={'/contact'}>Contact Us</Link></li>
          <li data-testid='cart' className="px-4 font-bold text-xl"><Link to={'/cart'}>Cart ({cart.length} items)</Link></li>
          <li className="px-4"><Link to={'/grocery'}>Grocery</Link></li>
          <button className="login" onClick={() => {
            btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
          }}>{btnName}</button>
          <li className="px-4">{ userData?.loggedInUser }</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;