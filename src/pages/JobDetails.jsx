import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function JobDetails() {
  const { id } = useParams()

  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`http://localhost:5000/api/jobs/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setJob(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching job:', error)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <p className="loading">Loading job details...</p>
  }

  if (!job || job.message === 'Job not found') {
    return (
      <div className="page-container">
        <h1>Job Not Found</h1>
        <p>The job you are looking for does not exist.</p>
      </div>
    )
  }

  return (
    <div className="page-container">
      <h1>{job.title}</h1>

      <h2>{job.company}</h2>

      <p>📍 {job.location}</p>

      <p>
        <strong>Job Type:</strong> {job.type}
      </p>

      <h3>Job Description</h3>

      <p>{job.description}</p>
    </div>
  )
}

export default JobDetails