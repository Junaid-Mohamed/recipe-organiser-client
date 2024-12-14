import { Link } from "react-router-dom";

const Navbar = ()=> {
    return(
        <header className="bg-light">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Recipe Organiser
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-primary" to="/">
                  Recipes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-primary" to="/add-recipe">
                  Add Recipe
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    )
}

export default Navbar;