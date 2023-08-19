import { Link } from "react-router-dom/cjs/react-router-dom";
import { useState } from "react";
import { faBagShopping, faLocationArrow, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="flex flex-row items-center justify-between p-[15px] text-xl mx-[30px]">
            <div className="flex space-x-4 items-center">
                <h1>FadShop</h1>
                    <FontAwesomeIcon icon={faBagShopping} className="cursor-pointer" />
            </div>
            
            <nav className={`md:block ${menuOpen ? "block" : "hidden"} transition-opacity duration-300 ease-in-out`}>
                <ul className="flex flex-col md:flex-row items-center md:space-x-4 space-y-2 md:space-y-0">
                    <li><Link to="/" className="hover:text-gray-400 transition duration-300 ease-in-out">Home</Link></li>
                    <li><Link to="/products" className="hover:text-gray-400 transition duration-300 ease-in-out">Products</Link></li>
                    <li><Link to="/pricing" className="hover:text-gray-400 transition duration-300 ease-in-out">Pricing</Link></li>
                    <li><Link to="/about" className="hover:text-gray-400 transition duration-300 ease-in-out">Our shop</Link></li>
                </ul>
            </nav>
            <FontAwesomeIcon onClick={toggleMenu} icon={faBars} className="md:hidden cursor-pointer transition-300 ease" />

            <div className={`md:flex hidden items-center space-x-4 ${menuOpen ? "block" : "hidden"} transition-opacity duration-300 ease-in-out`}>
                <Link to="/login" className="border p-[7px] rounded-3xl hover:bg-gray-600 transition duration-300 ease-in-out">Sign up</Link>
                <FontAwesomeIcon icon={faLocationArrow} className="border hover:bg-gray-600 p-[7px] rounded-3xl cursor-pointer transition duration-300 ease-in-out" />
            </div>
        </div>
     );
}
 
export default Navbar;
