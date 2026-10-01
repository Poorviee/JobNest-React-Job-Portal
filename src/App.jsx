import './App.css'
import Navbar from './components/Navbar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Jobs from './pages/Jobs'
import JobDetails from './pages/JobDetails'
import AddJob from './pages/AddJob'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/jobs" element={<Jobs />} />

          <Route
            path="/jobs/:id"
            element={<JobDetails />}
          />

          <Route
            path="/add-job"
            element={<AddJob />}
          />

          <Route
            path="/about"
            element={<About />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  )
}

export default App