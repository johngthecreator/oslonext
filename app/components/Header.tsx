import Link from "next/link";
import {FaSearch, FaFolder, FaBars, FaInfoCircle} from "react-icons/fa";

export default function Header(){
    return (
      <div className='flex m-5 w-5/6 h-[75px] justify-evenly rounded-xl bg-secondary z-10 absolute bottom-0 items-center md:sticky drop-shadow-xl'>
        <Link href={"/"}>
            <FaSearch size={25} className="text-white"/>
        </Link>
        <Link href={"/list"}>
            <FaBars size={25} className="text-white"/>
        </Link>
        <Link href={"/results"}>
            <FaFolder size={25} className="text-white"/>
        </Link>
        <Link href={"/about"}>
            <FaInfoCircle size={25} className="text-white"/>
        </Link>
      </div>
    )
}