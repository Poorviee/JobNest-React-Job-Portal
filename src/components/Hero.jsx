function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find Your Dream Job</h1>

        <p>
          Search thousands of job opportunities and find the right career
          opportunity for you.
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search for jobs..."
          />

          <button>Search</button>
        </div>
      </div>
    </section>
  )
}

export default Hero