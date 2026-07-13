import { Routes, Route } from "react-router-dom"
import "./App.css"
import AboutPage from "./pages/AboutPage/AboutPage"
import Navigation from "./components/Navigation/Navigation"

function Home() {
  return <h1>Home</h1>
}

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
