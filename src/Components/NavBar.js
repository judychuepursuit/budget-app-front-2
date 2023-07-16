import { Link } from "react-router-dom";
// import Index.css from "../Pages/";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/transactions" className="header-link">Judy's Budget App</Link>
      </h1>
      <button className="new-btn">
        <Link to="/transactions/new" className="header-link">New Transactions</Link>
      </button>
    </nav>

  );
}
