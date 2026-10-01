import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        JobNest
      </div>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/jobs">
          Jobs
        </Link>

        <Link to="/add-job">
          Add Job
        </Link>

        <Link to="/about">
          About
        </Link>

      </div>

    </nav>
  )
}

export default Navbar