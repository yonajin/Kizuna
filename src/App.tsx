import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import ArtistPage from "./pages/ArtistPage"

function App() {
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar
        selectedArtist={selectedArtist}
        setSelectedArtist={setSelectedArtist}
      />

      <Routes>
        <Route
          index
          element={<Home selectedArtist={selectedArtist} />}
        />
        <Route
          path="/artist/:artistName"
          element={<ArtistPage />}
        />
      </Routes>
    </div>
  )
}

export default App
