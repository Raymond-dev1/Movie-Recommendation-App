import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar  flex justify-center sticky top-0 right-0">
      <div className="mx-7 px-5 py-5 rounded-xl text-l font-extrabold text-white shadow-xl/20 w-[300px] md:w-[500px] ">
      <div className="navbar-brand bg-white/30 backdrop-blur-sm ring-1 ring-blue-500 flex flex-row gap-8 md:gap-21 rounded-3xl p-3  shadow-xl/30 ">
        <Link />
      <div className="navbar-links flex flex-row gap-0">
        <Link to="/" className="nav-link tracking-normal">
          Home
        </Link>
        </div>
        <div>
        <Link to="/favorites" className="nav-link tracking-normal">
          Favorites
        </Link>
        </div>
        </div>
        </div>
    </nav>
  );
}
 