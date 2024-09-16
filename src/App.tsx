import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import EmailContainer from "./components/emailChannel/EmailContainer.tsx"


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmailContainer />} />
        {/* <Route path="/call" element={<CallContainer />} /> */}

      </Routes>
    </Router>
  )
}

export default App
