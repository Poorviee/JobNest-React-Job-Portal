const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

const Job = mongoose.model('Job', jobSchema)
const initialJobs = [
  {
    title: 'Cybersecurity Analyst',
    company: 'TechNova',
    location: 'Bangalore',
    type: 'Full Time',
    description: 'Build modern and responsive web applications using React.'
  },
  {
    title: 'Data Science Intern',
    company: 'DataWorks',
    location: 'Hyderabad',
    type: 'Internship',
    description: 'Work with data analysis and machine learning projects.'
  },
  {
    title: 'Python Developer',
    company: 'CodeSphere',
    location: 'Remote',
    type: 'Remote',
    description: 'Develop backend applications and APIs using Python.'
  },
  {
    title: 'Test Job',
    company: 'Test Company',
    location: 'Bangalore',
    type: 'Full Time',
    description: 'Testing JobNest API'
  },
  {
    title: 'AI Engineer',
    company: 'Google',
    location: 'Bangalore',
    type: 'Full Time',
    description: 'Develop AI and machine learning applications.'
  },
  {
    title: 'Machine Learning Intern',
    company: 'AI Lab',
    location: 'Bangalore',
    type: 'Internship',
    description: 'Work on machine learning and data analysis projects.'
  }
]

app.get('/', (req, res) => {
  res.json({
    message: 'JobNest API is running!'
  })
})

// GET all jobs
app.get('/api/jobs', async (req, res) => {
  try {
    const jobs = await Job.find()

    const formattedJobs = jobs.map((job) => ({
      id: job._id.toString(),
      title: job.title,
      company: job.company,
      location: job.location,
      type: job.type,
      description: job.description
    }))

    res.json(formattedJobs)
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: 'Failed to fetch jobs'
    })
  }
})

// GET single job
app.get('/api/jobs/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id)

    if (!job) {
      return res.status(404).json({
        message: 'Job not found'
      })
    }

    res.json({
      id: job._id.toString(),
      title: job.title,
      company: job.company,
      location: job.location,
      type: job.type,
      description: job.description
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: 'Failed to fetch job'
    })
  }
})

// ADD JOB
app.post('/api/jobs', async (req, res) => {
  try {
    const newJob = new Job({
      title: req.body.title,
      company: req.body.company,
      location: req.body.location,
      type: req.body.type,
      description: req.body.description
    })

    const savedJob = await newJob.save()

    res.status(201).json({
      id: savedJob._id.toString(),
      title: savedJob.title,
      company: savedJob.company,
      location: savedJob.location,
      type: savedJob.type,
      description: savedJob.description
    })
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: 'Failed to add job'
    })
  }
})

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('MongoDB connected successfully')

    const count = await Job.countDocuments()

    if (count === 0) {
      await Job.insertMany(initialJobs)
      console.log('Initial jobs restored to MongoDB')
    }

    app.listen(PORT, () => {
      console.log(`JobNest server running on http://localhost:${PORT}`)
    })
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error)
  })