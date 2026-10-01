import { useParams } from 'react-router-dom'

function JobDetails() {
  const { id } = useParams()

  return (
    <div className="page-container">
      <h1>Job Details</h1>
      <p>Showing details for Job ID: {id}</p>
    </div>
  )
}

export default JobDetails