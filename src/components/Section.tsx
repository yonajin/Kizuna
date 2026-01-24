import SongCard from "../components/SongCard"

type Song = {
  title: string
  artist: string
  lyric: string
  rating: "like" | "love"
  genres: string[]
}

type SectionProps = {
  title: string
  songs: Song[]
}

export default function Section({ title, songs }: SectionProps) {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-8">
        {title}
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {songs.map((song, index) => (
        <SongCard key={song.id} song={song} />
        ))}
      </div>
    </section>
  )
}
