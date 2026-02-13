import { Link } from "react-router-dom";

function Navbar() {
  return (
   <div className="bg-white dark:bg-zinc-800 
shadow p-4 flex gap-6 justify-center 
text-gray-800 dark:text-gray-100 transition">

      <Link to="/" className="text-blue-500 font-semibold">
        Todo
      </Link>
      <Link to="/profile" className="text-blue-500 font-semibold">
        Profile
      </Link>
    </div>
  );
}

export default Navbar;
