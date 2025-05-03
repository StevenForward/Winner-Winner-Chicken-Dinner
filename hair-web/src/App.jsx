import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1 style={{ padding: '30px' }}>Home Page</h1>} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;