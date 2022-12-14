import { useState } from 'react'
import { HomePage } from './components/HomePage'
import { FormPage } from './components/FormPage'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function App() {
  const [formValues, setFormValues] = useState([])


  return (
    <div className="ap">
      <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/apply">Application Form</Link>
          </li>
        </ul>        
      </nav>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/apply" element={<FormPage />} />
      </Routes>
      </BrowserRouter>

    </div>
  )
}
