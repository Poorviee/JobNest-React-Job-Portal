import { useState } from 'react'

function AddJob() {
  const [title, setTitle] = useState('')
  const [company, setCompany] = useState('')
  const [location, setLocation] = useState('')
  const [type, setType] = useState('Full Time')
  const [description, setDescription] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newJob = {
      title,
      company,
      location,
      type,
      description
    }

    try {
      const response = await fetch('http://localhost:5000/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newJob)
      })

      if (response.ok) {
        setMessage('Job added successfully!')

        setTitle('')
        setCompany('')
        setLocation('')
        setType('Full Time')
        setDescription('')
      } else {
        setMessage('Failed to add job.')
      }
    } catch (error) {
      console.error('Error:', error)
      setMessage('Server error. Please try again.')
    }
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

        <textarea
          placeholder="Job Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button type="submit">Add Job</button>

        {message && <p>{message}</p>}

      </form>
    </div>
  )
}

export default AddJob