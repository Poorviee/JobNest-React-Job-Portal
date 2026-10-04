const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

// MongoDB Job Schema
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

// Home route
app.get('/', (req, res) => {
  res.json({
    message: 'JobNest API is running!'
  })
})

// GET all jobs
app.get('/api/jobs', async (req, res) => {
  try {
    const jobs = await Job.find()
    res.json(jobs)
  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch jobs'
    })
  }
})

// GET a single job by ID
app.get('/api/jobs/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id)

    if (!job) {
      return res.status(404).json({
        message: 'Job not found'
      })
    }

    res.json(job)
  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch job'
    })
  }
})

// POST a new job
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

    res.status(201).json(savedJob)
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
  .then(() => {
    console.log('MongoDB connected successfully')

    app.listen(PORT, () => {
      console.log(
        `JobNest server running on http://localhost:${PORT}`
      )
    })
  })
  .catch((error) => {
    console.error(
      'MongoDB connection failed:',
      error
    )
  })