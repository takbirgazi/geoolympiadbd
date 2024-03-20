import NavBar from "../NavBar/NavBar";
import { IoCallSharp } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import logo from "./../../assets/images/logo.png";

export default function Home(){
    return(
        <div className="w-11/12 mx-auto flex justify-between flex-col">
            <div className="flex gap-5 items-center py-5">
                <img className="h-10" src={logo} />
                <NavBar></NavBar>
            </div>
            <div className="flex justify-end items-end w-full">
                <div className="hover:bg-[#00281f] bg-[#2e3830] text-white p-5 cursor-pointer">
                    <div className="px-5 flex gap-3 items-center">
                        <IoCallSharp className="h-12 w-12"></IoCallSharp>
                        <div>
                            <p className="font-bold text-xl">+8801913171704</p>
                            <span>Talk To Us!</span>
                        </div>
                    </div>
                </div>
                <div className="hover:bg-[#00281f] bg-[#2e3830] text-white p-5">
                    <div className="px-5 flex gap-3 items-center">
                        <MdMailOutline className="h-12 w-12"></MdMailOutline>
                        <div>
                            <p className="font-bold text-xl">info@geoolympiadbd.com</p>
                            <span>Get In Touch</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}