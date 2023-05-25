import Image from "next/image";
import Link from "next/link";
import LogoIcon from "../public/shopping-bag-flat.svg";

function Header() {
  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full bg-slate-100 z-50 shadow">
      <Link
        href="/"
        className="flex flex-col md:flex-row justify-center text-center"
      >
        <Image src={LogoIcon} alt="Logo" className="mx-auto" />
        <div className="flex my-auto pl-1">
          Online<strong>Shop</strong>
        </div>
      </Link>

      <div className="flex items-center space-x-2.5 text-sm">
        <button className="button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">
          Log in
        </button>
        <button className="button bg-transparent border-blue-600 hover:bg-blue-600 hover:text-white hover:border-transparent">
          Sign up
        </button>
      </div>
    </header>
  );
}

export default Header;
