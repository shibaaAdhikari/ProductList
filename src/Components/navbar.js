import Link from "next/link";
import { useRouter } from "next/router";

// components/Navbar.js
const Navbar = () => {
  const router = useRouter()
    return (
      <nav className="bg-customColor">
        <div className="container mx-auto flex justify-between items-center bg-vintage p-5 text-white cursor-pointer">
          <div className="mr-4">
            ProductList
          </div>
          <div className="mr-4">
          {/* <Link href={"/Piechart"}  >Pie Chart</Link> */}
          </div>
          <div className="flex items-center">
        {typeof window !== 'undefined' && window.localStorage && localStorage.getItem("email") &&    <h1 className="mr-4">{localStorage.getItem("email")}</h1>}
            <h1 onClick={()=>{{
            localStorage.removeItem("accessToken");}
              router.push('/')
            }}>Logout</h1>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  