import { useState } from 'react'

function AddJob() {
  const [title, setTitle] = useState('')
  const [company, setCompany] = useState('')
  const [location, setLocation] = useState('')
  const [type, setType] = useState('Full Time')

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log({
      title,
      company,
      location,
      type
    })
  }

  return (
    <div className="page-container">
      <h1>Add a Job</h1>

      <form onSubmit={handleSubmit} className="job-form">

        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Internship</option>
          <option>Remote</option>
        </select>

        <button type="submit">
          Add Job
        </button>

      </form>
    </div>
  )
}

export default AddJob