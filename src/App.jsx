import Navbar from '../components/navbar';
import './App.css'

function App() {
  
  return (
    <>
      <Navbar />
      <div>
        {/* Placeholder for Branding Images */}
      </div>
      <h1 className='text-center display-3 m-2'>Garden Glow</h1>
      <h3 className='text-center display-5 m-2'>Track Your Sustainable Hobbies Easier and Quicker with this App!</h3>
      <div className="card m-5 p-5 text-center shadow-lg border-3">
        <h3 className='Please Log in...'></h3>
        <input className='m-2 p-2' type="text" name="username" id="username" placeholder='Enter Username'/>
        <input className='m-2 p-2' type="password" name="password" id="password" placeholder='Enter password'/>
        <button type="submit" className='btn btn-primary mt-3'>Login</button>
      </div>
      
    </>
  )
}

export default App
