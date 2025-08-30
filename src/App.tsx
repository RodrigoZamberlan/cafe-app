import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (<div>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <hr />
      <Outlet />
    </div>)
}

export default App
