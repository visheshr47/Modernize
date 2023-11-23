import React from "react";
import logo from "../asset/logo.png"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
const Header = () => {
    const accountUser = useSelector((store) => store.user.accounts);
    const [loginToggle, setLoginToggle] = useState("Login");

    return (


        <div className="text-gray-600 body-font shadow-lg">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span><img src={logo} alt="Om Logistic Project" /></span>
                    <span className="ml-3 text-xl">Mordernize</span>
                </div>
                <div className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link to="/" className="mr-5 hover:text-gray-900">Forms</Link>
                    <Link to="/card" className="mr-5 hover:text-gray-900">Card</Link>
                    <Link to="/basket" className="mr-5 hover:text-gray-900">Basket</Link>
                    <span className="mr-5 hover:text-gray-900">🔔 ({accountUser.length})</span>
                    <button className="mr-5 hover:text-gray-900" onClick={() => { loginToggle === "Login" ? setLoginToggle("Logout 👤") : setLoginToggle("Login") }}>{loginToggle}</button>
                </div>

            </div>
        </div>

    )
}
export default Header;