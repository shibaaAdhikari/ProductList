// components/Navbar.js
const Navbar = () => {
    return (
      <nav className="bg-customColor">
        <div className="container mx-auto flex justify-between items-center bg-vintage p-5 text-white cursor-pointer">
          <div className="mr-4">
            ProductList
          </div>
          <div className="flex items-center">
            <h1 className="mr-4">Username</h1>
            <h1>Logout</h1>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  