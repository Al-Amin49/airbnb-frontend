import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { FaCircleUser } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";


const Navbar = () => {
    return (
        <div className="p-4 ">
         <nav className="md:flex justify-between items-center hidden ">
            <div className="flex items-center ">
                 <Image src=" https://cdn-icons-png.flaticon.com/512/2111/2111320.png" alt="" width={32} height={32} />
                <span className="text-red-500 font-bold ml-2 text-2xl">airbnb</span>
            </div>
            <ul>
                <li><Link href="/"
                className="font-medium"
                >Stays</Link></li>
            
            </ul>
       <div className="flex items-center justify-center space-x-4">
       <span className="font-medium hover:bg-gray-200 hover:rounded-full p-2">Airbnb your home</span>
            <span className="hover:bg-gray-200 hover:rounded-full p-1 text-xl"><TbWorld/></span>
            <div className="flex items-center border border-gray-500 rounded-full p-3 hover:shadow-md">
                <AiOutlineMenu/>
                <FaCircleUser className="text-2xl ml-2"/>
            </div>
       </div>

            
         </nav>
        </div>
    );
};

export default Navbar;