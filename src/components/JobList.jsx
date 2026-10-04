import { useEffect, useState } from 'react'
import JobCard from './JobCard'
import LoadingMessage from './LoadingMessage'

function JobList() {
  const [jobs, setJobs] = useState([])
  const [search, setSearch] = useState('')
  const [jobType, setJobType] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:5000/api/jobs')
      .then((response) => response.json())
      .then((data) => {
        const normalizedJobs = data.map((job) => ({
          ...job,
          id: job.id || job._id
        }))

        setJobs(normalizedJobs)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching jobs:', error)
        setLoading(false)
      })
  }, [])

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = `${job.title} ${job.company} ${job.location}`
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesType =
      jobType === 'All' || job.type === jobType

    return matchesSearch && matchesType
  })

  if (loading) {
    return <LoadingMessage />
  }

  return (
    <section className="jobs-section">
      <h2>Featured Jobs</h2>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search jobs, companies or locations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="job-search"
        />

        <select
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          className="job-filter"
        >
          <option value="All">All Types</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Internship">Internship</option>
          <option value="Remote">Remote</option>
        </select>
      </div>

      <div className="job-grid">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <p>No jobs found.</p>
      )}
    </section>
  )
}

export default JobList