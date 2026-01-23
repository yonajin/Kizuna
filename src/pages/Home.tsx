import Hero from "../components/Hero"
import Section from "../components/Section"
import Footer from "../components/Footer"
import SongList from "../components/SongList"
import { songs, midnightPlays, lyricsThatStayed, lovedAndLiked } from "../data/songs"

type Props = {
  selectedArtist: string | null
}

export default function Home({ selectedArtist }: Props) {
  return (
    <div className="pt-24">
      <SongList songs={songs} selectedArtist={selectedArtist} />
      <Hero />
      <Section title="Midnight Plays" songs={midnightPlays} />
      <Section title="Lyrics That Stayed" songs={lyricsThatStayed} />
      <Section title="Loved & Liked" songs={lovedAndLiked} />
      <Footer />
    </div>
  )
}

