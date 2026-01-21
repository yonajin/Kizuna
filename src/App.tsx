
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Section from "./components/Section"
import Footer from "./components/Footer"
import { midnightPlays, lyricsThatStayed, lovedAndLiked } from "./data/songs"


function App() {

  return (
    
    <div className="min-h-screen bg-zinc-950">
      <Navbar />

      <main>
      <Hero />

      <Section title="Midnight Plays" songs={midnightPlays} />
      <Section title="Lyrics That Stayed" songs={lyricsThatStayed} />
      <Section title="Loved & Liked" songs={lovedAndLiked} />

      <Footer />

      </main>

    </div>
  )
}

export default App

