import Image from "next/image";
import Link from "next/link";
import logo from "../../public/vercel.svg";
import menu from "../../public/menu.svg";
import { linkItems } from "./linkItem";

const Navbar = () => {
  return (
    <nav className="w-full mx-auto flex py-5 px-8 items-center justify-around sticky top-0 bg-[#05193768] overflow-hidden shadow-2xl z-20">
      <div className="w-20 h-20 rounded-full bg-white border-4 border-[#B157C7]">
        <Image src={logo} alt="logo" className="object-contain w-full h-full" />
      </div>
      <div className="flex-auto">
        <h1 className=" ml-6 text-4xl font-bold inline-block border-b-4 border-t-4 border-[#B157C7]">SILENO</h1>
      </div>
      <div className="rounded-2xl w-8 h-8 bg-white sm:hidden">
        <Link href="/">
          <Image
            src={menu}
            alt="menu haburguesa"
            className="nav__menu-icon"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <ul className="nav__items flex justify-between gap-5">
        {linkItems.map((item) => (
          <li className="text-lg font-bold mx-4 cursor-pointer border-b-4 border-t-4 border-[#B157C7] transition duration-500 hover:text-2xl hover:border-white hover:text-[#B157C7]" key={item}>
            <Link href="/">{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
