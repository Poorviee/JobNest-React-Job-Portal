import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import JobList from './components/JobList'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <JobList />
    </div>
  )
}

export default App