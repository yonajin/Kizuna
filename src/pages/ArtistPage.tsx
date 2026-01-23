import { useParams } from "react-router-dom"
import SongCard from "../components/SongCard"
import { songs } from "../data/songs"

export default function ArtistPage() {
  const { artistName } = useParams()

  const decodedArtist = decodeURIComponent(artistName ?? "")

  const artistSongs = songs.filter(
    (song) => song.artist.toLowerCase() === decodedArtist.toLowerCase()
  )

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-8 pt-24">
      <h1 className="text-3xl font-bold mb-6">{decodedArtist}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {artistSongs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  )
}
