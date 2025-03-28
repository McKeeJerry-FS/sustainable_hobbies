import { useState } from 'react'
import Navbar from '../components/navbar';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div>
        {/* Placeholder for Branding Images */}
      </div>
      <h1 className='text-center display-3'>Garden Glow</h1>
      <h3 className='text-center display-5'>Track Your Sustainable Hobbies Easier and Quicker with this App!</h3>
      <div className="card">
        <button className='btn btn-primary btn-sm' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
