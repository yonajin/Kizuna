import Hero from "../components/Hero"
import Section from "../components/Section"
import { midnightPlays, lyricsThatStayed, lovedAndLiked } from "../data/songs"

export default function Home() {
  return (
    <div className="pt-15">
      <Hero />
      <Section title="Midnight Plays" songs={midnightPlays} />
      <Section title="Lyrics That Stayed" songs={lyricsThatStayed} />
      <Section title="Loved & Liked" songs={lovedAndLiked} />
    </div>
  )
}

