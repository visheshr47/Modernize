import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAccount } from "../utils/userInfoSlice";
const Form = () => {
    const [emailText, setEmailText] = useState(" ");
    const [passwordText, setPasswordText] = useState(" ");
    const dispatch = useDispatch();
    const handleClickToAddAccount = (emailText) => {
        dispatch(addAccount(emailText))

    }
    return (



        <div className="flex flex-wrap -m-2 lg:w-8/12 container px-5 py-24 mx-auto mt-20    text-gray-600 body-font relative   p-8 border border-gray-200 rounded-md ">
            <div className="p-2 w-full">
                <div className="relative">
                    <label htmlFor="name" className="leading-7 text-base font-semibold text-gray-600">Email address</label>
                    <input type="text" id="name" name="email" onChange={(e) => { setEmailText(e.target.value) }} className="w-full bg-gray-100    bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    <p className="text-xs text-gray-400  ">We'll never share your email with anyone else.</p>
                </div>

                <div className="relative py-2  ">
                    <label htmlFor="email" className="leading-7 text-base font-semibold  text-gray-600">Password</label>
                    <input type="email" id="email" name="password" onChange={(e) => { setPasswordText(e.target.value) }} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>


            </div>
            <div>
                <div className="relative">
                    <input type="checkbox" id="checkbox" name="checkbox" className="m-2 " />
                    <label htmlFor="checkbox " className=" text-sm   font-light  text-gray-500">Check me out</label>

                </div>

                <div className="p-2 w-1/12  ">
                    <button onClick={() => handleClickToAddAccount(emailText)} className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-blue-600 rounded text-lg">Submit</button>
                </div>
            </div>
        </div>

    )
}
export default Form;