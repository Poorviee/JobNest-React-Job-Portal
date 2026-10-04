import { Link } from 'react-router-dom'

function JobCard({ job }) {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <h3>{job.title}</h3>
        <span className="job-type">{job.type}</span>
      </div>

      <p className="company">{job.company}</p>
      <p className="location">📍 {job.location}</p>
      <p className="description">{job.description}</p>

      <Link
        to={`/jobs/${job.id}`}
        className="details-button"
      >
        View Details
      </Link>
    </div>
  )
}

export default JobCard