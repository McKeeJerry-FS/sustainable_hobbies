import React from 'react';
import Navbar from '../components/navbar';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';
import './App.css'

function App() {
  
  return (
    <>
      <Navbar />
      <main>

      <div>
        {/* Placeholder for Branding Images */}
      </div>
      <LoginForm />
      </main>
      <footer>
        <Footer />
      </footer>
      
    </>
  )
}

export default App
