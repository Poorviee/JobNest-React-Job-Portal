function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">JobNest</div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/jobs">Jobs</a>
        <a href="/add-job">Add Job</a>
        <a href="/about">About</a>
      </div>
    </nav>
  )
}

export default Navbar