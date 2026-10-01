import JobCard from './JobCard'

const jobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechNova',
    location: 'Bangalore',
    type: 'Full Time',
    description: 'Build modern and responsive web applications using React.'
  },
  {
    id: 2,
    title: 'Data Science Intern',
    company: 'DataWorks',
    location: 'Hyderabad',
    type: 'Internship',
    description: 'Work with data analysis and machine learning projects.'
  },
  {
    id: 3,
    title: 'Python Developer',
    company: 'CodeSphere',
    location: 'Remote',
    type: 'Remote',
    description: 'Develop backend applications and APIs using Python.'
  }
]

function JobList() {
  return (
    <section className="jobs-section">
      <h2>Featured Jobs</h2>

      <div className="job-grid">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  )
}

export default JobList